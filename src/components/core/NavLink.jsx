import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ name, path, button = false, buttonColor = null }) => {
  const { pathname } = useLocation();
  const active = pathname === path;

  return (
    <li
      className={`list-none mx-3 px-2 font-bold text-xl ${
        button && `${buttonColor} p-2 bg-gray-200 rounded-xl shadow-sm`
      } ${
        active &&
        "pb-2 border-b-2 border-secondary-700 dark:border-secondary-400"
      }`}
    >
      <Link
        className={`${
          active
            ? "text-primary-700 dark:text-primary-200"
            : "text-black dark:text-white"
        }`}
        to={path}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
