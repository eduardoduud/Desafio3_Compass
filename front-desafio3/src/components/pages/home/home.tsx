import React from "react";
import ProductList from "../../shared/productList";
import Categories from "../../shared/categories";
import Features from "../../shared/features";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div>
        <img
          className="object-cover"
          src="/src/assets/images/homeHero.svg"
          alt=""
        />
      </div>
      <section className="bg-white py-4">
        <h1 className="text-center text-3xl font-bold">Browse The Range</h1>
        <Categories />
      </section>
      <section className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-center">Our Products</h1>
        <ProductList />
      </section>
      <Features />
    </main>
  );
};

export default Home;
