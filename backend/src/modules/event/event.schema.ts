import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Expose, Transform } from 'class-transformer';
import { HydratedDocument, Types } from 'mongoose';

// done
export type EventDocument = HydratedDocument<Event>;

export enum Action {
	v = 'v', // view
	co = 'co', // click-out
	sd = 'sd', // scroll-depth
	ts = 'ts', // time-spent
}

export enum TargetType {
	p = 'p', // product
	a = 'a', // article
	s = 's', // shop
	af = 'af', // affiliate
	c = 'c', // category
}

@Schema({
	collection: 'events',
	timestamps: false, // Tắt tự động sinh createdAt/updatedAt vì log events chỉ cần thời gian ghi nhận (rat)
	versionKey: false, // Tắt __v để tối ưu dung lượng lưu trữ cho bảng log khổng lồ
})
export class Event {
	@Expose()
	@Transform(({ value }) => value?.toString())
	_id!: Types.ObjectId;

	@Expose()
	@Prop({ required: true, index: true })
	sid!: string; // Session ID từ Frontend (Đánh index để group hành vi theo phiên của 1 user)

	@Expose()
	@Prop({
		required: true,
		index: true,
		type: String,
		enum: Action,
	})
	act!: Action;

	@Expose()
	@Prop({
		required: true,
		index: true,
		type: String,
		enum: TargetType,
	})
	tType!: TargetType;

	@Expose()
	@Prop({
		required: true,
		type: Number,
		default: 0,
	})
	val!: number; // Số giây hoặc % cuộn trang

	@Expose()
	@Prop({
		type: Types.ObjectId,
		required: true,
		index: true,
	})
	tId!: Types.ObjectId; // ID đối tượng bị tác động (Sản phẩm, bài viết...). Không dùng ref vì liên kết động (Dynamic Ref)

	@Expose()
	@Prop({
		type: Date,
		required: true,
		default: Date.now,
		index: true,
	})
	rat!: Date; // Record At - Thời gian ghi nhận event
}

export const EventSchema = SchemaFactory.createForClass(Event);

// --- TỐI ƯU HÓA INDEX NÂNG CAO (Compound Index) ---
// Định kỳ bạn sẽ quét hệ thống để tính toán: "Sản phẩm X có bao nhiêu lượt click-out trong ngày hôm nay?"
// Câu lệnh dưới đây sẽ tối ưu triệt để cho các truy vấn Analytics (Aggregation) đó.
EventSchema.index({ tType: 1, act: 1, tId: 1, rat: -1 });
