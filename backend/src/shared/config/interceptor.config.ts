import { ClassSerializerInterceptor } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";

export const configureInterceptors = (app: NestExpressApplication) => {
	app.useGlobalInterceptors(
		new ClassSerializerInterceptor(app.get(Reflector), {
			excludeExtraneousValues: true, // Ẩn mọi field thừa so với DTO được khai báo
			exposeUnsetFields: false, // Loại bỏ các trường undefined để JSON trả về gọn nhẹ
			enableImplicitConversion: true, // Tự động chuyển đổi kiểu dữ liệu cơ bản (số, chuỗi) nếu cần
		}),
	);
};
