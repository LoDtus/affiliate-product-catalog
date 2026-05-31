import { ErrorCode } from '@/shared/constants/error-code.constant';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationError } from 'class-validator';

export const configureValidationPipe = (app: NestExpressApplication) => {
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
			stopAtFirstError: false,
			exceptionFactory: (validationErrors: ValidationError[] = []) => {
				const details = validationErrors.reduce(
					(acc, error) => {
						if (error.constraints) {
							acc[error.property] = Object.values(
								error.constraints,
							);
						}

						// Nested validation, nếu dto có object lồng nhau
						if (error.children && error.children.length > 0) {
							error.children.forEach((child) => {
								if (child.constraints) {
									const key = `${error.property}.${child.property}`;
									acc[key] = Object.values(child.constraints);
								}
							});
						}
						return acc;
					},
					{} as Record<string, string[]>,
				);

				return new BadRequestException({
					code: ErrorCode.VALIDATION_ERROR,
					message: 'Invalid request',
					details,
				});
			},
		}),
	);
};
