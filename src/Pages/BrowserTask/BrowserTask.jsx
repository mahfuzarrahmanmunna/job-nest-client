import React from 'react';
import { useLoaderData } from 'react-router';
import TaskTable from './TaskTable';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { motion } from 'framer-motion';
import usePageTitle from '../../Hooks/usePageTitle';
import Fallback from '../../Components/Fallback/Fallback';


const BrowserTask = () => {
    usePageTitle()
    const tasks = useLoaderData();
    if (!tasks) {
        return <Fallback />
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:mx-24 md:mx-12 mx-4 border lg:px-16 md:px-10 px-4 py-12 my-12 rounded-2xl border-indigo-200 shadow"
        >
            {/* Section Title with Typewriter */}
            <Fade direction="up" cascade damping={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-indigo-700 dark:text-indigo-400">
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
            </Fade>

            {/* Task Table */}
            <Fade direction="down" triggerOnce>
                <div className="overflow-x-auto rounded-xl border border-indigo-200 dark:border-indigo-600 bg-white dark:bg-gray-800 shadow-xl">
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
                                    >🛈</span>
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
            </Fade>
        </motion.div>
    );
};

export default BrowserTask;
