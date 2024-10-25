export interface FilterProps {
  category?: string;
  filterDiscounted?: boolean;
  pagination?: { limit: number; offset: number };
  sortOrder?: "asc" | "desc";
}
