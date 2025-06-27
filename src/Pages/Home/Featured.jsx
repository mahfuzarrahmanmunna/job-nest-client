import React, { useState, useRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom'; // ✅ CORRECT import
import { AuthContext } from '../../Context/AuthContext';
import Fallback from '../../Components/Fallback/Fallback';

const Featured = ({ featured }) => {
    const [isVisible] = useState(true); // Always visible
    const sectionRef = useRef(null);
    const { loading } = useContext(AuthContext);

    console.log('FEATURED:', featured); // ✅ Debugging

    const sortedTasks = [...(featured || [])].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    if (loading) return <Fallback />;

    return (
        <div
            ref={sectionRef}
            className="z-10 relative"
        >
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                {sortedTasks.length > 0 ? (
                    sortedTasks.map((task) => (
                        <Link
                            to={`/dashboard/browse-tasks/${task._id}`}
                            key={task._id}
                        >
                            <motion.div
                                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                            >
                                {task.image && (
                                    <div className="overflow-hidden h-48">
                                        <img
                                            src={task.image}
                                            alt={task.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                )}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-primary dark:text-indigo-300 mb-1">
                                        {task.title.slice(0, 30)}...
                                    </h3>
                                    <h4 className="text-sm font-medium text-indigo-500 dark:text-indigo-400 mb-2">
                                        {task.category}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                                        {task.description.slice(0, 80)}...
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Deadline: {new Date(task.formateDate).toLocaleDateString()}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-3">
                        <motion.div
                            className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-dashed border-gray-300 dark:border-neutral-500 rounded-2xl p-8 shadow-inner text-center flex flex-col items-center justify-center space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Sparkles size={48} className="text-indigo-500 dark:text-indigo-400 animate-pulse" />
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">
                                No Featured Tasks
                            </h2>
                            <p className="text-gray-500 dark:text-gray-300 max-w-sm">
                                There are currently no featured tasks available. Please check back later or explore other categories.
                            </p>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Featured;
