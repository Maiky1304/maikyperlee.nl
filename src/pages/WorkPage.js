import React, { useEffect, useState } from "react";

import CategoryFilterBar from "../components/work/CategoryFilterBar";
import LFMButton from "../components/work/LFMButton";
import NoProjects from "../components/work/NoProjects";
import WorkGrid from "../components/work/WorkGrid";
import WorkData from "../constants/work.json";

const WorkPage = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const data = Object.keys(WorkData.data)
      .map((key) => ({ id: key, ...WorkData.data[key] }))
      .filter(
        (project) =>
          project.type.includes(categoryFilter) || categoryFilter === "All"
      );
    setProjects(data);
  }, [categoryFilter]);

  return (
    <div className="flex flex-col justify-center items-center mt-10 px-8 md:px-16 lg:px-24 xl:px-28">
      <CategoryFilterBar
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />
      <WorkGrid projects={projects} />
      {categoryFilter === "All" && <LFMButton />}
      {projects.length === 0 && <NoProjects />}
    </div>
  );
};

export default WorkPage;
