// src/Components/Dashboard/RecentActivity.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaClock } from 'react-icons/fa';

const RecentActivity = ({ activities }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 my-12 rounded-2xl shadow-md"
        >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
                <FaClock className="text-indigo-500" /> Recent Activity
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {activities.length > 0 ? (
                    activities.map((activity, idx) => (
                        <li
                            key={idx}
                            className="border-b border-gray-200 dark:border-gray-700 pb-2"
                        >
                            <strong>{activity.title}</strong> — {activity.category} <br />
                            <span className="text-sm text-gray-500 dark:text-gray-400">{activity.time}</span>
                        </li>
                    ))
                ) : (
                    <p>No recent activity found.</p>
                )}
            </ul>
        </motion.div>
    );
};

export default RecentActivity;
