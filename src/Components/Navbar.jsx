import React from "react";
import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full">
      <img src={logo} alt="Company logo" />
      <ul className="flex p-0">
        <li>Home</li>
        <li className="ml-6">New</li>
        <li className="ml-6">Popular</li>
        <li className="ml-6">Trending</li>
        <li className="ml-6">Categories</li>
      </ul>
    </div>
  );
}

export default Navbar;
