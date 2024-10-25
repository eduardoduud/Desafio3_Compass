import React, { useEffect, useState } from "react";
import axios from "axios";
import { Category } from "../../types/category";
import { useNavigate } from "react-router-dom";

const Categories: React.FC<Category> = () => {
  const [categories, setProducts] = useState<Category[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleCategoryClick = (categoryId?: number) => {
    navigate(
      `/shop?category=${categoryId}&pagination[limit]=16&pagination[offset]=0`,
    );
  };

  return (
    <div className="flex flex-row justify-center gap-4">
      {categories.map((category) => (
        <a
          key={category.id}
          className="w-381 h-480 flex flex-wrap justify-center rounded-lg"
          onClick={() => handleCategoryClick(category.id)}
        >
          <img
            src={category.imageLink}
            alt={category.name}
            className="w-full rounded-xl object-fill"
          />
          <h3 className="mt-4 font-semibold">{category.name}</h3>
        </a>
      ))}
    </div>
  );
};

export default Categories;
