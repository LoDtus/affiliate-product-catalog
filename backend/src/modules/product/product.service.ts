import { ProductItemRes } from '@/modules/product/dtos/product-item-res.dto';
import { DtoMapperService } from '@/shared/mappers/dto-mapper.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService extends DtoMapperService {
	// constructor(private readonly categoryRepository: CategoryRepository) {
	// 	super();
	// }

	async searchProducts(query) {
		// const products = null;
		// return this.toDtoArray(ProductItemRes, products);
	}

	async getProductById() {
		// const product = await this.categoryRepository.findById(id);
		// if (!product) {
		// 	throw new NotFoundException(
		// 		`Không tìm thấy danh mục với ID: ${id}`,
		// 	);
		// }
		// return this.toDto();
	}

	async getProductBySlug() {}

    async createProduct() {}

    async updateProduct() {}

    async softDeleteMany() {}

    async forceDeleteMany() {}
}
