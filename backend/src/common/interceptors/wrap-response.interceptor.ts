import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
} from '@nestjs/common';
import { ApiResponseDto } from '../../shared/dtos/response/api-response.dto';
import { map, Observable } from 'rxjs';
import { ErrorCode } from '../../shared/constants/error-code.constant';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class WrapResponseInterceptor<T> implements NestInterceptor<
	T,
	ApiResponseDto<T>
> {
	constructor(private readonly cls: ClsService) {}

	intercept(
		context: ExecutionContext,
		next: CallHandler,
	): Observable<ApiResponseDto<T>> {
		return next.handle().pipe(
			map((result: any) => {
				// Nếu đã là ApiResponseDto thì trả nguyên (tránh wrap lồng)
				if (result instanceof ApiResponseDto) {
					return result;
				}

				const httpResponse = context.switchToHttp().getResponse();
				const status = httpResponse.statusCode ?? 200;
				const traceId = this.cls.getId() as string;
				let data = result;
				let metadata: any = undefined;

				if (result && typeof result === 'object' && 'data' in result) {
					data = result.data;
					metadata = result.metadata;
				}

				return new ApiResponseDto<T>({
					timestamp: new Date().toISOString(),
					success: status < 400,
					status,
					data: status < 400 ? data : null,
					error:
						status >= 400
							? {
									code: ErrorCode.ERROR,
									details: result?.message || 'Unknown Error',
								}
							: undefined,
					metadata,
					traceId,
				});
			}),
		);
	}
}
