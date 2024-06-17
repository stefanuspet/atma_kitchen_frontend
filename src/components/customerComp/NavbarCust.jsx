import React, { useState, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../api/auth";
import { logout } from "../../api/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState({});
  const [isActive, setActive] = useState(false);

  const handleActive = () => {
    setActive(!isActive);
  };

  const handleLogout = async () => {
    await logout().then((res) => {
      console.log(res);
      localStorage.removeItem("token");
      localStorage.removeItem("abilities");
      navigate("/login");
    });
  };

  const fetchCustomerData = async () => {
    await getProfile().
      then((res) => {
        setCustomerData(res)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCustomerData();
  }, []);

  return (
    <div className="relative w-full">
      <div className="bg-[#171832] opacity-80 h-20 absolute top-8 w-full z-10" />
      <div className="absolute z-10 left-10 top-0">
        <img src={Logo} alt="Logo" width={150} height={200} />
      </div>

      <div className="absolute flex gap-20 z-10 top-14 right-20">
        <NavLink
          to="/homeUser"
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
        <div
          className="w-15 h-15 bg-slate-200 rounded-full"
          onClick={handleActive}
        >
          <FaUserCircle className="text-5xl" />
        </div>
      </div>

      {isActive && (
        <div
          id="userDropdown"
          className="z-10 right-4 absolute top-[6.5rem] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white font-bold text-center">
            <div>{customerData && customerData.nama_customer}</div>
            <div>
              {customerData && customerData.email_customer}
            </div>
            <div>
              {customerData && customerData.notelp_customer}
            </div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <NavLink
                to={`/customers/profile/edit/${customerData && customerData.id}`}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/customers/history"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                History Pesanan
              </NavLink>
            </li>
          </ul>
          <div className="py-1">
          <button onClick={handleLogout}>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaSignOutAlt />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </div>
            </button>
            {/* <a
              href="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </a> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
