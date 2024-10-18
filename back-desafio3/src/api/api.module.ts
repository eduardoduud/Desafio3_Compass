import { Module } from '@nestjs/common';
import { ProductModule } from 'src/product/product.module';
import { ApiController } from './api.controller';
import { ProductService } from 'src/product/product.service';
import { PrismaService } from 'src/database/prisma.service';
import { CategoryService } from 'src/category/category.service';

@Module({
  providers: [ProductService, PrismaService, CategoryService],
  imports: [ProductModule],
  controllers: [ApiController],
})
export class ApiModule {}
