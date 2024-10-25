import { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  category: Category;
  description: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
  imageLink?: string;
  isNew?: boolean;
  createdDate?: string;
  updatedDate?: string;
}
