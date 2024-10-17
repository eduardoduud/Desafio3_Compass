import { Module } from '@nestjs/common';
import { ProductModule } from 'src/product/product.module';
import { ApiController } from './api.controller';
import { ProductService } from 'src/product/product.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [ProductService, PrismaService],
  imports: [ProductModule],
  controllers: [ApiController],
})
export class ApiModule {}
