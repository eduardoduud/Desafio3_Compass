import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async getProducts(
    filterDiscounted?: boolean,
    pagination?: { limit: number; offset: number },
    sortOrder?: 'asc' | 'desc',
    categoryId?: number, // adicionado parâmetro para categoria
  ): Promise<Product[]> {
    const where: any = {};

    if (filterDiscounted) {
      where.discountPrice = { not: null };
    }

    if (categoryId) {
      where.categoryId = categoryId; // adiciona filtro por categoria
    }

    const products = await this.prisma.product.findMany({
      where,
      skip: pagination?.offset,
      take: pagination?.limit,
      orderBy: sortOrder === 'asc' ? { price: 'asc' } : { price: 'desc' },
    });

    return products;
  }

  async getProductById(id: number): Promise<Product> {
    return this.prisma.product.findUnique({ where: { id } });
  }
}
