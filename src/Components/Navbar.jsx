import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburguerMenu from "../assets/images/icon-menu.svg";
import hamburguerMenuClose from "../assets/images/icon-menu-close.svg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex justify-between  items-center w-full mb-8  lg:mb-11">
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
        src={showMenu ? hamburguerMenuClose : hamburguerMenu}
        alt="Menu mobile button"
        className="w-[38px] h-5 md:hidden"
        onClick={() => setShowMenu(!showMenu)}
      />

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
