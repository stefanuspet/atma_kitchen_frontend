import React from "react";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative w-full">
      <div className="bg-[#171832] opacity-80 h-20 absolute top-8 w-full z-10" />
      <div className="absolute z-10 left-10 top-0">
        <img src={Logo} alt="Logo" width={150} height={200} />
      </div>
      <NavLink
        to="/login"
        className="absolute z-10 left-64 top-14 text-[#AD773D] hover:text-[#ffd966] text-2xl font-bold"
      >
        LOGIN
      </NavLink>
      <div className="absolute flex gap-20 z-10 top-14 right-20">
        <NavLink
          to="/"
          className="text-[#AD773D] hover:text-[#ffd966] text-2xl font-bold"
        >
          Home
        </NavLink>
        <NavLink
          to="/ourmenu"
          className="text-[#AD773D] hover:text-[#ffd966] text-2xl font-bold"
        >
          Our Menu
        </NavLink>
        <NavLink
          to="/contact"
          className="text-[#AD773D] hover:text-[#ffd966] text-2xl font-bold"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
