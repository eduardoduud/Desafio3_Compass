import React from "react";
import { PaginationProps } from "../../types/pagination";

const Pagination: React.FC<PaginationProps> = ({
  //itemsPerPage,
  currentPage = 1,
  onPageChange,
  totalPages,
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="my-9 flex w-full items-center justify-center gap-4">
      <button
        className="bg-button flex h-12 w-14 items-center justify-center rounded-lg border-solid border-none bg-gray-300"
        onClick={() => handlePreviousPage()}
      >
        Prev
      </button>
      <div className="max-width-pagination flex flex-row justify-evenly gap-4">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={
              currentPage === page
                ? "bg-button-selected flex h-12 w-12 min-w-12 items-center justify-center rounded-lg border-solid border-none"
                : "bg-button flex h-12 w-12 min-w-12 items-center justify-center rounded-lg border-solid border-none"
            }
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="bg-button flex h-12 w-14 items-center justify-center rounded-lg border-solid border-none bg-gray-300"
        onClick={() => handleNextPage()}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
