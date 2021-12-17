import React from "react";

const CategoryButton = ({ active, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full w-full px-3 py-1 flex items-center shadow-md dark:text-white ${
        active
          ? "bg-primary-400 hover:bg-primary-300"
          : "bg-secondary-200 hover:bg-secondary-100 dark:bg-secondary-700 dark:hover:bg-secondary-800"
      }`}
    >
      {children}
    </button>
  );
};

export default CategoryButton;
