import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ProductService } from './product/product.service';
import { CategoryService } from './category/category.service';
import { PrismaService } from './database/prisma.service';
import { ApiController } from './api/api.controller';

@Module({
  imports: [ApiModule],
  controllers: [ApiController],
  providers: [ProductService, CategoryService, PrismaService],
})
export class AppModule {}
