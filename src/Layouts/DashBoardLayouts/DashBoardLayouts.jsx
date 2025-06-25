import { useState } from 'react';
import { LayoutDashboard } from 'lucide-react';
import { BiLeftArrow, BiLogOut } from 'react-icons/bi';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { Outlet, NavLink, Link } from 'react-router'; // ✅ use react-router-dom not react-router
import { BsPersonFillExclamation } from 'react-icons/bs';

const DashBoardLayouts = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Mobile Navbar */}
            <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-base-100 dark:bg-gray-900 shadow">
                <Link to="/" className="flex items-center gap-2">
                    <BiLeftArrow />
                    <span className="font-bold">Home</span>
                </Link>
                <button onClick={toggleSidebar} className="text-xl">
                    <HiOutlineDotsVertical />
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`bg-gray-200 dark:bg-gray-900 p-6 w-64 transition-all z-50 duration-300 lg:block ${sidebarOpen ? 'block' : 'hidden'
                    } fixed lg:static top-0 left-0 h-screen flex flex-col justify-between`} // ✅ h-screen + flex-col
            >
                {/* Top Section */}
                <div className=''>
                    <div className="flex justify-between items-center mb-6 lg:hidden">
                        <h2 className="text-lg font-bold">Dashboard</h2>
                        <button onClick={toggleSidebar} className="text-xl">✕</button>
                    </div>

                    <Link to="/" className="flex items-center mb-6">
                        <BiLeftArrow />
                        <img
                            src="https://i.ibb.co/4gFKt7dG/Chat-GPT-Image-Jun-25-2025-10-13-36-PMcopy.png"
                            alt="Logo"
                            className="ml-2 w-24"
                        />
                    </Link>
                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) =>
                            `mb-6 flex items-center gap-2 text-xl font-bold transition duration-200 ${isActive
                                ? 'text-primary underline'
                                : 'text-gray-600 dark:text-white hover:text-blue-600'
                            }`
                        }
                    >
                        <LayoutDashboard />
                        Dashboard
                    </NavLink>
                    <ul className="space-y-4 font-medium">
                        <li>
                            <NavLink to="/dashboard/browse-tasks" className={({ isActive }) => isActive ? "text-primary btn btn-block" : "text-gray-600 dark:text-white btn btn-block"}>
                                Browse All Task
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/add-task" className={({ isActive }) => isActive ? "underline text-primary btn btn-block" : "text-gray-600 dark:text-white btn btn-block"}>
                                Add Task
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/my-posted-tasks" className={({ isActive }) => isActive ? "underline text-primary btn btn-block" : "text-gray-600 dark:text-white btn btn-block"}>
                                My Posted Task
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Bottom Section - Profile and Logout */}
                <div className="mt-6 border-t flex flex-col  border-indigo-300 dark:border-indigo-700 pt-4">
                    <div className="mb-3 text-sm text-gray-600 dark:text-gray-300">
                        Logged in as <span className="font-semibold">Munna</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link to="/dashboard/my-profile" className="text-sm text-blue-600 hover:underline dark:text-blue-400 flex btn btn-block">
                            <BsPersonFillExclamation /> Profile
                        </Link>
                        <button
                            onClick={() => console.log('Logout')} // replace with actual logout logic
                            className="text-sm flex items-center gap-2 btn text-red-600 hover:underline dark:text-red-400"
                        >
                            <BiLogOut /> Logout
                        </button>
                    </div>
                </div>
            </aside>
            {/* Main Content */}
            <main className="flex-1 p-6 mt-4 lg:mt-0 bg-base-100 dark:bg-gray-800 ml-0 lg:ml-0">
                <Outlet />
            </main>
        </div>
    );
};

export default DashBoardLayouts;
