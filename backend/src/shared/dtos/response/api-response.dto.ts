import { Exclude, Expose } from 'class-transformer';
import { ApiErrorDto } from './api-error.dto';
import { ApiMetadataDto } from './api-metadata.dto';

@Exclude()
export class ApiResponseDto<T = unknown> {
	@Expose()
	timestamp: string = new Date().toISOString();

	@Expose()
	success: boolean;

	@Expose()
	status: number = 200;

	@Expose()
	message?: string;

	@Expose()
	error?: ApiErrorDto;

	@Expose()
	data?: T;

	@Expose()
	metadata?: ApiMetadataDto;

	@Expose()
	traceId?: string;

	constructor(data: {
		success: boolean;
		status: number;
		timestamp?: string;
		message?: string;
		error?: ApiErrorDto;
		data?: T;
		metadata?: ApiMetadataDto;
		traceId?: string;
	}) {
		this.timestamp = data.timestamp ?? new Date().toISOString();
		this.success = data.success;
		this.status = data.status;
		this.message = data.message;
		this.error = data.error;
		this.data = data.data;
		this.metadata = data.metadata;
		this.traceId = data.traceId;
	}
}