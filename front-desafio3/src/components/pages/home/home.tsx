import React, { useEffect, useState } from "react";
import ProductList from "../../shared/productList";
import Categories from "../../shared/categories";
import Features from "../../shared/features";
import { Product } from "../../../types/product";
import { FilterProps } from "../../../types/filterProps";
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    const fetchProducts = async () => {
      if (isMounted) {
        const filters: FilterProps = {
          category: [],
          filterDiscounted: true,
          limit: 8,
          offset: 0,
          sortOrder: "asc",
        };

        const response = await axios.get("http://localhost:3000/api/products", {
          params: filters,
        });
        setProducts(response.data);
        setIsLoading(false);
      }
    };

    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <main className="min-h-screen bg-gray-50">
      {isLoading ? (
        <div className="flex min-h-screen w-screen items-center justify-center">
          <GridLoader size={30} color="#eab308" />
        </div>
      ) : (
        <>
          <div className="relative">
            <img
              className="h-full w-full object-cover"
              src="/src/assets/images/homeHero.svg"
              alt=""
            />
            <div className="bg-features-200 w-1-3 h-1-2 top-1-2 left-1-2 absolute inset-0 flex items-center justify-center overflow-hidden rounded-t-lg border-none bg-opacity-50 p-6">
              <span className="inline-block h-full py-4 align-top text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </span>
            </div>
          </div>
          <section className="mb-18 relative z-10 bg-white py-4">
            <h1 className="mb-12 mt-12 text-center text-3xl font-bold">
              Browse The Range
            </h1>
            <Categories />
          </section>
          <section className="container mx-auto mt-12 px-4">
            <h1 className="text-center text-3xl font-bold">Our Products</h1>
            <ProductList products={products} itemsPerPage={8} />
            <div className="my-9 flex w-full items-center justify-center">
              <button className="border-golden show-more text-card-button border border-solid px-12 py-2">
                <a href="/shop">Show More</a>
              </button>
            </div>
          </section>
          <Features />
        </>
      )}
    </main>
  );
};
export default Home;
