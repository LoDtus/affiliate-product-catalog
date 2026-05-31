import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { PublicApi } from '@/common/decorators/public-api.decorator';
import { ApiResponseDto } from '@/shared/dtos/response/api-response.dto';
import { GetCategoriesQueryDto } from '@/modules/category/dtos/get-categories-query.dto';
import { FindByIdParamDto, FindBySlugParamDto } from '@/modules/category/dtos/category-param.dto';

@Controller('categories')
// @UseInterceptors(ClassSerializerInterceptor)
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get('/')
	@PublicApi()
	async getAll(@Query() query: GetCategoriesQueryDto) {
		const res = await this.categoryService.getAllCategories(query);
		return new ApiResponseDto({
			success: true,
			status: 200,
			data: res,
		});
	}

	@Get('/id/:id')
	@PublicApi()
	async getById(@Param() params: FindByIdParamDto) {
		const res = await this.categoryService.getCategoryById(params.id);
		return new ApiResponseDto({
			success: true,
			status: 200,
			data: res,
		});
	}

	@Get('/slug/:slug')
	@PublicApi()
	async getBySlug(@Param() params: FindBySlugParamDto) {
		const res = await this.categoryService.getCategoryBySlug(params.slug);
		return new ApiResponseDto({
			success: true,
			status: 200,
			data: res,
		});
	}
}
