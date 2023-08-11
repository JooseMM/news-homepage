import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburguerMenu from "../assets/images/icon-menu.svg";
import hamburguerMenuClose from "../assets/images/icon-menu-close.svg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="flex justify-between  items-center w-full mb-8  lg:mb-11 relative">
      <a href="/">
        <img src={logo} alt="Company logo" className="max-w-[50px]" />
      </a>

      <img
        src={showMenu ? hamburguerMenuClose : hamburguerMenu}
        alt="Menu mobile button"
        onClick={() => setShowMenu(!showMenu)}
        className={`${
          showMenu ? "h-7 w-[30px] z-20" : "w-[38px] h-5"
        } md:hidden`}
      />

      {/* Mobile menu open  */}
      <div
        className={`${
          showMenu
            ? "flex flex-col pt-36 items-start pl-8 z-10 h-[100vh] bg-off-white text-very-dark-blue"
            : "hidden"
        } mobile-active-menu `}
      >
        <a href="/" className="mb-6 text-lg">
          Home
        </a>
        <a href="/" className="mb-6 text-lg">
          New
        </a>
        <a href="/" className="mb-6 text-lg">
          Popular
        </a>
        <a href="/" className="mb-6 text-lg">
          Trending
        </a>
        <a href="/" className="mb-6 text-lg">
          Categories
        </a>
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex p-0 text-dark-grayish ">
        <li className="cursor-pointer hover:text-soft-red">
          <a>Home</a>
        </li>
        <li className="ml-9 cursor-pointer hover:text-soft-red">
          <a>New</a>
        </li>
        <li className="ml-9 cursor-pointer hover:text-soft-red">
          <a>Popular</a>
        </li>
        <li className="ml-9 cursor-pointer hover:text-soft-red">
          <a>Trending</a>
        </li>
        <li className="ml-9 cursor-pointer hover:text-soft-red">
          <a>Categories</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
