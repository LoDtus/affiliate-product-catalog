import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class FindByIdParamDto {
	@IsMongoId({ message: 'ID danh mục không hợp lệ' })
	id!: string;
}

export class FindBySlugParamDto {
	@IsString()
	@IsNotEmpty({ message: 'Slug không được để trống' })
	slug!: string;
}
