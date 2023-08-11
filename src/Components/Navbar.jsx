import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburguerMenu from "../assets/images/icon-menu.svg";
import hamburguerMenuClose from "../assets/images/icon-menu-close.svg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-between  items-center w-full mb-8  lg:mb-11 relative">
      <a href="/">
        <img src={logo} alt="Company logo" className="max-w-[50px]" />
      </a>

      {/* <img
        src={showMenu ? hamburguerMenuClose : hamburguerMenu}
        alt="Menu mobile button"
        onClick={() => setShowMenu(!showMenu)}
        className={`${showMenu ? "h-7 w-[35px]" : "w-[38px] h-5"} md:hidden`}
      /> */}
      <img
        src={hamburguerMenu}
        alt="Menu mobile button"
        className="w-[38px] h-5 md:hidden"
        onClick={() => setShowMenu(!showMenu)}
      />
      {/* Mobile menu open  */}
      <div
        className={`${
          showMenu
            ? "flex flex-col justify-center items-start pl-10 bg-off-white"
            : "hidden"
        } mobile-active-menu `}
      >
        <div className="flex justify-end w-full mb-16">
          <img src={hamburguerMenuClose} alt="Close menu buttom" />
        </div>
        <a href="/" className="mb-10">
          Home
        </a>
        <a href="/" className="mb-10">
          New
        </a>
        <a href="/" className="mb-10">
          Popular
        </a>
        <a href="/" className="mb-10">
          Trending
        </a>
        <a href="/" className="mb-10">
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
