import React from "react";
import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full">
      <img src={logo} alt="Company logo" />
      <ul className="flex p-0">
        <li className="cursor-pointer">
          <a>Home</a>
        </li>
        <li className="ml-6 cursor-pointer">
          <a>New</a>
        </li>
        <li className="ml-6 cursor-pointer">
          <a>Popular</a>
        </li>
        <li className="ml-6 cursor-pointer">
          <a>Trending</a>
        </li>
        <li className="ml-6 cursor-pointer">
          <a>Categories</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
