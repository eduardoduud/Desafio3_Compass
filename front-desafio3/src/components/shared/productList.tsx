import React from "react";
import { Link } from "react-router-dom";
import { BsShareFill } from "react-icons/bs";
import { GoArrowSwitch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { Product } from "../../types/product";

const ProductList: React.FC<{ products: Product[]; itemsPerPage: number }> = ({
  products,
  itemsPerPage,
}) => {
  return (
    <div className="mt-6 grid grid-cols-4 gap-6 bg-white py-8">
      {products.slice(0, itemsPerPage).map((product) => (
        <div key={product.id} className="product-card relative bg-gray-100">
          <div className="absolute right-2 top-2 flex flex-row">
            {product.isNew && (
              <span className="flex h-12 w-12 items-center justify-center rounded-full border bg-green-500 text-sm text-white">
                New
              </span>
            )}
            {product.discountPercent && (
              <span className="flex h-12 w-12 items-center justify-center rounded-full border bg-red-500 text-sm text-white">
                -{product.discountPercent}%
              </span>
            )}
          </div>
          <div className="image-container">
            <img
              src={product.imageLink}
              alt={product.name}
              className="aspect-auto h-full w-full object-fill"
            />
          </div>
          <div className="h-145 mb-4 p-2">
            <h3 className="m-2 font-semibold">{product.name}</h3>
            <p className="m-2 truncate text-gray-400">{product.description}</p>
            <span className="m-2 font-medium">
              $
              {product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "USD",
              })}
            </span>
            {product.discountPrice && (
              <span className="ml-4 text-gray-400 line-through">
                $
                {product.discountPrice.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            )}
          </div>
          <div className="hover-content">
            <Link
              to={`/products/${product.id}`}
              className="details-button w-1-2 text-card-button py-2-5 mb-4 flex justify-center bg-white px-5"
              onClick={() => window.scrollTo(product.id, 0)}
            >
              See Details
            </Link>
            <div className="w-4-5 flex justify-between">
              <button className="flex flex-row items-center justify-center gap-1">
                <BsShareFill />
                Share
              </button>
              <button className="flex flex-row items-center justify-center gap-1">
                <GoArrowSwitch />
                Compare
              </button>
              <button className="flex flex-row items-center justify-center gap-1">
                <IoMdHeartEmpty />
                Like
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
