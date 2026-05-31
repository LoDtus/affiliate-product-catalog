import { CategoryDocument } from './category.schema';
import { GetCategoriesQueryDto } from './dtos/get-categories-query.dto';

export interface ICategoryRepository {
	findAll(query: GetCategoriesQueryDto): Promise<CategoryDocument[]>;
	findById(id: string): Promise<CategoryDocument | null>;
	findBySlug(slug: string): Promise<CategoryDocument | null>;
}
