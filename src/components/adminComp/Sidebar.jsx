import React from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FaReceipt } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GiChipsBag } from "react-icons/gi";
import { logout } from "../../api/auth";
import { CiMoneyBill } from 'react-icons/ci';


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
            <NavLink to="/dashboard-admin">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MdDashboard className="text-xl" />
                <span className="ms-3">Dashboard</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-admin/produk">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaShoppingBag />
                <span className="flex-1 ms-3 whitespace-nowrap">Produk</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-admin/produk-penitip">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <GiChipsBag />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Produk Penitip
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-admin/resep">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaReceipt />
                <span className="flex-1 ms-3 whitespace-nowrap">Resep</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-admin/bahanbaku">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaClipboardList />
                <span className="flex-1 ms-3 whitespace-nowrap">Bahan Baku</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-admin/hampers">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <GiShoppingBag />
                <span className="flex-1 ms-3 whitespace-nowrap">Hampers</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-admin/jarak-pengiriman">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <GiShoppingBag />
                <span className="flex-1 ms-3 whitespace-nowrap">Jarak Pengiriman</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-admin/konfirmasi-pembayaran">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <GiShoppingBag />
                <span className="flex-1 ms-3 whitespace-nowrap">Konfirmasi Pembayaran</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-admin/status">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <GiShoppingBag />
                <span className="flex-1 ms-3 whitespace-nowrap">Status Pesanan</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard-admin/pembatalan-pesanan">
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <GiShoppingBag />
                <span className="flex-1 ms-3 whitespace-nowrap">Pembatalan Pesanan</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard-admin/penarikan-saldo'>
              <div className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <CiMoneyBill />
                <span className='flex-1 ms-3 whitespace-nowrap'>
                  Penarikan Saldo
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
