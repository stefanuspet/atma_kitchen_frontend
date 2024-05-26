import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { logout } from "../../api/auth";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
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
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink to="/dashboard-manager">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdDashboard className="text-xl" />
                <span className="ms-3">Dashboard</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-manager/jabatan">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaUserCog />
                <span className="flex-1 ms-3 whitespace-nowrap">Jabatan</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-manager/karyawan">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <ImUserTie />
                <span className="flex-1 ms-3 whitespace-nowrap">Karyawan</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-manager/penitip">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaPeopleCarryBox />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Data Penitip
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-manager/cat_bahan_baku">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <SiMaterialdesignicons />
                <span className="flex-1 ms-3 whitespace-nowrap text-wrap">
                  Pencatatan Pembelian Bahan Baku
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-manager/cat_pengeluaran_lain">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaMoneyCheckAlt />
                <span className="flex-1 ms-3 whitespace-nowrap text-wrap">
                  Pencatatan Pengeluaran Lain
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaSignOutAlt />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
