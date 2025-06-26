import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Fallback from '../../Components/Fallback/Fallback';
import { BiLike, BiSolidLike } from 'react-icons/bi';

const HighestBidTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/tasks-nest/highest-bid')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch highest bid tasks:', err);
                setLoading(false);
            });
    }, []);
    console.log(tasks);

    if (loading) {
        return (
            <Fallback />
        );
    }

    if (!tasks.length) {
        return (
            <div className="text-center py-20">
                <Sparkles size={48} className="text-indigo-500 dark:text-indigo-400 mb-4 animate-pulse" />
                <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                    No Highest Bid Tasks Found
                </h2>
            </div>
        );
    }

    return (
        <section className=" px-4 md:px-12 my-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary dark:text-white mb-10">
                Highest Bid Tasks
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tasks.map(task => (
                    <motion.div
                        key={task._id}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                    >
                        {task.image && (
                            <div className="overflow-hidden">
                                <img
                                    src={task.image}
                                    alt={task.title}
                                    className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        )}
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-indigo-300 mb-2">
                                {task.title.slice(0, 20)}{task.title.length > 20 && '...'}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Category: {task.category}</p>
                            {task.bids && task.bids.length > 0 && (
                                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                    Highest Bid: ${Math.max(...task.bids.map(b => b.amount || 0))}
                                </p>
                            )}
                            <div className="mt-4 flex justify-between items-center ">
                                <div className='flex items-center gap-1 dark:text-gray-200'>
                                    <BiSolidLike className='text-primary'/> {task.bids}
                                </div>
                                <Link
                                    to={`/dashboard/browse-tasks/${task._id}`}
                                    className="btn btn-primary btn-sm text-white px-4 py-2 rounded hover:btn-outline"
                                >
                                    View / Bid
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HighestBidTasks;
