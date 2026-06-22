import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";

export const configureCors = (app: NestExpressApplication, configService: ConfigService, env: string) => {
	app.enableCors({
		origin: (origin, callback) => {
			const allowedOrigins = [
				'http://localhost:3000',
				'http://localhost:5173',
				`http://localhost:${configService.get('FRONTEND_PORT') || 9260}`,
                `http://localhost:${configService.get('ADMIN_PORT') || 9261}`
			];

			// 1. Nếu KHÔNG CÓ origin (Postman, Mobile app, Server-to-Server)
            if (!origin) {
                // Chỉ cho phép bypass ở môi trường development
                if (env === 'development') {
                    return callback(null, true);
                }
                // Ở production, chặn thẳng tay các request thiếu Origin header công khai
                return callback(new Error('Not allowed by CORS: Missing Origin'));
            }

            // 2. Nếu CÓ origin, lúc này TypeScript tự hiểu `origin` chắc chắn là `string`
            if (allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
		},
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
		allowedHeaders: [
			'Content-Type',
			'Authorization',
			'Accept',
			'X-Requested-With',
			'x-api-key',
		],
		exposedHeaders: ['X-Total-Count', 'X-Next-Page'], // nếu frontend cần đọc header custom
		credentials: true, // rất quan trọng nếu dùng cookie / refresh token
		maxAge: 86400, // cache preflight 24h
	});
};
