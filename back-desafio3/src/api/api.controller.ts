import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { ProductService } from 'src/product/product.service';

@Controller('api')
export class ApiController {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
  ) {}

  @Get('products')
  getProducts() {
    return this.productService.getProducts();
  }

  @Get('products/:id')
  async getProductById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }

  @Get('categories')
  getCategories() {
    return this.categoryService.getCategories();
  }
}
