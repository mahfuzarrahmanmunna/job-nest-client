import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import { motion } from 'framer-motion';
import { FaRegHandPaper, FaTasks, FaUserCheck, FaUsers } from 'react-icons/fa'; // You can replace with lucide icons if preferred

const DashboardHome = () => {
    const { user } = use(AuthContext);
    const [totalTasks, setTotalTasks] = useState(0);
    const [myTasks, setMyTasks] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        axios.get('https://freelance-task-marketplace-server.vercel.app/tasks-nest')
            .then(res => {
                setTotalTasks(res.data.length);
                const userTasks = res.data.filter(task => task.email === user?.email);
                setMyTasks(userTasks.length);
            })
            .catch(err => console.error(err));

        axios.get('https://freelance-task-marketplace-server.vercel.app/users')
            .then(res => setTotalUsers(res.data.length))
            .catch(err => console.error(err));
    }, [user?.email]);

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, type: 'spring' },
        }),
    };

    return (
        <div className="min-h-screen  transition-all">
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className='flex md:justify-center text-left items-center '>
                    <motion.span
                        className="inline-block text-4xl md:text-5xl"
                        animate={{ rotate: [0, 20, -20, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    >
                        <FaRegHandPaper className="text-yellow-500 mt-3" size={30} />
                    </motion.span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-white">
                        Welcome, <span className="text-blue-600 dark:text-blue-300">{user?.displayName || "User"}</span>
                    </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Here is your dashboard summary</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        title: "Total Tasks",
                        count: totalTasks,
                        icon: <FaTasks size={40} />,
                        color: "from-blue-400 to-blue-600",
                        textColor: "text-blue-800",
                    },
                    {
                        title: "My Tasks",
                        count: myTasks,
                        icon: <FaUserCheck size={40} />,
                        color: "from-green-400 to-green-600",
                        textColor: "text-green-800",
                    },
                    {
                        title: "Total Users",
                        count: totalUsers,
                        icon: <FaUsers size={40} />,
                        color: "from-purple-400 to-purple-600",
                        textColor: "text-purple-800",
                    },
                ].map((card, i) => (
                    <motion.div
                        key={card.title}
                        className={`p-6 rounded-2xl shadow-lg text-center bg-gradient-to-br ${card.color} text-white hover:scale-105 transition-transform duration-300 cursor-pointer`}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="mb-4 flex justify-center animate-pulse">{card.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                        <p className={`text-4xl font-bold ${card.textColor} drop-shadow-sm dark:text-white`}>
                            {card.count}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default DashboardHome;
