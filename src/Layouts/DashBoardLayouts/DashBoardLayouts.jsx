import { useState, useContext } from 'react';
import { LayoutDashboard } from 'lucide-react';
import { BiLeftArrow, BiLogOut } from 'react-icons/bi';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Outlet, NavLink, Link } from 'react-router'; // ✅ Corrected
import { BsPersonFillExclamation } from 'react-icons/bs';
import { AuthContext } from '../../Context/AuthContext';
// import ThemeSwitch from '../../Context/Theme/ThemeSwitch';
import Swal from 'sweetalert2';
import ThemeSwitch from '../../Context/Theme/ThemeSwitch';
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar';
// import ThemeSwitch from '../../Context/Theme/ThemeSwitch';

const DashBoardLayouts = () => {


    return (
        <div className="flex flex-col bg-base-100 dark:bg-gray-800 lg:flex-row min-h-screen">
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6  lg:mt-0  ml-0 lg:ml-0">
                <Outlet />
            </main>
        </div>
    );
};

export default DashBoardLayouts;
