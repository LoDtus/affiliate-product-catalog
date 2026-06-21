process.env.TZ = 'UTC';

import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
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

	const configService = 	app.get(ConfigService);
	const APPLICATION_NAME = configService.get<string>('DESCRIPTION') 	|| 'Affiliate Product Catalog (APC)';
	const VERSION = 		configService.get<string>('VERSION');
	const NODE_ENV = 		configService.get<string>('NODE_ENV')		|| 'development';
	const PORT = 			configService.get<number>('BACKEND_PORT') 	|| 9270;
	const BACKEND_URL = 	configService.get<string>('BACKEND_URL') 	|| `http://localhost:${PORT}`;
	const GLOBAL_PREFIX = 	configService.get<string>('GLOBAL_PREFIX') 	|| '/api/v1';

	// Express settings
	app.set('trust proxy', true);

	// Security middleware
	configureHelmet(app, NODE_ENV);
	configureCors(app, configService);
	configurePermissionsPolicy(app);

	// Global app config
	app.setGlobalPrefix(GLOBAL_PREFIX);

	configureValidationPipe(app);
	configureInterceptors(app);

	await app.listen(PORT);

	logger.log(`====================================================`);
    logger.log(`${APPLICATION_NAME} is running`);
    logger.log(`====================================================`);
    logger.log(`Version: ${VERSION}`);
    logger.log(`Environment: ${NODE_ENV.toUpperCase()}`);
    logger.log(`API URL: ${BACKEND_URL}${GLOBAL_PREFIX}`);
    logger.log(`====================================================`);

	setupGracefulShutdown({ app });
}

bootstrap().catch((err) => {
	console.error('Bootstrap failed:', err);
	process.exit(1);
});
