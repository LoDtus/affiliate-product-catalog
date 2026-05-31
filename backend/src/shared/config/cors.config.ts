import { NestExpressApplication } from "@nestjs/platform-express";

export const configureCors = (app: NestExpressApplication) => {
	app.enableCors({
		origin: (origin, callback) => {
			const allowedOrigins = [
				'http://localhost:9000',
				'http://localhost:3000',
				'http://localhost:5500',
				'http://localhost:5000',
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
