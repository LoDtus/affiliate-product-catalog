import { NestExpressApplication } from "@nestjs/platform-express";
import helmet from "helmet";

export const configureHelmet = (
    app: NestExpressApplication,
    env: string
) => {
    app.use(helmet({
		contentSecurityPolicy: {
			useDefaults: true,
			directives: {
				defaultSrc: ["'self'"],
			},
		},
		frameguard: { action: 'deny' }, // Chặn iframe nhúng trang của bạn (clickjacking) hoặc 'sameorigin' nếu cần cho admin panel
		noSniff: true, // Ngăn browser đoán MIME type → tránh MIME sniffing attack
		hidePoweredBy: true, // Ẩn X-Powered-By (đã mặc định true, nhưng explicit tốt hơn)
		dnsPrefetchControl: { allow: false }, // DNS prefetch control (giảm rủi ro DNS rebinding)
		referrerPolicy: { policy: 'strict-origin-when-cross-origin' }, // Referrer policy (giảm leak thông tin referrer)
		hsts:
			env === 'production'
				? {
						// Strict Transport Security (HSTS) – chỉ bật khi production có HTTPS
						maxAge: 31536000, // 1 năm
						includeSubDomains: true,
						preload: true, // cho phép submit vào hstspreload.org
					}
				: false,
		xXssProtection: true, // X-XSS-Protection
		crossOriginEmbedderPolicy: false,
		crossOriginOpenerPolicy: { policy: 'same-origin' },
		crossOriginResourcePolicy: { policy: 'same-origin' },
	}));
}
