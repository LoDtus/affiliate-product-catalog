import { Product } from '@/modules/product/product.schema';
import { Shop } from '@/modules/shop/shop.schema';
import { Country } from '@/shared/enums/country.enum';
import { Platform } from '@/shared/enums/platform.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose, Transform, Type } from 'class-transformer';
import { HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';

export type AffiliateDocument = HydratedDocument<Affiliate>;

export enum Currency {
	USD = 'USD', // United States Dollar
	CAD = 'CAD', // Canadian Dollar
	GBP = 'GBP', // British Pound Sterling
	EUR = 'EUR', // Euro (Dùng cho de, nl, fr, be, es, pt)
	SEK = 'SEK', // Swedish Krona
	NOK = 'NOK', // Norwegian Krone
	JPY = 'JPY', // Japanese Yen
	KRW = 'KRW', // South Korean Won
	VND = 'VND', // Vietnamese Dong
	AUD = 'AUD', // Australian Dollar
	NZD = 'NZD', // New Zealand Dollar
	UNKNOWN = 'UNKNOWN',
}

export enum Badge {
	BEST_SELLER = 'BEST_SELLER',
	FLASH_SALE = 'FLASH_SALE',
	NEW = 'NEW', // tự định nghĩa (dưới 30 ngày đều coi là mới)
	TRENDING = 'TRENDING', // tự định nghĩa (dựa vào số lượt xem)
	AUTHENTIC = 'AUTHENTIC',
	OFFICIAL = 'OFFICIAL',
	TRUSTED_SELLER = 'TRUSTED_SELLER', // Tùy nền tảng, dựa vào shop_rating nếu có
	TOP_RATED = 'TOP_RATED',
	POPULAR = 'POPULAR', // tự định nghĩa (dựa vào ratingCount > n ~ 200 đến 500)
}

@Schema({
	collection: 'affiliates',
	timestamps: true,
})
export class Affiliate {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: Types.ObjectId;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	originUrl!: string;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	affiliateUrl!: string;

	@Expose()
	@Prop({
		required: true,
		default: 0,
		type: Number,
	})
	price!: number;

	@Expose()
	@Prop({
		required: true,
		default: 0,
		type: Number,
	})
	originalPrice!: number;

	@Expose()
	@Prop({
		required: true,
		default: 0,
		type: Number,
	})
	discountPercent!: number;

	@Expose()
	@Prop({
		required: true,
		type: String,
		enum: Currency,
		default: Currency.UNKNOWN,
	})
	currency!: Currency;

	@Expose()
	@Prop({
		default: 0,
		type: Number,
	})
	stock!: number;

	@Expose()
	@Prop({
		default: 0,
		type: Number,
	})
	sold!: number;

	@Expose()
	@Prop({
		default: 0,
		type: Number,
	})
	rating?: number | null;

	@Expose()
	@Prop({
		default: 0,
		type: Number,
	})
	ratingCount?: number | null;

	@Expose()
	@Prop({
		type: [String],
		enum: Object.values(Badge),
		default: [],
	})
	badges?: Badge[];

	// Dùng Mixed cho các object động, chứa log crawl hoặc stats chưa cố định cấu trúc
	@Expose()
	@Prop({
		type: MongooseSchema.Types.Mixed,
		default: {},
	})
	rawResponse!: Record<string, any>;

	@Expose()
	@Prop({
		type: MongooseSchema.Types.Mixed,
		default: {},
	})
	stats?: Record<string, any>;

	@Expose()
	@Prop({
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

	// Các trường do timestamps: true tự sinh, khai báo để class-transformer nhận diện
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

export const AffiliateSchema = SchemaFactory.createForClass(Affiliate);
