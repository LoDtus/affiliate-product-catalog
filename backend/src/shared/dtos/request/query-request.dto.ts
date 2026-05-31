import {
	IsArray,
	IsOptional,
	IsString,
	Validate,
	ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PaginationRequestDto } from './pagination-request.dto';
import { SearchRequestDto } from './search-request.dto';

export class QueryRequestDto<T> {
	@IsOptional()
	@ValidateNested()
	@Type(() => PaginationRequestDto)
	pagination?: PaginationRequestDto;

	@IsOptional()
	@IsString()
	sort?: string;

	@IsOptional()
	@ValidateNested()
	@Type(() => SearchRequestDto)
	search?: SearchRequestDto;

	@IsOptional()
	@Type(() => Object)
	filter?: T;

	@IsOptional()
	@IsArray()
	@IsString({ each: true })
	fields?: string[];
}
