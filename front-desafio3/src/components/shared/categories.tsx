import React, { useEffect, useState } from "react";
import axios from "axios";

interface Category {
  id: number;
  name: string;
  imageLink: string;
}

const Category: React.FC = () => {
  const [categories, setProducts] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="flex flex-row justify-center gap-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-wrap justify-center w-381 h-480 rounded-lg"
        >
          <img
            src={category.imageLink}
            alt={category.name}
            className="w-full object-fill rounded-xl"
          />
          <h3 className="mt-4 font-semibold">{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Category;
