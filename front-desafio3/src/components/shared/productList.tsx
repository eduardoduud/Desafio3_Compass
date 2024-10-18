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
    <div className="grid grid-cols-4 gap-6 mt-6 bg-white py-8">
      {products.map((product) => (
        <div key={product.id} className="relative bg-gray-100">
          {product.discountPercent && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
              -{product.discountPercent}%
            </div>
          )}
          <img
            src={product.imageLink}
            alt={product.name}
            className="h-40 w-full object-cover"
          />
          <div className="p-2 mb-4">
            <h3 className="font-semibold m-2">{product.name}</h3>
            <p className="text-gray-400 m-2">{product.description}</p>
            <span className="font-medium m-2">
              $
              {product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "USD",
              })}
            </span>
            {product.discountPrice && (
              <span className="line-through ml-4 text-gray-400">
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
      <button className="mt-6 mx-auto block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
        Show More
      </button>
    </div>
  );
};

export default ProductList;
