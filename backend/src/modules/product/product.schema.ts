import { Affiliate } from '@/modules/affiliate/affiliate.schema';
import { Article } from '@/modules/article/article.schema';
import { Category } from '@/modules/category/category.schema';
import { Media } from '@/modules/media/media.schema';
import { Shop } from '@/modules/shop/shop.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose, Transform } from 'class-transformer';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

@Schema({ _id: false })
class Attribute {
	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	key!: string;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	label!: string;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	value!: string;
}

@Schema({ _id: false })
class Seo {
	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	metaTitle!: string;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	metaDescription!: string;

	@Expose()
	@Prop({
		type: [String],
		default: [],
	})
	keywords!: string[];
}

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: Types.ObjectId;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	title!: string;

	@Expose()
	@Prop({
		required: true,
		unique: true,
		type: String,
		trim: true,
	})
	slug!: string;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	description!: string;

	@Expose()
	@Prop({
		default: null,
		type: String,
	})
	badge?: string | null;

	@Expose()
	@Prop({
		default: 0,
		type: Number,
	})
	priority?: number | null;

	// Các trường Reference sang Collection khác
	@Expose()
	@Prop({
		type: Types.ObjectId,
		ref: Category.name,
		required: true,
	})
	categoryId!: Types.ObjectId;

	@Expose()
	@Prop({
		type: Types.ObjectId,
		ref: Affiliate.name,
		required: true,
	})
	affiliateId!: Types.ObjectId;

	@Expose()
	@Prop({
		type: Types.ObjectId,
		ref: Shop.name,
		required: true,
	})
	shopId!: Types.ObjectId;

	// Array of ObjectIds
	@Expose()
	@Prop({
		type: [{ type: Types.ObjectId, ref: Media.name }],
		default: [],
	})
	images!: Types.ObjectId[];

	@Expose()
	@Prop({
		type: [{ type: Types.ObjectId, ref: Article.name }],
		default: [],
	})
	articles!: Types.ObjectId[];

	// Nhúng các Sub-document vào
	@Expose()
	@Prop({
		type: [Attribute],
		default: [],
	})
	attributes!: Attribute[];

	@Expose()
	@Prop({
		type: Seo,
		required: true,
	})
	seo!: Seo;

	@Expose()
	@Prop({
		type: MongooseSchema.Types.Mixed,
		default: {},
	})
	stats?: Record<string, any>;

	@Expose()
	@Prop({ type: Date })
	createdAt!: Date;

	@Expose()
	@Prop({ type: Date })
	updatedAt!: Date;

	@Expose()
	@Prop({
		type: Date,
		default: null,
	})
	deletedAt!: Date | null;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
