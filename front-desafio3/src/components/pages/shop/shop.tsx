import React, { useState } from "react";
import ProductList from "../../shared/productList";
import Features from "../../shared/features";
import { FaChevronRight } from "react-icons/fa";
import Filter from "../../shared/filter";
import Pagination from "../../shared/pagination";
import { FilterProps } from "../../../types/filterProps";
import axios from "axios";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const Shop: React.FC<FilterProps> = ({
  filterDiscounted,
  pagination = { limit: 16, offset: 0 },
  sortOrder,
}) => {
  const styles: React.CSSProperties = {
    backgroundImage: `url('src/assets/images/shopHero.svg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  //todo: revisar o uso do useQuery do react-query
  const { data: products } = useQuery(
    [
      "products",
      filterDiscounted,
      pagination,
      sortOrder,
      currentPage,
      category,
    ],
    async () => {
      const queryParams: FilterProps = {};

      if (filterDiscounted) {
        queryParams.filterDiscounted = true;
      }

      if (pagination) {
        queryParams.pagination = {
          limit: pagination.limit,
          offset: (currentPage - 1) * pagination.limit,
        };
      }

      if (sortOrder) {
        queryParams.sortOrder = sortOrder;
      }

      if (category) {
        queryParams.category = category;
      }

      const response = await axios.get("http://localhost:3000/api/products", {
        params: queryParams,
      });
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="">
      <div
        className="h-316 flex flex-col items-center justify-center"
        style={styles}
      >
        <h1 className="text-center text-4xl font-medium">SHOP</h1>
        <div className="flex flex-row items-center justify-center gap-1">
          <span className="font-bold">Home</span>
          <FaChevronRight />
          <span>Shop</span>
        </div>
      </div>
      <Filter />
      <main className="container mx-auto mt-8 px-4">
        {Array.isArray(products) && products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <p>Loading...</p>
        )}
        <Pagination
          currentPage={currentPage}
          //itemsPerPage={itemsPerPage}
          totalPages={5} //Math.ceil(products.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </main>
      <Features />
    </div>
  );
};

export default Shop;
