import React from "react";

const BackToTop = () => {
  return (
    <footer className="flex justify-center items-center flex-row p-20 dark:text-white select-none mx-auto">
      <div className="flex dark:bg-primary-600 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-75 bg-opacity-25 cursor-pointer p-3 rounded-2xl w-max">
        <a
          href="#top"
          className="flex flex-col text-center text-sm md:text-lg lg:text-xl"
        >
          <h2>You've reached the end!</h2>
          <h3>Go back to the top</h3>
        </a>
      </div>
    </footer>
  );
};

export default BackToTop;
