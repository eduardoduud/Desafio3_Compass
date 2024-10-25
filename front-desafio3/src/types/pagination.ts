export interface PaginationProps {
  //itemsPerPage: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
