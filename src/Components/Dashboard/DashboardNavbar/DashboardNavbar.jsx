// src/Components/Dashboard/Navbar/DashboardNavbar.jsx

import { Link } from 'react-router';
import { Search, Bell, UserCircle } from 'lucide-react';
import ThemeSwitch from '../../../Context/Theme/ThemeSwitch';
import { use } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

const DashboardNavbar = () => {
    const { user } = use(AuthContext)
    return (
        <div className="flex items-center justify-between px-6 py-4 bg-base-100 dark:bg-gray-900 border-b border-base-300 lg:static sticky top-0 z-40">
            {/* Left section: Logo or Title */}
            <h1 className="text-xl font-semibold text-base-content dark:text-white">Dashboard</h1>

            {/* Middle section: Search bar */}
            <div className="hidden md:flex items-center relative w-1/3">
                <input
                    type="text"
                    placeholder="Search anything..."
                    className="input input-bordered w-full dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-300 pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>

            {/* Right section: Theme switch, bell, avatar */}
            <div className="flex items-center gap-4">
                <ThemeSwitch />
                <Bell className="text-gray-600 dark:text-gray-200 cursor-pointer" />
                <Link to="/dashboard/my-profile">
                    {
                        user ? <div>
                            <img src={user.photoURL} title='View Profile' alt="profile" className='w-12 h-12 rounded-full object-cover' />
                        </div>
                            :
                            <UserCircle className="text-gray-600 dark:text-gray-200 w-8 h-8 cursor-pointer" />
                    }
                </Link>
            </div>
        </div>
    );
};

export default DashboardNavbar;
