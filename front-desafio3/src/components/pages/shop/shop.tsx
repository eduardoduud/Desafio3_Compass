import React, { useCallback, useEffect, useState } from "react";
import ProductList from "../../shared/productList";
import Features from "../../shared/features";
import { FaChevronRight } from "react-icons/fa";
import Filter from "../../shared/filter";
import Pagination from "../../shared/pagination";
import { FilterProps } from "../../../types/filterProps";
import axios from "axios";
import { useSearchParams, useLocation } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";

const Shop: React.FC = () => {
  const styles: React.CSSProperties = {
    backgroundImage: `url('src/assets/images/shopHero.svg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [, setSearchParams] = useSearchParams();
  const location = useLocation();
  const initialCategory = location.state?.category || [];
  const [selectedFilters, setSelectedFilters] = useState<FilterProps>({
    sortOrder: "asc",
    category: initialCategory ? [initialCategory] : [],
    offset: 0,
  });
  const [categoryOptions, setCategoryOptions] = useState<
    { name: string; category: number }[]
  >([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  useEffect(() => {
    const fetchProducts = async () => {
      if (!selectedFilters) return;

      setIsLoading(true);

      try {
        const queryParams = {
          sortOrder: selectedFilters.sortOrder,
          category: selectedFilters.category,
          limit: selectedFilters?.limit,
          offset: (currentPage - 1) * itemsPerPage,
        };

        const response = await axios.get("http://localhost:3000/api/products", {
          params: queryParams,
        });

        setProducts(response.data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedFilters, currentPage, selectedFilters?.limit, itemsPerPage]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedFilters) {
      params.set("sortOrder", selectedFilters.sortOrder ?? "asc");
      if (selectedFilters.category && selectedFilters.category.length > 0) {
        params.set("category", selectedFilters.category.join(","));
      } else {
        params.delete("category");
      }

      setSearchParams(params);
    }
  }, [selectedFilters, setSearchParams]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/categories",
        );
        setCategoryOptions(
          response.data.map((cat: { id: number; name: string }) => ({
            name: cat.name,
            category: cat.id,
          })),
        );
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleFilterUpdate = useCallback(
    (filters: FilterProps) => {
      setSelectedFilters(filters);
    },
    [setSelectedFilters],
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="">
      <div
        className="h-316 flex flex-col items-center justify-center"
        style={styles}
      >
        <h1 className="text-center text-5xl font-medium">Shop</h1>
        <div className="mt-4 flex flex-row items-center justify-center gap-1">
          <a href="/" className="font-medium">
            Home
          </a>
          <FaChevronRight />
          <span>Shop</span>
        </div>
      </div>
      <Filter
        totalItems={products.length}
        onFiltersChange={handleFilterUpdate}
        categoryOptions={categoryOptions}
        onItemsPerPageChange={setItemsPerPage}
      />
      <main className="container mx-auto mt-8 px-4">
        {isLoading ? (
          <div className="flex min-h-screen w-screen items-center justify-center">
            <GridLoader size={30} color="#eab308" />
          </div>
        ) : Array.isArray(products) && products.length > 0 ? (
          <ProductList products={products} itemsPerPage={itemsPerPage} />
        ) : (
          <p>No products found.</p>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </main>
      <Features />
    </div>
  );
};

export default Shop;
