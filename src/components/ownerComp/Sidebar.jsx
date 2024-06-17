import React from 'react';
import {MdDashboard} from 'react-icons/md';
import {FaMoneyBillWaveAlt} from 'react-icons/fa';
import {FaSignOutAlt} from 'react-icons/fa';
import {logout} from '../../api/auth';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {HiOutlineDocumentReport} from 'react-icons/hi';

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout().then((res) => {
      console.log(res);
      localStorage.removeItem('token');
      localStorage.removeItem('abilities');
      navigate('/login');
    });
  };
  return (
    <aside
      id='logo-sidebar'
      className='fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
      aria-label='Sidebar'
    >
      <div className='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'>
        <ul className='space-y-2 font-medium'>
          <li>
            <NavLink to='/dashboard-owner'>
              <div className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <MdDashboard className='text-xl' />
                <span className='ms-3'>Dashboard</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard-owner/gaji'>
              <div className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <FaMoneyBillWaveAlt />
                <span className='flex-1 ms-3 whitespace-nowrap'>
                  Gaji dan Bonus
                </span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/dashboard-owner/laporan'>
              <div className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <HiOutlineDocumentReport />
                <span className='flex-1 ms-3 whitespace-nowrap'>Laporan</span>
              </div>
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>
              <div className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                <FaSignOutAlt />
                <span className='flex-1 ms-3 whitespace-nowrap'>Logout</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
