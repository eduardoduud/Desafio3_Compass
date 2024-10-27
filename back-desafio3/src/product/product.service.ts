import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Product } from '@prisma/client';
import { Filters } from 'src/teste/filters';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  // async getProducts(
  //   filterDiscounted?: boolean,
  //   pagination?: { limit: number; offset: number },
  //   sortOrder?: 'asc' | 'desc',
  //   categoryId?: number,
  // ): Promise<Product[]> {
  //   const where: any = {};

  //   if (filterDiscounted) {
  //     where.discountPrice = { not: null };
  //   }

  //   if (categoryId) {
  //     where.categoryId = categoryId;
  //   }

  //   const products = await this.prisma.product.findMany({
  //     where,
  //     skip: pagination?.offset,
  //     take: pagination?.limit,
  //     orderBy: sortOrder === 'asc' ? { price: 'asc' } : { price: 'desc' },
  //   });

  //   return products;
  // }

  // async getProducts(filters: Filters): Promise<Product[]> {
  //   const where = {
  //     categoryId: {
  //       in: filters.category,
  //     },
  //     skip: filters.pagination.offset,
  //     take: filters.pagination.limit,
  //     orderBy: { price: filters.sortOrder },
  //     discountPrice: filters.filterDiscounted ? { not: null } : [],
  //     totalItems: filters.totalItems, //TODO: REMOVER ESTA DESGRAÇA DAQUI
  //   };
  // if (filterDiscounted) {
  //   where.discountPrice = { not: null };
  // }

  // if (categoryId) {
  //   where.categoryId = categoryId;
  // }

  // const products = await this.prisma.product.findMany({
  //   where,
  //   // skip: pagination?.offset,
  //   // take: pagination?.limit,
  //   // orderBy: sortOrder === 'asc' ? { price: 'asc' } : { price: 'desc' },
  // });

  //   const products = await this.prisma.product.findMany({ where });

  //   return products;
  // }

  async getProducts(filters: Filters): Promise<Product[]> {
    const where: any = {
      categoryId: {
        in: filters.category,
      },
    }; //talvvez aqui debugar

    if (filters.filterDiscounted) {
      where.discountPrice = { not: null };
    }

    const products = await this.prisma.product.findMany({
      where,
      skip: filters.offset,
      take: filters.limit,
      orderBy: { price: filters.sortOrder },
    });

    return products;
  }

  async getProductById(id: number): Promise<Product> {
    return await this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });
  }
  async createProduct(data: any): Promise<Product> {
    return await this.prisma.product.create({ data });
  }

  async updateProduct(id: number, data: any): Promise<Product> {
    return await this.prisma.product.update({ where: { id }, data });
  }

  async deleteProduct(id: number): Promise<Product> {
    return await this.prisma.product.delete({ where: { id } });
  }
}
