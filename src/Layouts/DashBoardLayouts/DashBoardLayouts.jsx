import React, { useEffect, useState, useContext } from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { Outlet, NavLink, Link } from 'react-router';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';

const DashBoardLayouts = () => {
    const { user } = useContext(AuthContext);
    const [totalTasks, setTotalTasks] = useState(0);
    const [myTasks, setMyTasks] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        axios.get('https://freelance-task-marketplace-server.vercel.app/tasks-nest')
            .then(res => {
                setTotalTasks(res.data.length);
                const userTasks = res.data.filter(task => task.email === user?.email);
                setMyTasks(userTasks.length);
            });
        axios.get('https://freelance-task-marketplace-server.vercel.app/users')
            .then(res => setTotalUsers(res.data.length));
    }, [user?.email]);

    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-gray-100 dark:bg-gray-900 p-6">
                <Link to='/' className='flex items-center mb-6'>
                    <BiLeftArrow />
                    <img src="https://i.ibb.co/4gFKt7dG/Chat-GPT-Image-Jun-25-2025-10-13-36-PMcopy.png" alt="Logo" className="ml-2 w-24" />
                </Link>
                <h2 className="text-xl font-bold mb-6">📊 Dashboard</h2>
                <ul className="space-y-4 font-medium">
                    <li>
                        <NavLink to="/dashboard/add-task" className={({ isActive }) => isActive ? "underline text-primary" : "text-gray-600 dark:text-white"}>
                            Add Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/browse-tasks" className={({ isActive }) => isActive ? "underline text-primary" : "text-gray-600 dark:text-white"}>
                            Browse All Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/my-posted-tasks" className={({ isActive }) => isActive ? "underline text-primary" : "text-gray-600 dark:text-white"}>
                            My Posted Task
                        </NavLink>
                    </li>
                </ul>
            </aside>

            <main className="flex-1 p-6 bg-white dark:bg-gray-800">
                {/* 🔥 Stats Always Visible */}
                <h2 className="text-3xl font-bold mb-8">👋 Welcome, {user?.displayName || "User"}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

                    <div className="bg-blue-100 dark:bg-blue-800 p-6 rounded-lg shadow text-center">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Total Tasks</h3>
                        <p className="text-4xl font-bold text-blue-700 dark:text-white">{totalTasks}</p>
                    </div>

                    <div className="bg-green-100 dark:bg-green-800 p-6 rounded-lg shadow text-center">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">My Tasks</h3>
                        <p className="text-4xl font-bold text-green-700 dark:text-white">{myTasks}</p>
                    </div>

                    <div className="bg-purple-100 dark:bg-purple-800 p-6 rounded-lg shadow text-center">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Total Users</h3>
                        <p className="text-4xl font-bold text-purple-700 dark:text-white">{totalUsers}</p>
                    </div>
                </div>

                {/* Render Child Page Content */}
                <Outlet />
            </main>
        </div>
    );
};

export default DashBoardLayouts;
