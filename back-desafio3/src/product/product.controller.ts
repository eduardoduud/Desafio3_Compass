import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';
import { Filters } from 'src/teste/filters';

@Controller('api')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  async getProducts(
    @Query()
    filters: Filters,
  ) {
    this.formatFilter(filters);
    const products = await this.productService.getProducts(filters);
    return products;
  }

  @Get('products/:id')
  async getProductById(@Param('id') id: number) {
    return this.productService.getProductById(Number(id));
  }

  formatFilter(filter: Filters): void {
    const categories = [];
    if (filter.category && filter.category.length > 0) {
      filter.category.map((c) => {
        categories.push(Number(c));
      });
      filter.category = categories;
    }
    filter.filterDiscounted = filter.filterDiscounted
      ? String(filter.filterDiscounted) === 'true'
      : false;
    filter.limit = Number(filter.limit);
    filter.offset = Number(filter.offset);
  }
}
