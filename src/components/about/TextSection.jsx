import React from "react";

const TextSection = ({ children }) => {
  return (
    <section className="flex flex-col gap-5 load dark:text-white">
      {children}
    </section>
  );
};

export default TextSection;
