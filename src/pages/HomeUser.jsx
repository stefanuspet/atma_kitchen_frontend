import React from "react";
import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";

const HomeUser = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout().then((res) => {
      console.log(res);
      localStorage.removeItem("token");
      localStorage.removeItem("abilities");
      navigate("/login");
    });
  };
  return (
    <>
      <div>
        <h1>Home User</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};

export default HomeUser;
