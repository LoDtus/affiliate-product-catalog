import { Expose, Transform, Type } from 'class-transformer';
import { Types } from 'mongoose';

export class ProductSeoDto {
	@Expose()
	metaTitle!: string;

	@Expose()
	metaDescription!: string;

	@Expose()
	keywords!: string[];
}

export class ProductAffiliateDto {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: string | Types.ObjectId;

	@Expose()
	affiliateUrl!: string;

	@Expose()
	price!: number;

	@Expose()
	originalPrice!: number;

	@Expose()
	discountPercent!: number;

	@Expose()
	currency!: string;

	@Expose()
	stock!: number;

	@Expose()
	sold!: number;

	@Expose()
	rating?: number | null;

	@Expose()
	ratingCount?: number | null;
}

export class ProductShopDto {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: string | Types.ObjectId;

	@Expose()
	platform!: string;

	@Expose()
	name!: string;

	@Expose()
	slug!: string;

	@Expose()
	city?: string;

	@Expose()
	country!: string;
}

export class ProductImageDto {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: string | Types.ObjectId;

	@Expose()
	path!: string;

	@Expose()
	alt?: string | null;
}

export class ProductItemRes {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: string | Types.ObjectId;

	@Expose()
	title!: string;

	@Expose()
	slug!: string;

	@Expose()
	description!: string;

	@Expose()
	@Type(() => ProductSeoDto)
	seo!: ProductSeoDto;

	@Expose()
	badge?: string | null;

	@Expose()
	priority?: number | null;

	@Expose()
	@Transform(({ value }) => value?.toString())
	categoryId!: string | Types.ObjectId;

	@Expose()
	@Type(() => ProductAffiliateDto)
	affiliate!: ProductAffiliateDto;

	@Expose()
	@Type(() => ProductShopDto)
	shop!: ProductShopDto;

	@Expose()
	@Type(() => ProductImageDto)
	images!: ProductImageDto[];

	@Expose()
	createdAt!: Date;

	@Expose()
	updatedAt!: Date;

	@Expose()
	deletedAt!: Date | null;
}
