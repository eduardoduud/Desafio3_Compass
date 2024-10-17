import React from "react";
import ProductList from "../../shared/productList";
import Features from "../../shared/features";
import { FaChevronRight } from "react-icons/fa";
import { getIconPath } from "../../utils/getIcon";
import { RxDividerVertical } from "react-icons/rx";

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
      <div className="flex flex-row justify-between items-center bg-features px-16 h-100">
        <div className="flex flex-row gap-4">
          <img src={getIconPath("filterToggle")} alt="" />
          <span>Filter</span>
          <img src={getIconPath("filterDots")} alt="" />
          <img src={getIconPath("filterIdk")} alt="" />
          <RxDividerVertical />
          <span>Showing 1-16 of 32 results</span>
        </div>
        <div className="flex flex-row items-center justify-end gap-4">
          <span>Show</span>
          <input
            className="bg-white text-center h-55 w-55"
            type="number"
            placeholder="16"
          />
          <span>Short by</span>
          <input
            className="bg-white text-center h-55 w-188"
            type="text"
            placeholder="Default"
          />
        </div>
      </div>
      <main className="container mx-auto px-4 mt-8">
        <ProductList />
      </main>
      <Features />
    </div>
  );
};

export default Shop;
