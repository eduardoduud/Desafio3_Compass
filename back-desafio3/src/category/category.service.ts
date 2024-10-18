import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Category } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getCategories(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async getCategoryById(id: number): Promise<Category> {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async createCategory(data: {
    name: string;
    imageLink?: string;
  }): Promise<Category> {
    return this.prisma.category.create({ data });
  }

  async updateCategory(
    id: number,
    data: { name?: string; imageLink?: string },
  ): Promise<Category> {
    return this.prisma.category.update({ where: { id }, data });
  }

  async deleteCategory(id: number): Promise<Category> {
    return this.prisma.category.delete({ where: { id } });
  }
}
