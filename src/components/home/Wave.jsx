import React from "react";

const Wave = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <svg
        className="absolute bottom-5 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#6dd5ed"
          fill-opacity="1"
          d="M0,32L48,26.7C96,21,192,11,288,32C384,53,480,107,576,138.7C672,171,768,181,864,176C960,171,1056,149,1152,122.7C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="absolute bottom-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#2193b0"
          fill-opacity="1"
          d="M0,192L48,181.3C96,171,192,149,288,138.7C384,128,480,128,576,144C672,160,768,192,864,170.7C960,149,1056,75,1152,53.3C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
