import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { LogIn, LogOut, LogOutIcon } from 'lucide-react';
import ThemeSwitch from '../../Context/Theme/ThemeSwitch';

const Navbar = () => {
    const { user, logOutUser } = use(AuthContext);
    const handleLogOutUser = () => {
        logOutUser().then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Log Out successful!",
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
    const link = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "underline text-primary px-4 py-2 rounded font-semibold"
                        : "text-gray-600 dark:text-white hover:text-blue-600 px-4 py-2"
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/add-task"
                className={({ isActive }) =>
                    isActive
                        ? "underline text-primary px-4 py-2 rounded font-semibold"
                        : "text-gray-600 dark:text-white hover:text-blue-600 px-4 py-2"
                }
            >
                Add Task
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/browse-tasks"
                className={({ isActive }) =>
                    isActive
                        ? "underline text-primary px-4 py-2 rounded font-semibold"
                        : "text-gray-600 dark:text-white hover:text-blue-600 px-4 py-2"
                }
            >
                Browse All Task
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/my-posted-tasks"
                className={({ isActive }) =>
                    isActive
                        ? "underline text-primary px-4 py-2 rounded font-semibold"
                        : "text-gray-600 dark:text-white hover:text-blue-600 px-4 py-2"
                }
            >
                My Posted Task
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar p-0 px-4 md:px-12  bg-gray-200 dark:bg-gray-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn p-0 btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dark:bg-gray-800 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <figure>
                    <Link to='/'>
                        <img className='md:w-32 md:h-14 w-24 ms-2 lg:ms-0  shadow-xs rounded-2xl border border-indigo-200' src="https://i.ibb.co/9m2jSpnz/original-c3336e32daef82f3fe80048ef73b45a9.jpg" alt="" />
                    </Link>
                </figure>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>

            <div className="navbar-end flex gap-2">
                <div className=''>
                    <ThemeSwitch />
                </div>
                {user ? (
                    <button onClick={handleLogOutUser} className='btn btn-primary lg:px-6 lg:flex md:flex hidden'>
                        <LogOutIcon /> Signout
                    </button>
                ) :
                    <Link to='/sign-up' className='btn btn-sm lg:btn-md btn-primary  lg:px-6'>
                        <LogIn /> Sign Up
                    </Link>
                }
            </div>

            {
                user && <div title={user?.displayName} className="dropdown   dropdown-end ms-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.photoURL} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 overflow-auto rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <div className="justify-between font-semibold">
                                {user?.displayName}
                            </div>
                        </li>
                        <li className=''>
                            <div className="justify-between  font-semibold">
                                {user?.email}
                            </div>
                        </li>
                        {/* <li><a>Settings</a></li> */}
                        <li>
                            <button className='font-bold' onClick={handleLogOutUser}>
                                <LogOut /> Signout
                            </button>
                        </li>
                    </ul>
                </div>
            }





        </div >
    );
};

export default Navbar;