import React from "react";

const NoProjects = () => {
  return (
    <div className="p-8 rounded-2xl flex items-center gap-10">
      <h2 className="text-lg font-bold dark:text-white">
        No projects here yet
      </h2>
      <img className="w-24 h-24" src="/assets/sadface.png" alt="?" />
    </div>
  );
};

export default NoProjects;
