import {
	Catch,
	ArgumentsHost,
	ExceptionFilter,
	HttpException,
	HttpStatus,
	Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ClsService } from 'nestjs-cls';
import { ApiResponseDto } from '../../shared/dtos/response/api-response.dto';
import { ApiErrorDto } from '../../shared/dtos/response/api-error.dto';
import { ErrorCode } from '../../shared/constants/error-code.constant';
import { NODE_ENV } from '../../shared/constants/env.constant';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
	private readonly logger = new Logger(GlobalExceptionFilter.name);

	constructor(private readonly cls: ClsService) {}

	catch(exception: unknown, host: ArgumentsHost): void {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();

		// Lấy traceId từ CLS context (đã được middleware tự động set)
		const traceId = this.cls.getId() as string; // hoặc this.cls.get('traceId') nếu bạn set custom key

		let status = HttpStatus.INTERNAL_SERVER_ERROR;
		let message = 'Đã có lỗi hệ thống xảy ra. Vui lòng thử lại sau.';
		let apiError: ApiErrorDto = {
			code: ErrorCode.INTERNAL_ERROR,
			details: null,
		};

		if (exception instanceof HttpException) {
			status = exception.getStatus();
			const res = exception.getResponse();

			if (typeof res === 'string') {
				message = res;
			} else if (res && typeof res === 'object') {
				const errorBody = res as {
					message?: string;
					code?: ErrorCode;
					details?: any;
				};
				message = errorBody.message || message;
				apiError = {
					code: errorBody.code ?? ErrorCode.INTERNAL_ERROR,
					details: errorBody.details ?? null,
				};
			}
		} else if (exception instanceof Error) {
			// Lỗi runtime không mong muốn (không phải HttpException)
			message = exception.message || message;

			this.logger.error(
				`[${request.method}] ${request.url} - ${exception.message}`,
				exception.stack,
				{
					userId: (request as any).user?.id ?? null,
					clientIp: request.ip ?? 'unknown',
					method: request.method,
					url: request.url,
					body: request.body ?? {},
					params: request.params ?? {},
					query: request.query ?? {},
					traceId,
				},
			);

			if (NODE_ENV !== 'production') {
				apiError.details = { stack: exception.stack };
			}
		}

		const apiResponse = new ApiResponseDto({
			timestamp: new Date().toISOString(),
			success: false,
			status,
			message,
			error: apiError,
			traceId,
		});

		response.status(status).json(apiResponse);
	}
}
