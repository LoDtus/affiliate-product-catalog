process.env.TZ = 'UTC';

import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { GLOBAL_PREFIX, NODE_ENV, PORT } from './shared/constants/env.constant';
import { setupGracefulShutdown } from 'nestjs-graceful-shutdown';
import { configureCors } from './shared/config/cors.config';
import { configureHelmet } from './shared/config/helmet.config';
import { configureValidationPipe } from './shared/config/validation-pipe.config';
import { configurePermissionsPolicy } from './shared/config/permissions-policy.config';
import { configureInterceptors } from './shared/config/interceptor.config';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	const logger = new Logger('Bootstrap');

	const configService = app.get(ConfigService);
	const PORT = configService.get<number>('BACKEND_PORT') || 9270;
	const GLOBAL_PREFIX = configService.get<string>('GLOBAL_PREFIX') || '/api/v1';
	const BACKEND_URL = configService.get<string>('BACKEND_URL');
	const env = configService.get<string>('NODE_ENV') || 'development';

	// Express settings
	app.set('trust proxy', true);

	// Security middleware
	configureHelmet(app, env);
	configureCors(app);
	configurePermissionsPolicy(app);

	// Global app config
	app.setGlobalPrefix(GLOBAL_PREFIX);

	// Pipes
	configureValidationPipe(app);

	// Interceptors
	configureInterceptors(app);

	await app.listen(PORT);
	logger.log(
		`Application is running on: ${BACKEND_URL}${GLOBAL_PREFIX}`,
	);
	logger.log(`Environment: ${env}`);

	setupGracefulShutdown({ app });
}

bootstrap().catch((err) => {
	console.error('Bootstrap failed:', err);
	process.exit(1);
});
