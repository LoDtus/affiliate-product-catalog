import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../../shared/constants/error-code.constant';

export class NotFoundException extends HttpException {
	constructor(
		message = 'Not found object(s)',
		public readonly details?: any,
	) {
		super(
			{
				code: ErrorCode.NOT_FOUND,
				message,
				details: details ?? null,
			},
			HttpStatus.NOT_FOUND,
		);

		this.name = 'NotFoundException';
	}
}
