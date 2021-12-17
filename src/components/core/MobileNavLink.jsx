import React from "react";
import { Link, useLocation } from "react-router-dom";
import useDrawer from "../../hooks/DrawerProvider";

const MobileNavLink = ({ name, path, button = false, buttonColor = null }) => {
  const { pathname } = useLocation();
  const { setDrawerOpen } = useDrawer();
  const active = pathname === path;

  return (
    <li
      className={`list-none mx-3 px-2 font-bold text-2xl md:text-3xl lg:text-4xl ${
        button && `${buttonColor} p-2 bg-gray-200 rounded-xl shadow-sm`
      }`}
    >
      <Link
        onClick={() => setDrawerOpen(false)}
        className={`${
          active
            ? "text-primary-500 dark:text-primary-100"
            : "text-black dark:text-white"
        }`}
        to={path}
      >
        {name}
      </Link>
    </li>
  );
};

export default MobileNavLink;
