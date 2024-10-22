import React from "react";
import ProductList from "../../shared/productList";
import Features from "../../shared/features";
import { FaChevronRight } from "react-icons/fa";
import Filter from "../../shared/filter";

const Shop: React.FC = () => {
  const styles: React.CSSProperties = {
    backgroundImage: `url('src/assets/images/shopHero.svg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className="">
      <div
        className="flex flex-col justify-center items-center h-316"
        style={styles}
      >
        <h1 className="text-center text-4xl font-medium">SHOP</h1>
        <div className="flex flex-row justify-center items-center gap-1">
          <span className="font-bold">Home</span>
          <FaChevronRight />
          <span>Shop</span>
        </div>
      </div>
      <Filter />
      <main className="container mx-auto px-4 mt-8">
        <ProductList />
      </main>
      <Features />
    </div>
  );
};

export default Shop;
