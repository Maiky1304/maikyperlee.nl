import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const GetInTouchButton = () => {
  const navigate = useNavigate();
  return (
    <Button
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
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
      }
      text="Get In Touch"
      background="bg-primary-700 dark:hover:bg-primary-600"
      hoverBackground="hover:bg-primary-800 dark:hover:bg-primary-400"
      rounded
      shadow
      textColor="text-primary-100"
      fontWeight="font-bold"
      onClick={() => navigate("/contact")}
    />
  );
};

export default GetInTouchButton;
