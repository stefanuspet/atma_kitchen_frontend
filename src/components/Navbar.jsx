import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout().then((res) => {
      console.log(res);
      localStorage.removeItem("token");
      localStorage.removeItem("abilities");
      navigate("/login");
    });
  };

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div className="relative w-full">
      <div className="bg-[#171832] opacity-80 h-20 absolute top-10 w-full z-10" />
      <div className="absolute z-10 left-10 top-2">
        <img src={Logo} alt="Logo" width={150} height={200} />
      </div>
      {isLogin && (
        <div
          onClick={handleLogout}
          className="absolute z-10 left-64 top-14 text-[#AD773D] hover:text-[#ffd966] text-2xl font-bold cursor-pointer"
        >
          Logout
        </div>
      )}
      {!isLogin && (
        <NavLink
          to="/login"
          className="absolute z-10 left-64 top-14 text-[#AD773D] hover:text-[#ffd966] text-2xl font-bold"
        >
          LOGIN
        </NavLink>
      )}
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
        {isLogin && (
          <NavLink
            to={"/cart"}
            className="text-[#AD773D] relative hover:text-[#ffd966] text-2xl font-bold cursor-pointer p-2"
          >
            <div className="w-3 h-3 bg-red-600 rounded-full absolute right-0"></div>
            <FaShoppingCart />
          </NavLink>
        )}
        {isLogin && (
          <div
            onClick={handleLogout}
            className="text-[#AD773D] w-8 h-8 rounded-full bg-white hover:text-[#ffd966] text-2xl font-bold cursor-pointer p-2"
          ></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
