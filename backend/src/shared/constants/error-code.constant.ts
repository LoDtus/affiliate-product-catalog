export enum ErrorCode {
	// ── General ────────────────────────────────────────────────────────────────
	ERROR = 'ERROR',
	INTERNAL_ERROR = 'INTERNAL_ERROR',
	INVALID_REQUEST = 'INVALID_REQUEST',
	UNAUTHORIZED = 'UNAUTHORIZED',
	FORBIDDEN = 'FORBIDDEN',
	NOT_FOUND = 'NOT_FOUND',
	CONFLICT = 'CONFLICT',
	TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
	VALIDATION_ERROR = 'VALIDATION_ERROR',
	BAD_REQUEST = 'BAD_REQUEST',

	// ── Authentication & Authorization ─────────────────────────────────────────
	INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
	TOKEN_EXPIRED = 'TOKEN_EXPIRED',
	TOKEN_INVALID = 'TOKEN_INVALID',
	ACCOUNT_LOCKED = 'ACCOUNT_LOCKED',
	EMAIL_NOT_VERIFIED = 'EMAIL_NOT_VERIFIED',

	// ── User / Profile ─────────────────────────────────────────────────────────
	USER_NOT_FOUND = 'USER_NOT_FOUND',
	USER_ALREADY_EXISTS = 'USER_ALREADY_EXISTS',
	EMAIL_ALREADY_IN_USE = 'EMAIL_ALREADY_IN_USE',
	PHONE_ALREADY_IN_USE = 'PHONE_ALREADY_IN_USE',
	INVALID_PASSWORD = 'INVALID_PASSWORD',

	// ── Business logic specific (tùy theo domain của bạn) ──────────────────────
	// Ví dụ cho module Order
	ORDER_NOT_FOUND = 'ORDER_NOT_FOUND',
	ORDER_ALREADY_PAID = 'ORDER_ALREADY_PAID',
	INSUFFICIENT_STOCK = 'INSUFFICIENT_STOCK',
	PAYMENT_FAILED = 'PAYMENT_FAILED',

	// Ví dụ cho module Product
	PRODUCT_OUT_OF_STOCK = 'PRODUCT_OUT_OF_STOCK',
	PRODUCT_NOT_FOUND = 'PRODUCT_NOT_FOUND',

	// ── External services ──────────────────────────────────────────────────────
	EXTERNAL_SERVICE_TIMEOUT = 'EXTERNAL_SERVICE_TIMEOUT',
	EXTERNAL_SERVICE_ERROR = 'EXTERNAL_SERVICE_ERROR',

	// ── File / Upload ──────────────────────────────────────────────────────────
	FILE_TOO_LARGE = 'FILE_TOO_LARGE',
	INVALID_FILE_TYPE = 'INVALID_FILE_TYPE',
	UPLOAD_FAILED = 'UPLOAD_FAILED',
}
