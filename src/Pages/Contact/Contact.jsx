import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { BsSendFill } from 'react-icons/bs';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 md:px-16 lg:px-24">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 dark:text-white mb-4">
                    Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
            </motion.div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Side - Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="flex items-start gap-6">
                        <FaMapMarkerAlt className="text-3xl text-indigo-600 dark:text-indigo-400" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Office Address</h4>
                            <p className="text-gray-600 dark:text-gray-300">123 Innovation Street, Tech City, BD</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <FaPhoneAlt className="text-2xl text-indigo-600 dark:text-indigo-400" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Call Us</h4>
                            <p className="text-gray-600 dark:text-gray-300">+880 1234 567 890</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <FaEnvelope className="text-2xl text-indigo-600 dark:text-indigo-400" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h4>
                            <p className="text-gray-600 dark:text-gray-300">support@yourdomain.com</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md space-y-6"
                >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="flex items-center gap-2 justify-center w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition"
                    >
                        <BsSendFill /> Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
