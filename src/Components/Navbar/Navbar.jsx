import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { LogIn, LogOut } from 'lucide-react';
import ThemeSwitch from '../../Context/Theme/ThemeSwitch';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

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

    const navLinks = (
        <>
            <li>
                <NavLink to="/" end className={({ isActive }) => isActive ? "underline text-primary font-semibold" : "text-gray-600 dark:text-white"}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/browse-tasks" className={({ isActive }) => isActive ? "underline text-primary font-semibold" : "text-gray-600 dark:text-white"}>All Items</NavLink>
            </li>
            <li>
                <NavLink to="/about-us" className={({ isActive }) => isActive ? "underline text-primary font-semibold" : "text-gray-600 dark:text-white"}>About</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "underline text-primary font-semibold" : "text-gray-600 dark:text-white"}>Contact</NavLink>
            </li>
            <li>
                <NavLink to="/support" className={({ isActive }) => isActive ? "underline text-primary font-semibold" : "text-gray-600 dark:text-white"}>Support</NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "underline text-primary font-semibold" : "text-gray-600 dark:text-white"}>Dashboard</NavLink>
                </li>
            )}
        </>
    );

    return (
        <div className="navbar sticky top-0 z-50 px-4 md:px-12 bg-gray-200 dark:bg-gray-800">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost p-0 lg:hidden  dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 dark:bg-gray-700 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

                <figure>
                    <Link to="/" className=" items-center gap-2 hidden md:flex ">
                        <img src="https://i.ibb.co/4gFKt7dG/Chat-GPT-Image-Jun-25-2025-10-13-36-PMcopy.png" className="w-24 md:w-32 rounded dark:bg-gray-900 " alt="Logo" />
                    </Link>
                </figure>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-2">
                <ThemeSwitch />
                {user ? (
                    <>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt="user" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 dark:bg-gray-700 rounded-box w-52">
                                <li><span className="font-bold dark:text-base-100">{user.displayName}</span></li>
                                <li><span className="text-xs break-all dark:text-base-100">{user.email}</span></li>
                                <li><button onClick={handleLogOutUser} className='dark:text-base-100'><LogOut className="mr-2 " size={18} /> Logout</button></li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <Link to="/sign-up" className="btn btn-primary btn-sm lg:btn-md">
                        <LogIn className="mr-1" size={18} /> Sign Up
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
