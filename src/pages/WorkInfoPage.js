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
    <section className="px-8 md:px-16 lg:px-24 xl:px-28 flex items-center justify-between mt-20 load">
      <header className="p-5 max-w-2xl dark:text-white">
        <h1 className="font-bold text-4xl">{projectData.name}</h1>
        <p className="mt-3 text-sm text-secondary-100 font-light">
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
      <section className="w-1/2 h-96 rounded-xl">
        <Slide infinite={false} transitionDuration={500}>
          {projectData.images.map((image) => (
            <div className="each-slide rounded-xl">
              <div
                className="flex items-end bg-cover h-96 p-3 rounded-xl"
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
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
