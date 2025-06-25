import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from 'react-router';

const Featured = ({ featured }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Show the section when it enters the viewport
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef}>
            <div className={`grid md:grid-cols-3 gap-6 max-w-6xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {featured && featured.length > 0 ? (
                    featured.map(task => (
                        <Link to={`/browse-tasks/${task._id}`} key={task._id}>
                            <motion.div
                                className="bg-white dark:bg-neutral-600 p-6 rounded-2xl shadow-lg text-left border border-gray-200 dark:border-neutral-500 hover:shadow-xl transition lg:w-[356px] lg:h-[241px] md:h-[296px]"
                                whileHover={{ scale: 1.03, transition: { duration: 0.8 } }}
                            >
                                <h3 className="text-xl font-bold md:text-base lg:text-xl sm:text-sm text-primary dark:text-neutral-200 mb-2">
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
                        </Link>
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
        </div>
    );
};

export default Featured;
