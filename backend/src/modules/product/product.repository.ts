// import { Category, CategoryDocument } from '@/modules/category/category.schema';
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

// @Injectable()
// export class ProductRepository implements IProductRepository {
// 	constructor(
// 		@InjectModel(Category.name)
// 		private readonly categoryModel: Model<CategoryDocument>,
// 	) {}

// 	async findAll(query: GetCategoriesQueryDto): Promise<CategoryDocument[]> {
// 		const { isActive, level, parentId } = query;
// 		const filter: any = { deletedAt: null };

// 		if (isActive !== undefined) filter.isActive = isActive;
// 		if (level !== undefined) filter.level = level;
// 		if (parentId !== undefined)
// 			filter.parentId = parentId === 'null' ? null : parentId;

// 		return this.categoryModel
// 			.find(filter)
// 			.sort({ sortOrder: 1, createdAt: -1 })
// 			.lean() // Tăng tốc độ đọc dữ liệu lên tối đa
// 			.exec() as unknown as CategoryDocument[];
// 	}
// }
