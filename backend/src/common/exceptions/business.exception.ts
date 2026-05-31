// src/common/exceptions/business.exception.ts
import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../../shared/constants/error-code.constant';

export class BusinessException extends HttpException {
	constructor(
		public readonly code: ErrorCode,
		message: string,
		public readonly details?: any,
	) {
		super(
			{
				code,
				message,
				details: details ?? null,
			},
			HttpStatus.BAD_REQUEST,
		);
		this.name = 'BusinessException';
	}
}
