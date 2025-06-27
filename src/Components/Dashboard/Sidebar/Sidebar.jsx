import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link, NavLink } from 'react-router'; // ✅ fixed router import
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
                position: 'center',
                icon: 'success',
                title: 'Log Out successful!',
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
            <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-base-100 shadow sticky top-0 z-50 dark:bg-gray-800">
                <Link to="/" className="flex items-center gap-2 text-base-content dark:text-white">
                    <BiLeftArrow />
                    <span className="font-bold">Home</span>
                </Link>
                <button onClick={toggleSidebar} className="text-xl text-base-content dark:text-white">
                    <HiOutlineDotsVertical />
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 flex">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black opacity-50"
                        onClick={() => setSidebarOpen(false)}
                    ></div>

                    {/* Sidebar Panel */}
                    <aside className="relative z-50 w-64 bg-base-300 dark:bg-gray-900 p-6 shadow-lg transform transition-transform duration-300">
                        <div className="flex justify-between items-center mb-6 text-base-content dark:text-white">
                            <h2 className="text-lg font-bold">Dashboard</h2>
                            <button onClick={toggleSidebar} className="text-xl">✕</button>
                        </div>

                        <Link to="/" className="flex items-center text-primary mb-6 border-b pb-2">
                            <BiLeftArrow />
                            <img
                                src="https://i.ibb.co/0ytx8RG4/job-nest-freelance-web-site-logo-job.png"
                                alt="Logo"
                                className="ml-2 w-24"
                            />
                        </Link>

                        {/* Nav Links */}
                        <NavLink
                            to="/dashboard"
                            end
                            className={({ isActive }) =>
                                `mb-6 flex items-center gap-2 text-xl font-bold transition duration-200 ${isActive ? 'text-primary underline' : 'text-base-content dark:text-white hover:text-primary'}`
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
                                        `btn btn-block ${isActive ? 'text-primary underline bg-base-300' : 'text-base-content dark:text-white bg-base-100 hover:bg-base-300 dark:bg-gray-700 dark:hover:bg-gray-800'}`
                                    }
                                >
                                    Browse All Task
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/add-task"
                                    className={({ isActive }) =>
                                        `btn btn-block ${isActive ? 'text-primary underline bg-base-300' : 'text-base-content dark:text-white bg-base-100 hover:bg-base-300 dark:bg-gray-700 dark:hover:bg-gray-800'}`
                                    }
                                >
                                    Add Task
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/my-posted-tasks"
                                    className={({ isActive }) =>
                                        `btn btn-block ${isActive ? 'text-primary underline bg-base-300' : 'text-base-content dark:text-white bg-base-100 hover:bg-base-300 dark:bg-gray-700 dark:hover:bg-gray-800'}`
                                    }
                                >
                                    My Posted Task
                                </NavLink>
                            </li>
                        </ul>

                        <div className="mt-6 border-t border-base-300 pt-4">
                            <div className="mb-3 text-sm text-base-content dark:text-gray-300">
                                Logged in as <span className="font-semibold">{user?.displayName?.slice(0, 10) || 'User'}...</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <NavLink
                                    to="/dashboard/my-profile"
                                    className={({ isActive }) =>
                                        `btn btn-block ${isActive ? 'text-primary underline bg-base-300' : 'text-base-content dark:text-white bg-base-100 hover:bg-base-300 dark:bg-gray-700 dark:hover:bg-gray-800'}`
                                    }
                                >
                                    <BsPersonFillExclamation /> Profile
                                </NavLink>
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
            )}

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:w-64 lg:sticky lg:top-0 lg:h-screen bg-base-300 dark:bg-gray-900 p-6 z-10">
                <div>
                    <Link to="/" className="flex items-center text-primary mb-6 border-b pb-2">
                        <BiLeftArrow />
                        <img
                            src="https://i.ibb.co/0ytx8RG4/job-nest-freelance-web-site-logo-job.png"
                            alt="Logo"
                            className="ml-2 w-24"
                        />
                    </Link>

                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) =>
                            `mb-6 flex items-center gap-2 text-xl font-bold transition duration-200 ${isActive ? 'text-primary underline' : 'text-base-content dark:text-white hover:text-primary'}`
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
                                    `btn btn-block ${isActive ? 'text-primary underline bg-base-300' : 'text-base-content dark:text-white bg-base-100 hover:bg-base-300 dark:bg-gray-700 dark:hover:bg-gray-800'}`
                                }
                            >
                                Browse All Task
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/add-task"
                                className={({ isActive }) =>
                                    `btn btn-block ${isActive ? 'text-primary underline bg-base-300' : 'text-base-content dark:text-white bg-base-100 hover:bg-base-300 dark:bg-gray-700 dark:hover:bg-gray-800'}`
                                }
                            >
                                Add Task
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/my-posted-tasks"
                                className={({ isActive }) =>
                                    `btn btn-block ${isActive ? 'text-primary underline bg-base-300' : 'text-base-content dark:text-white bg-base-100 hover:bg-base-300 dark:bg-gray-700 dark:hover:bg-gray-800'}`
                                }
                            >
                                My Posted Task
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="mt-6 border-t border-base-300 pt-4">
                    <div className="mb-3 text-sm text-base-content dark:text-gray-300">
                        Logged in as{' '}
                        <span className="font-semibold">{user?.displayName?.slice(0, 10) || 'User'}...</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <NavLink
                            to="/dashboard/my-profile"
                            className={({ isActive }) =>
                                `btn btn-block ${isActive ? 'text-primary underline bg-base-300' : 'text-base-content dark:text-white bg-base-100 hover:bg-base-300 dark:bg-gray-700 dark:hover:bg-gray-800'}`
                            }
                        >
                            <BsPersonFillExclamation /> Profile
                        </NavLink>
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
