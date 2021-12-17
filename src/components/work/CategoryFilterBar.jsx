import React from "react";
import WorkData from "../../constants/work.json";
import CategoryButton from "./CategoryButton";

const CategoryFilterBar = ({ categoryFilter, setCategoryFilter }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 border-b border-gray-200 pb-7">
      {WorkData.categories.map((name) => (
        <CategoryButton
          onClick={() => setCategoryFilter(name)}
          active={categoryFilter === name}
        >
          <span className="font-bold text-center">{name}</span>
          <hr className="w-3 border-gray-900 dark:border-gray-200 mx-1" />
          <span>
            {Object.keys(WorkData.data)
              .map((key) => WorkData.data[key])
              .filter((project) => project.type.includes(name)).length > 0
              ? Object.keys(WorkData.data)
                  .map((key) => WorkData.data[key])
                  .filter((project) => project.type.includes(name))
                  .reduce((ttl, project) => ttl + 1, 0)
                  .toString()
              : 0}
          </span>
        </CategoryButton>
      ))}
      <CategoryButton
        onClick={() => setCategoryFilter("All")}
        active={categoryFilter === "All"}
      >
        <span className="text-center w-full">All</span>
      </CategoryButton>
    </div>
  );
};

export default CategoryFilterBar;
