import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose, Transform, Type } from 'class-transformer';
import { HydratedDocument, Types } from 'mongoose';

// done
@Schema({ _id: false })
export class Dimensions {
	@Expose()
	@Prop({
		required: true,
		type: Number,
	})
	width!: number;

	@Expose()
	@Prop({
		required: true,
		type: Number,
	})
	height!: number;
}

export type MediaDocument = HydratedDocument<Media>;

@Schema({
	collection: 'medias',
	timestamps: true,
})
export class Media {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: Types.ObjectId;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
		unique: true,
	})
	name!: string;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	path!: string;

	@Expose()
	@Prop({ type: String, trim: true })
	alt?: string | null;

	@Expose()
	@Prop({
		required: true,
		type: String,
		trim: true,
	})
	mimeType!: string;

	@Expose()
	@Prop({
		required: true,
		type: Number,
	})
	size!: number;

	@Expose()
	@Prop({ type: Number })
	duration?: number;

	@Expose()
	@Prop({
		type: Dimensions,
		required: true,
	})
	@Type(() => Dimensions)
	dimensions!: Dimensions;

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

export const MediaSchema = SchemaFactory.createForClass(Media);
