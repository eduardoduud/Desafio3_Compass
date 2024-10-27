import { Category } from "./category";

export interface Product {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  largeDescription: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
  imageLink?: string;
  otherImagesLink?: string[];
  isNew?: boolean;
  createdDate?: string;
  updatedDate?: string;
  category: Category;
}
