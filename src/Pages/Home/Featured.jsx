import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Featured = ({ featured }) => {
    return (

        <Fade direction="down" cascade damping={0.1}>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {featured && featured.length > 0 ? (
                    featured.map(task => (
                        <Fade direction="left" key={task._id}>
                            <motion.div
                                className="bg-white dark:bg-neutral-600 p-6 rounded-2xl shadow-lg text-left border border-gray-200 dark:border-neutral-500 hover:shadow-xl transition lg:w-[356px] lg:h-[241px]  md:h-[296px]"
                                whileHover={{ scale: 1.03 }}
                            >
                                <h3 className="text-xl font-bold md:text-base lg:text-xl md:text-sm text-primary dark:text-neutral-200 mb-2">
                                    {task?.title.slice(0, 50)}...
                                </h3>
                                <h4 className="text-md font-semibold text-indigo-400 dark:text-gray-300 mb-2">{task?.category}</h4>
                                <p className="text-gray-600 text-sm dark:text-gray-300 mb-2">
                                    {task?.description.slice(0, 100)}...
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-50">
                                    Deadline: {new Date(task?.formateDate).toLocaleDateString()}
                                </p>
                            </motion.div>
                        </Fade>
                    ))
                ) : (
                    <div className="col-span-3 w-full">
                        <motion.div
                            className="bg-gradient-to-r col-span-3 from-white to-gray-100 dark:from-neutral-700 dark:to-neutral-800 border border-dashed border-gray-300 dark:border-neutral-500 rounded-2xl p-8 shadow-inner text-center flex flex-col items-center justify-center space-y-4"
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
        </Fade>

    );
};

export default Featured;
