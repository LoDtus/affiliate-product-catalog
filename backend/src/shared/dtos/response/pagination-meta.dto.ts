export class PaginationMetaDto {
	page?: number;
	pageSize?: number;
	totalItems?: number;
	totalPages?: number;

	constructor(data: Partial<PaginationMetaDto> = {}) {
		this.page = data.page;
		this.pageSize = data.pageSize;
		this.totalItems = data.totalItems;
		this.totalPages = data.totalPages;
	}
}