import { PaginationMetaDto } from './pagination-meta.dto';

export class ApiMetadataDto {
	pagination?: PaginationMetaDto;
	sort?: string;
	search?: string;
	filter?: Record<string, any>;

	constructor(data: Partial<ApiMetadataDto> = {}) {
		this.pagination = data.pagination;
		this.sort = data.sort;
		this.search = data.search;
		this.filter = data.filter;
	}
}
