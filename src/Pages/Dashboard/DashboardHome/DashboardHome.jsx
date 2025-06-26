import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthContext';
import { motion } from 'framer-motion';
import { FaRegHandPaper, FaTasks, FaUserCheck, FaUsers } from 'react-icons/fa';
import DashboardCard from '../../../Components/Dashboard/DashboardCard/DashboardCard';
import RecentActivity from '../../../Components/Dashboard/RecentActivity/RecentActivity';

const DashboardHome = () => {
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
            })
            .catch(err => console.error(err));

        axios.get('https://freelance-task-marketplace-server.vercel.app/users')
            .then(res => setTotalUsers(res.data.length))
            .catch(err => console.error(err));
    }, [user?.email]);

    const cards = [
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
    ];

    return (
        <div className="min-h-screen transition-all">
            {/* Welcome Section */}
            <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className='md:flex md:justify-center md:text-left items-center '>
                    <motion.span
                        className="md:inline-block flex justify-center text-4xl md:text-5xl"
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

            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <DashboardCard
                        key={card.title}
                        title={card.title}
                        count={card.count}
                        icon={card.icon}
                        color={card.color}
                        textColor={card.textColor}
                        index={index}
                    />
                ))}
            </div>

            {/* Recent Activity Section */}
            <RecentActivity
                activities={[
                    {
                        title: 'Posted "Build Portfolio Website"',
                        category: 'Web Development',
                        time: '2 hours ago',
                    },
                    {
                        title: 'Bid on "React Dashboard Design"',
                        category: 'Frontend',
                        time: '5 hours ago',
                    },
                    {
                        title: 'Joined the platform',
                        category: 'General',
                        time: '1 day ago',
                    },
                ]}
            />
        </div>
    );
};

export default DashboardHome;
