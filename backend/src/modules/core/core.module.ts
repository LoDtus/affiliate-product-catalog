// src/core/core.module.ts
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalExceptionFilter } from '@/common/exceptions/global-exception.filter';
import { WrapResponseInterceptor } from '@/common/interceptors/wrap-response.interceptor';
import { CustomThrottlerGuard } from '@/common/guards/custom-throttler.guard';
// import { JwtAuthGuard } from '../iam/my-jwt/guards/jwt-auth.guard';

@Module({
	providers: [
		{
			provide: APP_FILTER,
			useClass: GlobalExceptionFilter,
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: WrapResponseInterceptor,
		},
		{
			provide: APP_GUARD,
			useClass: CustomThrottlerGuard,
		},
		// {
		// 	provide: APP_GUARD,
		// 	useClass: JwtAuthGuard,
		// },
	],
	exports: [],
})
export class CoreModule {}
