import React from "react";
import Navbar from "../components/adminComp/Navbar";
import Sidebar from "../components/adminComp/Sidebar";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const DashboardAdminLayout = ({ children }) => {
  return (
    <div className="bg-gray-900 min-h-svh">
      <Navbar />
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14 text-white">
          {children ? children : <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdminLayout;
