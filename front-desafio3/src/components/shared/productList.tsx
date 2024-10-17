// src/components/ProductList.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  discount?: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="bg-white py-8">
      <div className="grid grid-cols-4 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="relative bg-gray-100">
            {product.discount && (
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-full">
                -{product.discount}%
              </div>
            )}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 ">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-400">{product.description}</p>
              <span className="font-medium">
                {product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
              {product.discountPrice && (
                <span className="line-through ml-4 text-gray-400">
                  {product.discountPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 mx-auto block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
        Show More
      </button>
    </div>
  );
};

export default ProductList;
