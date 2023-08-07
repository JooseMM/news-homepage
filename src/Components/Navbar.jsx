import React from "react";
import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    <div className="flex ">
      <img src={logo} alt="Company logo" />
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </div>
  );
}

export default Navbar;
