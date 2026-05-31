import { Product } from '@/modules/product/product.schema';
import { Country } from '@/shared/enums/country.enum';
import { Platform } from '@/shared/enums/platform.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose, Transform } from 'class-transformer';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';

// done
export type ShopDocument = HydratedDocument<Shop>;

@Schema({
	collection: 'shops',
	timestamps: true,
})
export class Shop {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: Types.ObjectId;

	@Expose()
	@Prop({
		required: true,
		type: String,
		enum: Platform,
		default: Platform.UNKNOWN,
	})
	platform!: string;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
		unique: true,
	})
	platformShopId!: string;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	name!: string;

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
		default: '',
		type: String,
		trim: true,
	})
	logo!: string;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	url!: string;

	@Expose()
	@Prop({
		default: '',
		type: String,
		trim: true,
	})
	city?: string;

	@Expose()
	@Prop({
		required: true,
		type: String,
		enum: Country,
		default: Country.unknown,
	})
	country!: string;

	@Expose()
	@Prop({
		default: false,
		type: Boolean,
	})
	isOfficial?: boolean;

	@Expose()
	@Prop({
		default: 0,
		type: Number,
	})
	rating?: number;

	@Expose()
	@Prop({
		default: 0,
		type: Number,
	})
	totalFollowers?: number;

	@Expose()
	@Prop({
		default: 0,
		type: Number,
	})
	responseRate?: number;

	// Mảng chứa các ObjectId tham chiếu tới collection Products
	@Expose()
	@Prop({
		type: [{ type: Types.ObjectId, ref: Product.name }],
		default: [],
	})
	products!: Types.ObjectId[];

	// Dùng Mixed để chứa dữ liệu raw từ API phản hồi (do cấu trúc mỗi sàn một khác)
	@Expose()
	@Prop({
		type: MongooseSchema.Types.Mixed,
		default: {},
	})
	rawResponse!: Record<string, any>;

	// Chứa các thông số đo lường tùy biến phát sinh sau này
	@Expose()
	@Prop({
		type: MongooseSchema.Types.Mixed,
		default: {},
	})
	stats?: Record<string, any>;

	@Expose()
	@Prop({
		required: true,
		default: true,
		type: Boolean,
	})
	isActive!: boolean;

	@Expose()
	@Prop({
		type: Date,
		default: Date.now,
	})
	lastSyncedAt!: Date;

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

export const ShopSchema = SchemaFactory.createForClass(Shop);
