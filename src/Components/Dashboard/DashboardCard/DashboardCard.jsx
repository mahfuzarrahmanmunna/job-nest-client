// src/Components/Dashboard/DashboardCard.jsx

import React from 'react';
import { motion } from 'framer-motion';

const DashboardCard = ({ title, count, icon, color, textColor, index }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.2, duration: 0.6, type: 'spring' },
        },
    };
    console.log(title);
    return (
        <motion.div
            className={`p-6 rounded-2xl shadow-lg text-center bg-gradient-to-br ${color} text-white hover:scale-105 transition-transform duration-300 cursor-pointer`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="mb-4 flex justify-center animate-pulse">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className={`text-4xl font-bold ${textColor} drop-shadow-sm dark:text-white`}>
                {count}
            </p>
        </motion.div>
    );
};

export default DashboardCard;
