import React from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle, FaInfoCircle, FaBug, FaHeadset } from 'react-icons/fa';

const Support = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 md:px-16 py-16 lg:px-24">
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-white mb-4">
                    We're Here to Help
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Find answers to common questions, submit a request, or contact support. We're committed to helping you resolve any issue.
                </p>
            </motion.div>

            {/* Support Options */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, when: 'beforeChildren', staggerChildren: 0.3 },
                    },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {[
                    {
                        title: 'FAQs',
                        desc: 'Find answers to frequently asked questions and learn more about our services.',
                        icon: <FaQuestionCircle size={40} />,
                    },
                    {
                        title: 'Technical Support',
                        desc: 'Having issues with a feature or bug? Our tech team is here to assist.',
                        icon: <FaBug size={40} />,
                    },
                    {
                        title: 'Live Chat',
                        desc: 'Talk with our support agent directly through real-time chat support.',
                        icon: <FaHeadset size={40} />,
                    },
                    {
                        title: 'Submit a Ticket',
                        desc: 'Didn’t find what you’re looking for? Submit a detailed support request.',
                        icon: <FaInfoCircle size={40} />,
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1"
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="text-indigo-600 dark:text-indigo-400 mb-4 flex justify-center animate-pulse">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-center">{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Help Form */}
            <div className='md:flex gap-8 justify-between items-center mt-20'>
                <div className='md:w-1/3'>
                    <figure>
                        <img src="https://i.ibb.co/hR7ChDv5/pexels-mikhail-nilov-7534385-removebg-preview.png" alt="" />
                    </figure>
                </div>
                <div className=" bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md max-w-4xl md:w-2/3">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                        Still Need Help? Contact Us
                    </h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Doe"
                                    className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                            <input
                                type="text"
                                placeholder="Describe your issue briefly"
                                className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition"
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Support;