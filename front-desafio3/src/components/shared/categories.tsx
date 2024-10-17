import React from "react";

const categories = [
  {
    id: 1,
    name: "Dining",
    img: "/src/assets/images/dining.svg",
  },
  {
    id: 2,
    name: "Living",
    img: "/src/assets/images/logo.svg",
  },
  {
    id: 3,
    name: "Bedroom",
    img: "/src/assets/images/logo.svg",
  },
];

const Category: React.FC = () => {
  return (
    <div className="flex flex-row justify-center">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-wrap justify-center w-381 h-480 rounded-lg"
        >
          <img
            src={category.img}
            alt={category.name}
            className="w-full object-fill rounded"
          />
          <h3 className="mt-4 font-semibold">{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Category;
