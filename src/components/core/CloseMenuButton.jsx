import React from "react";
import useDrawer from "../../hooks/DrawerProvider";
import Button from "./Button";

const CloseMenuButton = () => {
  const { setDrawerOpen } = useDrawer();
  return (
    <Button
      prefix={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      }
      text=""
      background=""
      hoverBackground=""
      rounded
      textColor="text-primary-100"
      fontWeight="font-bold"
      onClick={() => setDrawerOpen(false)}
    />
  );
};

export default CloseMenuButton;
