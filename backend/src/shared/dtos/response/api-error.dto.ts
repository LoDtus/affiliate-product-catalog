import { ErrorCode } from '@/shared/constants/error-code.constant';

export class ApiErrorDto {
	code?: ErrorCode;
	message?: string;
	details?: any;
}
