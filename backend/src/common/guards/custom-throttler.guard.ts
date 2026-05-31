import { ExecutionContext, Injectable } from '@nestjs/common';
import { ThrottlerException, ThrottlerGuard, ThrottlerRequest } from '@nestjs/throttler';

@Injectable()
export class CustomThrottlerGuard extends ThrottlerGuard {
	/**
	 * Override generateKey để ưu tiên userId (nếu authenticated) > IP fallback
	 */
	protected generateKey(
		context: ExecutionContext,
		tracker: string, // IP từ getTracker()
		name: string, // Tên throttler
	): string {
		const req = context.switchToHttp().getRequest();
		const userId = req.user?.sub || req.user?.id;
		return userId ? `user:${userId}:${name}` : `ip:${tracker}:${name}`;
	}

	// Fix: Làm async và return Promise<string>
	protected async getTracker(req: Record<string, any>): Promise<string> {
		// Lấy IP thật từ proxy (X-Forwarded-For nếu có)
		// req.ips là array từ express (nếu trust proxy bật)
		const ip = req.ips?.length ? req.ips[0] : req.ip;

		// Nếu cần async (ví dụ lookup geo hoặc header custom), thêm await ở đây
		// Hiện tại đơn giản → resolve ngay
		return Promise.resolve(ip || 'unknown');
	}

	/**
	 * Override handleRequest để thêm header Retry-After khi bị block (429)
	 * Signature đúng: nhận ThrottlerRequest object
	 */
	protected async handleRequest(
		requestProps: ThrottlerRequest,
	): Promise<boolean> {
		const {
			context,
			limit,
			ttl,
			throttler,
			blockDuration,
			getTracker,
			generateKey,
		} = requestProps;

		try {
			return await super.handleRequest(requestProps);
		} catch (err) {
			if (err instanceof ThrottlerException) {
				const response = context.switchToHttp().getResponse();

				// Header Retry-After
				const retryAfterSeconds = Math.ceil(ttl / 1000);
				response.header('Retry-After', retryAfterSeconds.toString());
				response.header('X-RateLimit-Reset', Math.floor(Date.now() / 1000) + retryAfterSeconds);
				throw err;
			}
			throw err;
		}
	}
}
