import { Product } from '@/modules/product/product.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose, Transform } from 'class-transformer';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

export enum ArticleType {
	DETAIL = 'DETAIL',
	VS = 'VS',
	RANK = 'RANK',
	EDUCATION = 'EDUCATION',
	UNKNOWN = 'UNKNOWN',
}

export enum ArticleStatus {
	DRAFT = 'DRAFT',
	PUBLISHED = 'PUBLISHED',
	ARCHIVED = 'ARCHIVED',
}

@Schema({
	collection: 'articles', // Viết hoa chữ đầu đồng bộ với các collection trước
	timestamps: true, // Tự động quản lý createdAt và updatedAt
})
export class Article {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: Types.ObjectId;

	@Expose()
	@Prop({
		trim: true,
		type: String,
	})
	title?: string | null;

	@Expose()
	@Prop({
		unique: true,
		trim: true,
		index: true,
		type: String,
	})
	slug?: string;

	@Expose()
	@Prop({
		trim: true,
		type: String,
	})
	description?: string;

	@Expose()
	@Prop({
		trim: true,
		type: String,
	})
	thumbnail?: string | null;

	@Expose()
	@Prop({
		type: Number,
		default: 0,
	})
	priority?: number | null;

	@Expose()
	@Prop({
		required: true,
		type: String,
		enum: ArticleType,
		default: ArticleType.UNKNOWN,
	})
	type!: ArticleType;

	@Expose()
	@Prop({
		required: true,
		default: '',
		type: String,
		trim: true,
	})
	content!: string; // Chứa nội dung dạng Markdown hoặc HTML (bao gồm cả ảnh, iframe video)

	// Mảng chứa các ObjectId tham chiếu trực tiếp tới collection Products
	@Expose()
	@Prop({
		type: [{ type: Types.ObjectId, ref: Product.name }],
		default: [],
	})
	products!: Types.ObjectId[];

	// Dùng Mixed cho các chỉ số đo lường (ví dụ: viewCount, shareCount, timeToRead...)
	@Expose()
	@Prop({
		type: MongooseSchema.Types.Mixed,
		default: {},
	})
	stats?: Record<string, any>;

	@Expose()
	@Prop({
		required: true,
		index: true,
		type: String,
		enum: ArticleStatus,
		default: ArticleStatus.DRAFT,
	})
	status!: ArticleStatus;

	@Expose()
	@Prop({
		default: false,
		index: true,
		type: Boolean,
	})
	isHidden!: boolean;

	@Expose()
	@Prop({
		type: Date,
		default: null,
	})
	publishedAt!: Date | null;

	// Khai báo các trường do timestamps tự sinh cho class-transformer nhận diện
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

export const ArticleSchema = SchemaFactory.createForClass(Article);
