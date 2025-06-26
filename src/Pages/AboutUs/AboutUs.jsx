import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, ShieldCheck, Globe } from 'lucide-react';
import usePageTitle from '../../Hooks/usePageTitle';

const AboutUs = () => {
    usePageTitle()
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-12 py-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-primary mb-4">About JobNest</h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    JobNest is a modern freelancing task marketplace designed to connect clients with talented freelancers
                    for short-term projects and task-based work. Our mission is to simplify collaboration, boost productivity,
                    and empower professionals with real opportunities.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
                >
                    <div className="flex items-center gap-4 mb-4 text-blue-600 dark:text-blue-400">
                        <Briefcase size={32} />
                        <h3 className="text-xl font-semibold">Why JobNest?</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                        We created JobNest to bridge the gap between demand and talent. Whether you're a startup needing quick help or a freelancer looking to build a portfolio, JobNest offers a flexible, secure platform for getting work done.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
                >
                    <div className="flex items-center gap-4 mb-4 text-green-600 dark:text-green-400">
                        <Users size={32} />
                        <h3 className="text-xl font-semibold">Who We Serve</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                        We serve both clients and freelancers. Clients post short-term tasks, and freelancers browse and apply with bids. Our platform supports everything from design to development and everything in between.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
                >
                    <div className="flex items-center gap-4 mb-4 text-purple-600 dark:text-purple-400">
                        <ShieldCheck size={32} />
                        <h3 className="text-xl font-semibold">Secure & Reliable</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                        Backed by Firebase Authentication, encrypted APIs, and a robust backend using Express & MongoDB, JobNest ensures data safety and smooth task management across devices.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
                >
                    <div className="flex items-center gap-4 mb-4 text-orange-600 dark:text-orange-400">
                        <Globe size={32} />
                        <h3 className="text-xl font-semibold">Global Reach</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                        Whether you're in Dhaka, Delhi, or Dallas — JobNest lets you connect with skilled freelancers or clients from anywhere. Grow your professional network across borders.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
