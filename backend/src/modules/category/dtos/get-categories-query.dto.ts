import { IsOptional, IsBoolean, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetCategoriesQueryDto {
	@IsOptional()
	@IsBoolean()
	@Transform(({ value }) => value === 'true' || value === true)
	isActive?: boolean;

	@IsOptional()
	@IsNumber()
	@Transform(({ value }) => parseInt(value, 10))
	level?: number;

	@IsOptional()
	@IsString()
	parentId?: string;

	@IsOptional()
	@IsBoolean()
	@Transform(({ value }) => value === 'true' || value === true)
	tree?: boolean;
}
