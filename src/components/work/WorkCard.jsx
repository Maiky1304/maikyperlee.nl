import React from "react";
import { Link } from "react-router-dom";

const WorkCard = ({ project, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-secondary-200 p-2 rounded-lg h-64 w-full filter bg-blend-darken flex justify-end flex-col hover:scale-105 hover:shadow-md transition-all duration-300"
    >
      <div className="bg-secondary-700 bg-opacity-60 p-3 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold text-xl">{project.name}</h1>
          <div className="flex gap-2">
            {project.type.map((name) =>
              name.startsWith("gitcollab:") ? (
                <a
                  href={`https://github.com/${name.slice("gitcollab:".length)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bg-primary-100 rounded-full py-0.5 px-2 text-xs flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{name.slice("gitcollab:".length)}</span>
                  </span>
                </a>
              ) : (
                <span className="bg-secondary-100 rounded-full py-0.5 px-2 text-xs">
                  {name}
                </span>
              )
            )}
          </div>
        </div>
        <span className="flex-inline text-sm text-secondary-100 font-light">
          {project.description}
          {project.github && (
            <a
              className="ml-2 text-primary-300 underline"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              Sourcecode
            </a>
          )}
        </span>
      </div>
    </div>
  );
};

export default WorkCard;
