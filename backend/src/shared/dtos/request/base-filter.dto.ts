import {
	IsArray,
	IsBoolean,
	IsDate,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

// Enum cho mode tìm kiếm chuỗi (Prisma hỗ trợ phân biệt hoa/thường)
export enum StringFilterMode {
	default = 'default', /** Case-sensitive (mặc định của Prisma) */
	insensitive = 'insensitive', /** Case-insensitive (không phân biệt hoa/thường) */
}

/**
 * Bộ lọc cho các trường kiểu chuỗi (string/text/varchar).
 * Tương ứng với Prisma StringFilter.
 */
export class StringFilter {
	/** Bằng chính xác (case-sensitive theo mode) */
	@IsOptional()
	@IsString()
	equals?: string;

	/** Không bằng (negation của equals) */
	@IsOptional()
	@IsString()
	not?: string;

	/** Chứa chuỗi con (substring search) */
	@IsOptional()
	@IsString()
	contains?: string;

	/** Bắt đầu bằng chuỗi */
	@IsOptional()
	@IsString()
	startsWith?: string;

	/** Kết thúc bằng chuỗi */
	@IsOptional()
	@IsString()
	endsWith?: string;

	/** Nằm trong danh sách giá trị */
	@IsOptional()
	@IsString({ each: true })
	in?: string[];

	/** Không nằm trong danh sách giá trị */
	@IsOptional()
	@IsString({ each: true })
	notIn?: string[];

	/**
	 * Chế độ so sánh chuỗi:
	 * - 'default': phân biệt hoa/thường (Prisma mặc định)
	 * - 'insensitive': không phân biệt hoa/thường (hữu ích cho tìm kiếm người dùng)
	 */
	@IsOptional()
	@IsEnum(StringFilterMode)
	mode?: StringFilterMode = StringFilterMode.default;

	@IsOptional()
	@IsString()
	search?: string;
}

/**
 * Bộ lọc cho các trường số (int, float, decimal, bigint).
 * Tương ứng với Prisma IntFilter / FloatFilter / DecimalFilter.
 */
export class NumberFilter {
	/** Bằng chính xác */
	@IsOptional()
	@IsNumber()
	equals?: number;

	/** Không bằng */
	@IsOptional()
	@IsNumber()
	not?: number;

	/** Lớn hơn */
	@IsOptional()
	@IsNumber()
	gt?: number;

	/** Lớn hơn hoặc bằng */
	@IsOptional()
	@IsNumber()
	gte?: number;

	/** Nhỏ hơn */
	@IsOptional()
	@IsNumber()
	lt?: number;

	/** Nhỏ hơn hoặc bằng */
	@IsOptional()
	@IsNumber()
	lte?: number;

	/** Nằm trong danh sách giá trị */
	@IsOptional()
	@IsNumber({}, { each: true })
	in?: number[];

	/** Không nằm trong danh sách giá trị */
	@IsOptional()
	@IsNumber({}, { each: true })
	notIn?: number[];
}

/**
 * Bộ lọc cho các trường ngày/giờ (DateTime).
 * Tương ứng với Prisma DateTimeFilter.
 */
export class DateFilter {
	/** Bằng chính xác (cùng thời điểm) */
	@IsOptional()
	@IsDate()
	equals?: Date;

	/** Không bằng */
	@IsOptional()
	@IsDate()
	not?: Date;

	/** Sau thời điểm (exclusive) */
	@IsOptional()
	@IsDate()
	gt?: Date;

	/** Sau hoặc bằng thời điểm (inclusive) */
	@IsOptional()
	@IsDate()
	gte?: Date;

	/** Trước thời điểm (exclusive) */
	@IsOptional()
	@IsDate()
	lt?: Date;

	/** Trước hoặc bằng thời điểm (inclusive) */
	@IsOptional()
	@IsDate()
	lte?: Date;
}

/**
 * Bộ lọc cho trường boolean (true/false).
 * Tương ứng với Prisma BoolFilter.
 */
export class BooleanFilter {
	/** Bằng giá trị boolean */
	@IsOptional()
	@IsBoolean()
	equals?: boolean;

	/** Không bằng (negation) */
	@IsOptional()
	@IsBoolean()
	not?: boolean;
}

/**
 * Bộ lọc cho các trường enum (enum trong Prisma).
 * Sẽ extend khi dùng cho enum cụ thể (ví dụ: StatusEnumFilter).
 */
export class EnumFilter<T> {
	/** Bằng giá trị enum */
	@IsOptional()
	equals?: T;

	/** Không bằng */
	@IsOptional()
	not?: T;

	/** Nằm trong danh sách enum */
	@IsOptional()
	in?: T[];

	/** Không nằm trong danh sách */
	@IsOptional()
	notIn?: T[];
}

/**
 * Bộ lọc cho trường mảng (array/string[]/int[]/...).
 * Tương ứng với Prisma String[] / Int[] filter.
 */
export class ArrayFilter<T = any> {
	/** Bằng chính xác mảng (toàn bộ phần tử giống hệt) */
	@IsOptional()
	@IsArray()
	@Type(() => Object) // Có thể thay bằng type cụ thể nếu biết trước (string, number...)
	equals?: T[];

	/** Mảng chứa ít nhất một giá trị cụ thể (Prisma: has) */
	@IsOptional()
	@IsArray()
	has?: T;

	/** Mảng chứa TẤT CẢ các giá trị trong danh sách (Prisma: hasEvery) */
	@IsOptional()
	@IsArray()
	hasEvery?: T[];

	/** Mảng chứa ÍT NHẤT MỘT trong các giá trị (Prisma: hasSome) */
	@IsOptional()
	@IsArray()
	hasSome?: T[];
}

/**
 * Kiểm tra giá trị NULL / NOT NULL (dùng chung cho mọi loại field).
 * Trong Prisma: { is: null } hoặc { not: null }.
 */
export class NullFilter {
	/**
	 * true  → field IS NULL
	 * false → field IS NOT NULL
	 */
	@IsOptional()
	@IsBoolean()
	equals?: boolean;
}

/**
 * Bộ lọc logic (AND/OR/NOT) - dùng để nest sâu.
 * Lưu ý: Trong BaseFilterDto đã dùng lowercase 'and'/'or'/'not' để tránh xung đột với Prisma uppercase.
 */
export class LogicalFilter {
	/**
	 * TẤT CẢ các điều kiện trong mảng phải đúng (AND logic).
	 * Có thể nest sâu.
	 */
	@IsOptional()
	@ValidateNested({ each: true })
	@Type(() => Object) // Sẽ override bằng BaseFilterDto ở class con
	and?: any[];

	/**
	 * ÍT NHẤT MỘT điều kiện trong mảng phải đúng (OR logic).
	 * Có thể nest sâu.
	 */
	@IsOptional()
	@ValidateNested({ each: true })
	@Type(() => Object)
	or?: any[];

	/**
	 * Phủ định một điều kiện (NOT logic).
	 * Chỉ chấp nhận 1 object (không phải mảng).
	 */
	@IsOptional()
	@ValidateNested({ each: true })
	@Type(() => Object)
	not?: any;
}

/**
 * Base DTO cho filter của mọi entity.
 * Entity cụ thể sẽ extend class này và thêm các field tương ứng.
 * Hỗ trợ recursive AND/OR/NOT.
 */
export class BaseFilterDto {
	/**
	 * Nhóm AND: TẤT CẢ điều kiện bên trong phải đúng.
	 * Recursive: có thể nest BaseFilterDto bên trong.
	 */
	@IsOptional()
	@ValidateNested({ each: true })
	@Type(() => BaseFilterDto)
	and?: BaseFilterDto[];

	/**
	 * Nhóm OR: ÍT NHẤT MỘT điều kiện bên trong phải đúng.
	 * Recursive: có thể nest BaseFilterDto bên trong.
	 */
	@IsOptional()
	@ValidateNested({ each: true })
	@Type(() => BaseFilterDto)
	or?: BaseFilterDto[];

	/**
	 * Phủ định toàn bộ điều kiện bên trong (NOT).
	 * Chỉ 1 object, không phải mảng.
	 */
	@IsOptional()
	@ValidateNested()
	@Type(() => BaseFilterDto)
	not?: BaseFilterDto;

	/**
	 * Kiểm tra NULL chung cho field (nếu cần).
	 * Thường dùng khi field không có trong entity filter cụ thể.
	 * Prisma: { field: { is: null } } hoặc { field: { not: null } }
	 */
	@IsOptional()
	@ValidateNested()
	@Type(() => NullFilter)
	isNull?: NullFilter;
}
