import { IsOptional, IsArray, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import {
	BaseFilterDto,
	BooleanFilter,
	DateFilter,
	StringFilter,
} from '@/shared/dtos/request/base-filter.dto';

export class ProductFilter extends BaseFilterDto {
	id?: string;
    
}
