import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/ownerComp/Navbar";
import Sidebar from "../components/ownerComp/Sidebar";

const DashboardOwnerLayout = ({ children }) => {
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

export default DashboardOwnerLayout;
