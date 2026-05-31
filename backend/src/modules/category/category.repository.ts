import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './category.schema';
import { ICategoryRepository } from './category.interface';
import { GetCategoriesQueryDto } from './dtos/get-categories-query.dto';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
	constructor(
		@InjectModel(Category.name)
		private readonly categoryModel: Model<CategoryDocument>,
	) {}

	async findAll(query: GetCategoriesQueryDto): Promise<CategoryDocument[]> {
		const { isActive, level, parentId } = query;
		const filter: any = { deletedAt: null };

		if (isActive !== undefined) filter.isActive = isActive;
		if (level !== undefined) filter.level = level;
		if (parentId !== undefined)
			filter.parentId = parentId === 'null' ? null : parentId;

		return this.categoryModel
			.find(filter)
			.sort({ sortOrder: 1, createdAt: -1 })
			.lean() // Tăng tốc độ đọc dữ liệu lên tối đa
			.exec() as unknown as CategoryDocument[];
	}

	async findById(id: string): Promise<CategoryDocument | null> {
		return this.categoryModel
			.findOne({ _id: id, deletedAt: null })
			.lean()
			.exec() as unknown as CategoryDocument | null;
	}

	async findBySlug(slug: string): Promise<CategoryDocument | null> {
		return this.categoryModel
			.findOne({ slug, deletedAt: null })
			.lean()
			.exec() as unknown as CategoryDocument | null;
	}
}
