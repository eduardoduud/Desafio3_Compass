import { Controller, Get } from '@nestjs/common';
import { Category } from '@prisma/client';
import { CategoryService } from 'src/category/category.service';

@Controller('api')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get('categories')
  getCategories(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }
}
