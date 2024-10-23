// src/components/ProductList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
  imageLink?: string;
  isNew?: boolean;
  createdDate: string;
  updatedDate: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="mt-6 grid grid-cols-4 gap-6 bg-white py-8">
      {products.map((product) => (
        <div key={product.id} className="relative bg-gray-100">
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
          <img
            src={product.imageLink}
            alt={product.name}
            className="h-40 w-full object-cover"
          />
          <div className="mb-4 p-2">
            <h3 className="m-2 font-semibold">{product.name}</h3>
            <p className="m-2 text-gray-400">{product.description}</p>
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
        </div>
      ))}
      <button className="mx-auto mt-6 block rounded bg-yellow-500 px-4 py-2 text-white transition hover:bg-yellow-600">
        Show More
      </button>
    </div>
  );
};

export default ProductList;
