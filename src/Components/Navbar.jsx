import React from "react";
import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full  mb-11">
      <a href="/">
        <img src={logo} alt="Company logo" />
      </a>
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
