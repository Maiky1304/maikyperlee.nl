import React from "react";
import WorkCard from "./WorkCard";

const WorkGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 my-10 w-full load">
      {projects.map((project) => (
        <WorkCard project={project} />
      ))}
    </div>
  );
};

export default WorkGrid;
