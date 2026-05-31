import {
	CallHandler,
	ExecutionContext,
	Inject,
	Injectable,
	NestInterceptor,
} from '@nestjs/common';
import type { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpCacheInterceptor implements NestInterceptor {
	constructor(
        @Inject(CACHE_MANAGER)
        private cacheManager: Cache
    ) {}

	async intercept(
		context: ExecutionContext,
		next: CallHandler,
	): Promise<Observable<any>> {
		const request = context.switchToHttp().getRequest();
		if (request.method !== 'GET') return next.handle();

		const key = `http:${request.method}:${request.originalUrl}`;
		const cached = await this.cacheManager.get(key);
		if (cached) return of(cached);

		return next.handle().pipe(
			tap(async (response) => {
                const ttl = 60 * 1000; // 1 phút
				await this.cacheManager.set(key, response, ttl);
			}),
		);
	}
}
