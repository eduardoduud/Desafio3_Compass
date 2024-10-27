export interface Filters {
  category?: number[];
  filterDiscounted?: boolean;
  limit: number;
  offset: number;
  sortOrder: 'asc' | 'desc';
}
