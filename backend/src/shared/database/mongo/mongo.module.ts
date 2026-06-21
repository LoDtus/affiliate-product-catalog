import { MONGODB_URI } from '@/shared/constants/env.constant';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
	imports: [
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				uri: configService.get<string>('MONGODB_URI'),
				autoIndex: configService.get<string>('NODE_ENV') !== 'production',
				serverSelectionTimeoutMS: 5000,
			}),
		}),
	],
	exports: [MongooseModule],
})
export class MongoModule {}
