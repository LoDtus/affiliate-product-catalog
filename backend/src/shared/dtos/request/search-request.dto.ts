import { IsArray, IsOptional, IsString } from "class-validator";

export class SearchRequestDto {
    @IsString()
    keyword: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    fields?: string[];
}