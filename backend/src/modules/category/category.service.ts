import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { GetCategoriesQueryDto } from './dtos/get-categories-query.dto';
import { DtoMapperService } from '@/shared/mappers/dto-mapper.service';
import { CategoryResponseDto } from '@/modules/category/dtos/category-response.dto';

@Injectable()
export class CategoryService extends DtoMapperService {
	constructor(private readonly categoryRepository: CategoryRepository) {
		super();
	}

	async getAllCategories(query: GetCategoriesQueryDto) {
		const categories = await this.categoryRepository.findAll(query);

		if (query.tree) {
			const treeData = this.buildTree(categories);
			return this.toDtoArray(CategoryResponseDto, treeData);
		}

		return this.toDtoArray(CategoryResponseDto, categories);
	}

	async getCategoryById(id: string) {
		const category = await this.categoryRepository.findById(id);
		if (!category) {
			throw new NotFoundException(
				`Không tìm thấy danh mục với ID: ${id}`,
			);
		}
		return category;
	}

	async getCategoryBySlug(slug: string) {
		const category = await this.categoryRepository.findBySlug(slug);
		if (!category) {
			throw new NotFoundException(
				`Không tìm thấy danh mục với Slug: ${slug}`,
			);
		}
		return category;
	}

	/**
	 * Helper xây dựng cây danh mục đa cấp đệ quy
	 */
	private buildTree(categories: any[], parentId: any = null): any[] {
		const branch: any[] = [];
		for (const category of categories) {
			const categoryParentId = category.parentId
				? category.parentId.toString()
				: null;
			const targetParentId = parentId ? parentId.toString() : null;

			if (categoryParentId === targetParentId) {
				const children = this.buildTree(categories, category._id);
				if (children.length) {
					category.children = children;
				}
				branch.push(category);
			}
		}
		return branch;
	}
}
