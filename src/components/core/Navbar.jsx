import React from "react";
import { Link } from "react-router-dom";
import GetInTouchButton from "./GetInTouchButton";
import HamburgerMenuButton from "./HamburgerMenuButton";
import NavLink from "./NavLink";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <>
      <section id="top" />
      <nav className="flex p-10 justify-between items-center">
        <div className="flex">
          <div className="mr-5 xl:pr-8 xl:border-r-2 xl:border-r-secondary-700 xl:dark:border-r-secondary-400">
            <Link to="/">
              <h1 className="corinthia text-2xl font-bold dark:text-white">
                Maiky Perlee
              </h1>
            </Link>
          </div>
          <ul className="hidden lg:flex">
            <NavLink name="Home" path="/" />
            <NavLink name="Work" path="/work" />
            <NavLink name="About Me" path="/aboutme" />
          </ul>
        </div>
        <section className="flex items-center">
          <ThemeSwitcher />
          <div className="lg:hidden">
            <HamburgerMenuButton />
          </div>
          <div className="hidden lg:block">
            <GetInTouchButton />
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
