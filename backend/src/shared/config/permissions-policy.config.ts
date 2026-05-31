import { NestExpressApplication } from "@nestjs/platform-express";

export const configurePermissionsPolicy = (app: NestExpressApplication) => {
	app.use((req, res, next) => {
		const policies = [
			'geolocation=()',
			'microphone=()',
			'camera=()',
			'payment=()',
			'usb=()',
		];
		res.setHeader('Permissions-Policy', policies.join(', '));
		next();
	});
};
