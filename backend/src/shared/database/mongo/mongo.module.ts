import { MONGODB_URI } from '@/shared/constants/env.constant';
import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
	imports: [
		MongooseModule.forRoot(
			MONGODB_URI ||
				'mongodb://root:rootpw@localhost:27018/affiliate-product-catalog?authSource=admin',
			{
				autoIndex: true, // dev true, prod false
				serverSelectionTimeoutMS: 5000,
			},
		),
	],
	exports: [MongooseModule],
})
export class MongoModule {}
