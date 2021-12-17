import React from "react";
import Typewriter from "typewriter-effect";
import Wave from "../components/home/Wave";
import LookAtMyWorkButton from "../components/core/LookAtMyWorkButton";

const HomePage = () => {
  return (
    <div>
      <div className="load h-96 flex items-center justify-center px-8 md:px-16 lg:px-24 xl:px-28">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl dark:text-white flex gap-5 w-max text-center">
            <img
              src="/assets/wavinghand.png"
              className="waving-hand"
              alt="👋"
            />{" "}
            My name is Maiky!
          </h2>
          <h3 className="mt-3 text-xl md:text-3xl lg:text-4xl flex justify-center text-gray-500 dark:text-gray-300 font-light w-full">
            <span className="mr-2">I'm a </span>
            <Typewriter
              options={{
                strings: [" Software", " Web"],
                autoStart: true,
                loop: true,
              }}
            />
            <span className="ml-2"> Developer</span>
          </h3>
          <div className="flex justify-center mt-5">
            <LookAtMyWorkButton />
          </div>
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default HomePage;
