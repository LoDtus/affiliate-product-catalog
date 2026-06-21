import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MediaModule } from './modules/media/media.module';
import { AffiliateModule } from './modules/affiliate/affiliate.module';
import { ShopModule } from './modules/shop/shop.module';
import { ArticleModule } from './modules/article/article.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { EventModule } from './modules/event/event.module';
import { SearchModule } from './modules/search/search.module';
import { GracefulShutdownModule } from 'nestjs-graceful-shutdown';
import { ThrottlerModule } from '@nestjs/throttler';
import { ThrottlerStorageRedisService } from '@nest-lab/throttler-storage-redis';
import { v7 as uuidv7 } from 'uuid';
import { ClsModule } from 'nestjs-cls';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoModule } from './shared/database/mongo/mongo.module';
import { CoreModule } from './modules/core/core.module';

@Module({
	imports: [
		ClsModule.forRoot({
			global: true, // Để ClsService có thể inject ở mọi nơi (filter, interceptor, service...)
			middleware: {
				mount: true, // Tự động áp dụng middleware cho mọi HTTP request
				generateId: true, // Tự động generate nếu không có header
				idGenerator: (req: Request) => {
					// Ưu tiên lấy từ header client gửi (nếu có), fallback random UUID
					return (
						(req.headers['x-trace-id'] as string) ||
						(req.headers['x-correlation-id'] as string) ||
						(req.headers['traceparent'] as string) ||
						uuidv7()
					);
				},
			},
		}),

		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
		}),
		ThrottlerModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: (config: ConfigService) => ({
				// Multiple definitions: burst + sustain
				throttlers: [
					// Ngắn: chống burst attack (brute-force login, spam)
					{ name: 'short', ttl: 1000, limit: 5 }, // 5 req / 1s
					// Trung bình: chống abuse chậm
					{ name: 'medium', ttl: 10000, limit: 20 }, // 20 req / 10s
					// Dài: giới hạn tổng ngày
					{ name: 'long', ttl: 60000, limit: 100 }, // 100 req / 1 phút (có thể tăng lên 300–500 cho API public)
				],

				// Quan trọng cho production: dùng Redis để đồng bộ giữa instances
				// storage: new ThrottlerStorageRedisService({
				// 	host: config.get('REDIS_HOST') || 'localhost',
				// 	port: config.get('REDIS_PORT') || 6379,
				// 	password: config.get('REDIS_PASSWORD'), // nếu có
				// 	// db: 0, tls: { ... } nếu dùng Redis Cloud/Upstash
				// }),

				// Tùy chỉnh response khi bị block (thân thiện hơn default)
				errorMessage:
					'Quá nhiều yêu cầu, vui lòng thử lại sau vài giây.',
				skipIf: () => config.get('NODE_ENV') !== 'production', // skip ở dev để test thoải mái

				// Tùy chọn: ignore user agents của monitoring (health check, Prometheus...)
				ignoreUserAgents: [/health|prometheus|monitoring/i],
			}),
		}),

		GracefulShutdownModule.forRoot({
			gracefulShutdownTimeout: 120000, // Chờ tối đa 2 phút
			cleanup: async (app, signal) => {
				console.log(
					`Graceful shutdown triggered by ${signal}. Cleaning up...`,
				);
				// Cleanup tùy chỉnh global ở đây nếu cần (ví dụ flush queue chung)
				// Prisma disconnect đã xử lý ở onModuleDestroy → không cần lặp lại
			},
			keepNodeProcessAlive: false, // Default false: exit sau khi close hết
		}),

		CoreModule,
		MongoModule,

		MediaModule,
		AffiliateModule,
		ShopModule,
		ArticleModule,
		ProductModule,
		CategoryModule,
		EventModule,
		SearchModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
