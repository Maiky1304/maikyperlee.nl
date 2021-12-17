import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const LookAtMyWorkButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      suffix={
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      }
      text="Look at my work"
      background="bg-primary-400 dark:hover:bg-primary-500"
      hoverBackground="hover:bg-primary-500 dark:hover:bg-primary-400"
      rounded
      shadow
      textColor="text-white dark:text-primary-700"
      fontWeight="font-bold"
      onClick={() => {
        navigate("/work");
      }}
      size="px-4 py-4"
    />
  );
};

export default LookAtMyWorkButton;
