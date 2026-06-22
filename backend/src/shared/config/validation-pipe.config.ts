import { ErrorCode } from '@/shared/constants/error-code.constant';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationError } from 'class-validator';

/**
 * Hàm đệ quy quét sạch toàn bộ lỗi từ class-validator, kể cả các DTO lồng nhau nhiều tầng.
 * Trả về format phẳng: { "parent.child.grandchild": ["error message 1", "error message 2"] }
 */
const formatValidationErrors = (
    errors: ValidationError[],
    parentProperty = ''
): Record<string, string[]> => {
    return errors.reduce((acc, error) => {
        // Tạo đường dẫn key (ví dụ: "profile" hoặc "profile.address" hoặc "profile.address.street")
        const propertyPath = parentProperty 
            ? `${parentProperty}.${error.property}` 
            : error.property;

        // Nếu trường hiện tại có lỗi validation trực tiếp
        if (error.constraints) {
            acc[propertyPath] = Object.values(error.constraints);
        }

        // Nếu có các object con lồng phía trong (Nested Validation), đệ quy tiếp tục đào sâu xuống
        if (error.children && error.children.length > 0) {
            const childErrors = formatValidationErrors(error.children, propertyPath);
            Object.assign(acc, childErrors);
        }

        return acc;
    }, {} as Record<string, string[]>);
};

export const configureValidationPipe = (app: NestExpressApplication) => {
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            stopAtFirstError: false,
            exceptionFactory: (validationErrors: ValidationError[] = []) => {
                // Gọi hàm đệ quy xử lý triệt để cấu trúc cây lỗi
                const details = formatValidationErrors(validationErrors);

                return new BadRequestException({
                    code: ErrorCode.VALIDATION_ERROR,
                    message: 'Invalid request',
                    details,
                });
            },
        }),
    );
};