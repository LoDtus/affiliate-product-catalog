import { PublicApi } from '@/common/decorators/public-api.decorator';
import { AffiliateService } from '@/modules/affiliate/affiliate.service';
import { AffiliateFilter } from '@/modules/affiliate/dtos/affiliate.filter';
import { QueryRequestDto } from '@/shared/dtos/request/query-request.dto';
import { ApiResponseDto } from '@/shared/dtos/response/api-response.dto';
import { Body, Controller, Delete, HttpCode, HttpStatus, Post, Put } from '@nestjs/common';

@Controller('affiliate')
export class AffiliateController {
	constructor(private readonly affiliateService: AffiliateService) {}

	@Post('/search')
	@PublicApi()
	@HttpCode(HttpStatus.OK)
	async search(@Body() req: QueryRequestDto<AffiliateFilter>) {
		// const res = await this.productService.searchUsers(req);
		const res = null;
		return new ApiResponseDto({
			success: true,
			status: 200,
			data: res,
		});
	}

	@Post('/create')
	@PublicApi()
	async create() {
		// const res = await this.productService.searchUsers(req);
		const res = null;
		return new ApiResponseDto({
			success: true,
			status: 200,
			data: res,
		});
	}

	@Put('/update')
	@PublicApi()
	async update() {
		// const res = await this.productService.searchUsers(req);
		const res = null;
		return new ApiResponseDto({
			success: true,
			status: 200,
			data: res,
		});
	}

	@Put('/delete/soft')
	@PublicApi()
	async softDelete() {
		// const res = await this.productService.searchUsers(req);
		const res = null;
		return new ApiResponseDto({
			success: true,
			status: 200,
			data: res,
		});
	}

	@Delete('/delete/force')
	@PublicApi()
	async forceDelete() {
		// const res = await this.productService.searchUsers(req);
		const res = null;
		return new ApiResponseDto({
			success: true,
			status: 200,
			data: res,
		});
	}
}
