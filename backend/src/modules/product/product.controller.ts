import { PublicApi } from '@/common/decorators/public-api.decorator';
import { QueryRequestDto } from '@/shared/dtos/request/query-request.dto';
import { ApiResponseDto } from '@/shared/dtos/response/api-response.dto';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductFilter } from '@/modules/product/dtos/product.filter';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post('/search')
	@PublicApi()
	@HttpCode(HttpStatus.OK)
	async searchUsers(@Body() req: QueryRequestDto<ProductFilter>) {
		// const res = await this.productService.searchUsers(req);
		const res = null;
		return new ApiResponseDto({
			success: true,
			status: 200,
			data: res,
		});
	}
}
