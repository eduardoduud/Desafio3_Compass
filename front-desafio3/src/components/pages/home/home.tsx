import React, { useEffect, useState } from "react";
import ProductList from "../../shared/productList";
import Categories from "../../shared/categories";
import Features from "../../shared/features";
import { Product } from "../../../types/product";
import { FilterProps } from "../../../types/filterProps";
import axios from "axios";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      if (isMounted) {
        const filters: FilterProps = {
          filterDiscounted: true,
          pagination: { limit: 8, offset: 0 },
          sortOrder: "asc",
        };
        // const queryParams: any = {};

        // if (filters.filterDiscounted) {
        //   queryParams.discountPrice = true;
        // }

        // if (filters.pagination) {
        //   queryParams.pagination = {
        //     limit: filters.pagination.limit,
        //     offset: 0,
        //   };
        // }

        const response = await axios.get("http://localhost:3000/api/products", {
          params: filters,
        });
        setProducts(response.data);
      }
    };

    fetchProducts();
    return () => {
      isMounted = false; // No state change here
    };
  }, []);
  return (
    <main className="min-h-screen bg-gray-50">
      <div>
        <img
          className="object-cover"
          src="/src/assets/images/homeHero.svg"
          alt=""
        />
      </div>
      <section className="mb-18 bg-white py-4">
        <h1 className="mb-12 text-center text-3xl font-bold">
          Browse The Range
        </h1>
        <Categories />
      </section>
      <section className="container mx-auto mt-12 px-4">
        <h1 className="text-center text-3xl font-bold">Our Products</h1>
        <ProductList products={products} />
      </section>
      <Features />
    </main>
  );
};
//ADICIONAR BOTAO DE SHOW MORE QUE VAI NAVEGAR PARA SHOP
export default Home;
