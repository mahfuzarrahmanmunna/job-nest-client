import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link, NavLink } from 'react-router';
import { BiLeftArrow, BiLogOut } from 'react-icons/bi';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { LayoutDashboard } from 'lucide-react';
import ThemeSwitch from '../../../Context/Theme/ThemeSwitch';
import { BsPersonFillExclamation } from 'react-icons/bs';

const Sidebar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogOutUser = () => {
        logOutUser().then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Log Out successful!",
                showConfirmButton: false,
                timer: 1500
            });
        });
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            {/* Mobile Navbar */}
            <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-base-100 shadow sticky top-0 z-50 dark:bg-gray-900">
                <Link to="/" className="flex items-center gap-2 text-base-content">
                    <BiLeftArrow />
                    <span className="font-bold dark:text-white">Home</span>
                </Link>
                <button onClick={toggleSidebar} className="text-xl text-base-content dark:text-white">
                    <HiOutlineDotsVertical />
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`bg-base-200 dark:bg-gray-900 p-6 w-64 transition-all duration-300 z-50 lg:block ${sidebarOpen ? 'block' : 'hidden'
                    } fixed lg:static top-0 left-0 h-screen flex flex-col justify-between`}
            >
                {/* Top Section */}
                <div>
                    <div className="flex justify-between items-center mb-6 lg:hidden text-base-content">
                        <h2 className="text-lg font-bold dark:text-primary">Dashboard</h2>
                        <button onClick={toggleSidebar} className="text-xl dark:text-white">✕</button>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <Link to="/" className="flex items-center">
                            <BiLeftArrow className="text-base-content" />
                            <img
                                src="https://i.ibb.co/4gFKt7dG/Chat-GPT-Image-Jun-25-2025-10-13-36-PMcopy.png"
                                alt="Logo"
                                className="ml-2 w-24"
                            />
                        </Link>
                        <ThemeSwitch />
                    </div>

                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) =>
                            `mb-6 flex items-center gap-2 text-xl font-bold dark:text-white transition duration-200 ${isActive
                                ? 'text-primary underline'
                                : 'text-base-content hover:text-primary'
                            }`
                        }
                    >
                        <LayoutDashboard />
                        Dashboard
                    </NavLink>

                    <ul className="space-y-4 font-medium">
                        <li>
                            <NavLink
                                to="/dashboard/browse-tasks"
                                className={({ isActive }) =>
                                    `btn btn-block dark:bg-gray-700 dark:dark:text-white dark:hover:bg-gray-800 ${isActive
                                        ? 'text-primary underline bg-base-300'
                                        : 'text-base-content bg-base-100 hover:bg-base-300'
                                    }`
                                }
                            >
                                Browse All Task
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/add-task"
                                className={({ isActive }) =>
                                    `btn btn-block dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800 ${isActive
                                        ? 'text-primary underline bg-base-300'
                                        : 'text-base-content bg-base-100 hover:bg-base-300'
                                    }`
                                }
                            >
                                Add Task
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/my-posted-tasks"
                                className={({ isActive }) =>
                                    `btn btn-block dark:bg-gray-700 dark:text-white dark:hover:bg-gray-800 ${isActive
                                        ? 'text-primary underline bg-base-300'
                                        : 'text-base-content bg-base-100 hover:bg-base-300'
                                    }`
                                }
                            >
                                My Posted Task
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Bottom Section */}
                <div className="mt-6 border-t border-base-300 pt-4">
                    <div className="mb-3 text-sm text-base-content">
                        Logged in as{' '}
                        <span className="font-semibold">
                            {user?.displayName ? user.displayName.slice(0, 10) + '...' : 'User'}
                        </span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Link
                            to="/dashboard/my-profile"
                            className="btn btn-block text-sm flex items-center gap-2 bg-base-100 text-primary hover:underline"
                        >
                            <BsPersonFillExclamation /> Profile
                        </Link>
                        <button
                            onClick={handleLogOutUser}
                            className="btn btn-block text-sm flex items-center gap-2 bg-red-100 text-red-600 hover:underline dark:bg-red-800 dark:text-white"
                        >
                            <BiLogOut /> Logout
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
