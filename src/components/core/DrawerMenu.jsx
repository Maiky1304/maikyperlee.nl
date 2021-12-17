import React from "react";
import useDrawer from "../../hooks/DrawerProvider";

// touch-action: none; width: calc(100% - 15px); overflow: hidden;

const DrawerMenu = ({ children }) => {
  const { drawerOpen, setDrawerOpen } = useDrawer();

  return drawerOpen ? (
    <>
      <div
        onClick={() => setDrawerOpen(false)}
        className="absolute z-10 overflow-hidden bg-secondary-900 bg-opacity-50 w-screen h-full"
        style={{
          touchAction: "none",
          width: "calc(100%)",
        }}
      ></div>
      <div className="absolute z-20 left-0 top-0 bg-secondary-50 dark:bg-secondary-900 w-3/5 h-full">
        <div className="relative">{children}</div>
      </div>
    </>
  ) : null;
};

export default DrawerMenu;
