import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';

@Controller('api')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  async getProducts(
    @Query()
    query: {
      discountPrice?: string;
      pagination?: { limit: string; offset: string };
      order?: string;
    },
  ) {
    const { discountPrice, pagination, order } = query;

    const isFilterDiscounted = discountPrice === 'true';

    const sortOrder = order === 'asc' ? 'asc' : 'desc';

    const limit = pagination ? parseInt(pagination.limit) : undefined;
    const offset = pagination ? parseInt(pagination.offset) : undefined;

    const products = await this.productService.getProducts(
      isFilterDiscounted,
      { limit, offset },
      sortOrder,
    );

    return products;
  }

  @Get('products/:id')
  async getProductById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }
}
