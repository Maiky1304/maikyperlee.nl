import React from "react";
import useDrawer from "../../hooks/DrawerProvider";
import Button from "./Button";

const HamburgerMenuButton = () => {
  const { setDrawerOpen, drawerOpen } = useDrawer();
  return (
    <a href="#top">
      <Button
        prefix={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        }
        text=""
        background=""
        hoverBackground=""
        rounded
        textColor="text-primary-100"
        fontWeight="font-bold"
        onClick={() => setDrawerOpen(!drawerOpen)}
      />
    </a>
  );
};

export default HamburgerMenuButton;
