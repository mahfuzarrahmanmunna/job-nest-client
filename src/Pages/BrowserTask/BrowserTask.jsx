import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import TaskTable from './TaskTable';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { motion } from 'framer-motion';
import usePageTitle from '../../Hooks/usePageTitle';
import Fallback from '../../Components/Fallback/Fallback';
import { FaList, FaTh } from 'react-icons/fa';

const BrowserTask = () => {
    usePageTitle();
    const tasks = useLoaderData();
    const [viewType, setViewType] = useState('table'); // table or card

    if (!tasks) return <Fallback />;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl"
        >
            {/* Section Title with Typewriter */}
            <Fade direction="up" cascade damping={0.1}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 dark:text-indigo-400">
                        <Typewriter
                            words={['Available Freelance Tasks', 'Browse and Bid Now']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h2>

                    {/* Toggle View Button */}
                    <button
                        onClick={() => setViewType(viewType === 'table' ? 'card' : 'table')}
                        className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition-all duration-300"
                    >
                        {viewType === 'table' ? <FaTh /> : <FaList />}
                        {viewType === 'table' ? 'Card View' : 'Table View'}
                    </button>
                </div>
            </Fade>

            {/* Conditional Rendering */}
            <Fade direction="down" triggerOnce>
                {viewType === 'table' ? (
                    <div className="overflow-x-auto rounded border border-indigo-200 dark:border-indigo-600 bg-white dark:bg-gray-800 shadow">
                        <table className="min-w-full table-auto border-collapse text-sm md:text-base">
                            <thead className="bg-indigo-100 dark:bg-indigo-700 text-indigo-900 dark:text-white font-semibold">
                                <tr>
                                    <th className="px-6 py-3 border dark:border-indigo-600 text-center">#</th>
                                    <th className="px-6 py-3 border dark:border-indigo-600 text-center">Name</th>
                                    <th className="px-6 py-3 border dark:border-indigo-600 text-center">Title</th>
                                    <th className="px-6 py-3 border dark:border-indigo-600 text-center">Category</th>
                                    <th className="px-6 py-3 border dark:border-indigo-600 text-center">
                                        Action
                                        <span
                                            data-tooltip-id="action-tooltip"
                                            data-tooltip-content="View Details / Place Bid"
                                            className="ml-2 text-indigo-500 cursor-help"
                                        >
                                            🛈
                                        </span>
                                        <Tooltip id="action-tooltip" place="top" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {tasks.map((task, index) => (
                                    <TaskTable key={task._id} task={task} index={index} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    // Card View
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tasks.map((task, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 border border-indigo-200 dark:border-indigo-600 rounded-lg p-4 shadow hover:shadow-lg transition-all">
                                <h3 className="text-lg font-bold text-primary dark:text-indigo-300">{task.title.slice(0, 30)}...</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">By: {task.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Category: {task.category}</p>
                                <div className="mt-4">
                                    <Link to={`/dashboard/browse-tasks/${task._id}`} className="btn btn-primary text-white px-4 py-2 rounded hover:bg-indigo-700">
                                        View / Bid
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Fade>
        </motion.div>
    );
};

export default BrowserTask;
