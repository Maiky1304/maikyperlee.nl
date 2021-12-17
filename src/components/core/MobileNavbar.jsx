import React from "react";
import useDrawer from "../../hooks/DrawerProvider";

import CloseMenuButton from "./CloseMenuButton";
import GetInTouchButton from "./GetInTouchButton";
import MobileNavLink from "./MobileNavLink";

const MobileNavbar = () => {
  const { setDrawerOpen } = useDrawer();
  return (
    <>
      <div className="absolute right-5 top-5">
        <CloseMenuButton />
      </div>
      <nav className="flex flex-col p-10 justify-center">
        <ul className="flex flex-col gap-5">
          <MobileNavLink name="Home" path="/" />
          <MobileNavLink name="Work" path="/work" />
          <MobileNavLink name="About Me" path="/aboutme" />
        </ul>
        <div className="flex mx-4 mt-10" onClick={() => setDrawerOpen(false)}>
          <GetInTouchButton />
        </div>
      </nav>
    </>
  );
};

export default MobileNavbar;
