import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany({ include: { category: true } });
  }

  async getProductById(id: number): Promise<Product> {
    if (isNaN(id)) {
      throw new Error('Invalid id provided');
    }
    return this.prisma.product.findUnique({
      where: { id: Number(id) },
      include: { category: true },
    });
  }

  async createProduct(data: any): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  async updateProduct(id: number, data: any): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data });
  }

  async deleteProduct(id: number): Promise<Product> {
    return this.prisma.product.delete({ where: { id } });
  }
}
