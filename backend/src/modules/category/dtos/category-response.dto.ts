import { Expose, Transform, Type } from 'class-transformer';
import { Types } from 'mongoose';

export class CategoryResponseDto {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: string; // Chuyển thành string ở tầng DTO cho Frontend an tâm dùng

	@Expose()
	slug!: string;

	@Expose()
	title!: string;

	@Expose()
	description!: string;

	@Expose()
	icon?: string;

	@Expose()
	@Transform(({ value }) => value?.toString())
	parentId?: string | null;

	@Expose()
	level!: number;

	@Expose()
	sortOrder!: number;

	@Expose()
	isActive!: boolean;

	@Expose()
	productCount!: number;

	// 🌟 ĐÂY CHÍNH LÀ CHÌA KHÓA: Định nghĩa đệ quy cho danh mục con
	@Expose()
	@Type(() => CategoryResponseDto) // Khai báo rõ ràng kiểu dữ liệu để tầng sâu cũng được @Transform
	children?: CategoryResponseDto[];
}
