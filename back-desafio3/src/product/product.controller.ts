import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from 'src/product/product.service';

@Controller('api')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get('products')
  getProducts() {
    return this.productService.getProducts();
  }

  @Get('products/:id')
  async getProductById(@Param('id') id: number) {
    return this.productService.getProductById(id);
  }
}
