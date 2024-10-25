import { Product } from "./product";

export interface ProductListProps {
  products?: Product[][];
  filterDiscounted?: boolean;
  pagination?: { limit: number; offset: number };
  sortOrder?: "asc" | "desc";
}
