import { Controller, Get } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';

@Controller('api')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get('categories')
  getCategories() {
    return this.categoryService.getCategories();
  }
}
