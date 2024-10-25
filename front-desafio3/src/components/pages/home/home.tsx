import React, { useEffect, useState } from "react";
import ProductList from "../../shared/productList";
import Categories from "../../shared/categories";
import Features from "../../shared/features";
import { Product } from "../../../types/product";
import { ProductListProps } from "../../../types/productProps";
import axios from "axios";

const Home: React.FC<ProductListProps> = ({ filterDiscounted, pagination }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const queryParams: any = {};

        if (filterDiscounted) {
          queryParams.discountPrice = true;
        }

        if (pagination) {
          queryParams.pagination = pagination;
        }

        const response = await axios.get("http://localhost:3000/api/products", {
          params: queryParams,
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProducts();
  }, [filterDiscounted, pagination]);
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
        <Categories id={0} name={""} imageLink={""} />
      </section>
      <section className="container mx-auto mt-12 px-4">
        <h1 className="text-center text-3xl font-bold">Our Products</h1>
        <ProductList products={products} />
      </section>
      <Features />
    </main>
  );
};

export default Home;
