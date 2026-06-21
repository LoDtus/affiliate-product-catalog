import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";

export const configureCors = (app: NestExpressApplication, configService: ConfigService) => {
	app.enableCors({
		origin: (origin, callback) => {
			const POSTMAN_URLS = configService.get<string>('POSTMAN_URLS') || '';

			const allowedOrigins = [
				'http://localhost:3000',
				'http://localhost:5173',
				`http://localhost:${configService.get('FRONTEND_PORT') || 9260}`,
                `http://localhost:${configService.get('ADMIN_PORT') || 9261}`,
                ...POSTMAN_URLS.split(',').map(url => url.trim())
			];

			// Cho phép request không có origin (Postman, server-to-server, mobile app...)
			if (!origin || allowedOrigins.includes(origin)) {
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
