import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { BsSendFill } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // ⬅ Add at top if not already
import usePageTitle from '../../Hooks/usePageTitle';

const Contact = () => {
    usePageTitle()
    return (
        <div className="min-h-screen py-16 px-4 md:px-16">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-2xl md:text-4xl font-bold text-primary dark:text-white mb-4">
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
                        <FaMapMarkerAlt className="text-3xl text-primary dark:text-primary" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Office Address</h4>
                            <p className="text-gray-600 dark:text-gray-300">123 Innovation Street, Tech City, BD</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <FaPhoneAlt className="text-2xl text-primary dark:text-primary" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Call Us</h4>
                            <p className="text-gray-600 dark:text-gray-300">+880 1234 567 890</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <FaEnvelope className="text-2xl text-primary dark:text-primary" />
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h4>
                            <p className="text-gray-600 dark:text-gray-300">support@yourdomain.com</p>
                        </div>
                    </div>
                    {/* Left Side - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Address, Phone, Email (already here) */}

                        {/* Social Icons */}
                        <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                                Follow Us
                            </h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61558381851640"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-indigo-100 dark:bg-primary text-primary dark:text-white rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-500 transition"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://x.com/mahfuzar_m35559"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-indigo-100 dark:bg-primary text-primary dark:text-white rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-500 transition"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/md-mahfuzar-rahman-munna-41a342351/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-indigo-100 dark:bg-primary text-primary dark:text-white rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-500 transition"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>
                                <a
                                    href="https://www.instagram.com/md.mahfuzarrahmanmunna/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-indigo-100 dark:bg-primary text-primary dark:text-white rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-500 transition"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </motion.div>
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
                        className="flex items-center gap-2 justify-center w-full py-3 px-6 bg-primary hover:bg-indigo-700 text-white rounded-lg font-semibold transition"
                    >
                        <BsSendFill /> Send Message
                    </button>
                </motion.form>
            </div>


        </div>
    );
};

export default Contact;
