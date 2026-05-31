import { Transform } from "class-transformer";

// Khi dùng thì đánh @IsoDate
export const IsoDate = () => Transform(
	({ value }) => {
		if (value instanceof Date && !Number.isNaN(value.getTime())) {
			return value.toISOString();
		}
		return value;
	},
	{ toPlainOnly: true },
);
