import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import WorkData from "../constants/work.json";
import { Slide } from "react-slideshow-image";
import Button from "../components/core/Button";

const WorkInfoPage = (props) => {
  const navigate = useNavigate();
  const { project } = useParams();
  const projectData = WorkData.data[project];

  if (!projectData) {
    return "Not Found";
  }

  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-28 py-10 load">
      <header className="p-5 max-w-2xl dark:text-white">
        <h1 className="font-bold text-4xl">{projectData.name}</h1>
        <p className="mt-3 text-sm text-secondary-600 dark:text-secondary-100">
          {projectData.description}
        </p>
        <div className="mt-3">
          <Button
            onClick={() => navigate("/work")}
            text="Go back"
            background="bg-cyan-400"
            rounded
            textColor="text-white"
            prefix={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
            }
          />
        </div>
      </header>
      <section className="w-full rounded-xl mt-10">
        <Slide infinite={false} transitionDuration={500}>
          {projectData.images.map((image) => (
            <div className="each-slide rounded-xl">
              <div
                className="flex items-end p-3 rounded-xl bg-cyan-200 dark:bg-cyan-800"
                style={{
                    height: '800px',
                    backgroundImage: `url(${image.url})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat space"
                }}
              >
                <span className="p-5 bg-opacity-90 rounded-xl text-md text-center bg-cyan-500 text-white font-bold">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </Slide>
      </section>
    </section>
  );
};

export default WorkInfoPage;
