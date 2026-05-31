import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance, ClassConstructor } from 'class-transformer';
import { Logger } from '@nestjs/common';

@Injectable()
export abstract class DtoMapperService {
	protected readonly logger = new Logger(this.constructor.name);

	/**
	 * Serialize một entity (hoặc plain object) thành DTO đơn lẻ
	 * @param dtoClass Class của DTO mong muốn
	 * @param data Dữ liệu thô (từ DB, repository, ...)
	 * @param options Tùy chọn bổ sung nếu cần override global
	 */
	protected toDto<T>(
		dtoClass: ClassConstructor<T>,
		data: any,
		options: {
			groups?: string[];
			// Có thể mở rộng thêm nếu cần
		} = {},
	): T {
		if (!data) {
			this.logger.warn(
				`toDto received null/undefined data for ${dtoClass.name}`,
			);
			throw new NotFoundException(`Không tìm thấy dữ liệu để serialize`);
		}

		return plainToInstance(dtoClass, data, {
			excludeExtraneousValues: true,
			exposeUnsetFields: false,
			enableImplicitConversion: true,
			...options, // cho phép override groups nếu dùng @Expose({ groups: [...] })
		});
	}

	/**
	 * Serialize mảng entities thành mảng DTO
	 * @param dtoClass Class của DTO
	 * @param data Mảng dữ liệu thô
	 */
	protected toDtoArray<T>(
		dtoClass: ClassConstructor<T>,
		data: any[],
		options: {
			groups?: string[];
		} = {},
	): T[] {
		if (!Array.isArray(data)) {
			this.logger.warn(
				`toDtoArray expected array but got ${typeof data}`,
			);
			return [];
		}

		return plainToInstance(dtoClass, data, {
			excludeExtraneousValues: true,
			exposeUnsetFields: false,
			enableImplicitConversion: true,
			...options,
		});
	}

	/**
	 * Optional: helper để serialize với pagination (rất phổ biến)
	 * Giả sử response pagination có dạng { items, meta }
	 */
	protected toPaginatedDto<T>(
		dtoClass: ClassConstructor<T>,
		items: any[],
		total: number,
		page: number,
		limit: number,
	): {
		items: T[];
		metadata: { total: number; page: number; limit: number; pages: number };
	} {
		const data = this.toDtoArray(dtoClass, items);
		const pages = Math.ceil(total / limit);

		return {
			items,
			metadata: {
				total,
				page,
				limit,
				pages,
			},
		};
	}

	// Bạn có thể thêm các helper khác ở đây, ví dụ:
	// protected toPlain(dto: any) { return instanceToPlain(dto); }
}
