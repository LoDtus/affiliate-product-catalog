import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose, Transform, Type } from 'class-transformer';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';

export enum CategoryType {
	SELECT = 'SELECT',
	RANGE = 'RANGE',
	CHECKBOX = 'CHECKBOX',
	RADIO = 'RADIO',
}

@Schema({ _id: false })
export class CategorySeo {
	@Expose()
	@Prop({
		required: true,
		trim: true,
		type: String,
	})
	metaTitle!: string;

	@Expose()
	@Prop({
		required: true,
		trim: true,
		type: String,
	})
	metaDescription!: string;

	@Expose()
	@Prop({
		type: [String],
		default: [],
	})
	keywords!: string[];
}

@Schema({ _id: false })
export class CategoryFilter {
	@Expose()
	@Prop({
		required: true,
		trim: true,
		type: String,
	})
	key!: string; // ví dụ: 'brand', 'price-range'

	@Expose()
	@Prop({
		required: true,
		trim: true,
		type: String,
	})
	label!: string; // ví dụ: 'Thương hiệu', 'Mức giá'

	@Expose()
	@Prop({
		required: true,
		type: String,
		enum: CategoryType,
		default: CategoryType.SELECT,
	})
	type!: CategoryType;
}

export type CategoryDocument = HydratedDocument<Category>;

@Schema({
	collection: 'categories',
	timestamps: true,
})
export class Category {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: Types.ObjectId;

	@Expose()
	@Prop({
		required: true,
		unique: true,
		trim: true,
		index: true,
		type: String,
	})
	slug!: string;

	@Expose()
	@Prop({
		required: true,
		trim: true,
		type: String,
	})
	title!: string;

	@Expose()
	@Prop({
		default: '',
		trim: true,
		type: String,
	})
	description!: string;

	@Expose()
	@Prop({
		default: '',
		trim: true,
		type: String,
	})
	icon?: string;

	// Hỗ trợ cấu trúc cây Đa Cấp (Tree Structure)
	@Expose()
	@Prop({
		type: Types.ObjectId,
		ref: Category.name,
		default: null,
		index: true,
	})
	parentId?: Types.ObjectId | null;

	@Expose()
	@Prop({
		required: true,
		type: Number,
		default: 1,
		index: true,
	})
	level!: number;

	@Expose()
	@Prop({
		required: true,
		type: Number,
		default: 1,
	})
	sortOrder!: number;

	@Expose()
	@Prop({
		default: true,
		index: true,
		type: Boolean,
	})
	isActive!: boolean;

	@Expose()
	@Prop({
		type: Number,
		default: 0,
	})
	productCount!: number;

	// Nhúng cấu trúc SEO
	@Expose()
	@Prop({
		type: CategorySeo,
		required: true,
	})
	@Type(() => CategorySeo)
	seo!: CategorySeo;

	// Danh sách các bộ lọc áp dụng cho danh mục này
	@Expose()
	@Prop({
		type: [CategoryFilter],
		default: [],
	})
	@Type(() => CategoryFilter)
	filters!: CategoryFilter[];

	@Expose()
	@Prop({
		type: MongooseSchema.Types.Mixed,
		default: {},
	})
	stats?: Record<string, any>;

	// Khai báo các trường do timestamps tự sinh
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
	deletedAt?: Date | null;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
