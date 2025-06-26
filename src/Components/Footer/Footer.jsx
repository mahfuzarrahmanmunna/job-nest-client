import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-base-300 dark:bg-gray-900 text-base-content dark:text-gray-300 py-10 border-t border-gray-300 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">

                {/* Logo & Name */}
                <div>
                    <div className="flex items-center space-x-3">
                        <img src="https://i.ibb.co/0ytx8RG4/job-nest-freelance-web-site-logo-job.png" alt="Logo" className="w-14 h-10 rounded-xl" />
                        <span className="text-2xl font-bold text-primary">Job Nest</span>
                    </div>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                        A trusted platform to post and find freelance tasks easily.
                    </p>
                </div>

                {/* Contact Details */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
                    <ul className="space-y-1 text-sm">
                        <li>Email: <a href="mailto:mdmahfuzarrahmanmunna44@gmail.com" className="link-hover">mdmahfuzarrahmanmunna44@gmail.com</a></li>
                        <li>Phone: +88 01314181695</li>
                        <li>Address: Payrabando, Mithapukur, Rangpur</li>
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Legal</h2>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
                        <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/profile.php?id=61558381851640" target="_blank" rel="noreferrer">
                            <FaFacebook size={22} className="hover:text-blue-600 transition-colors" />
                        </a>
                        <a href="https://x.com/mahfuzar_m35559" target="_blank" rel="noreferrer">
                            <BsTwitter size={22} className="hover:text-blue-400 transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/md-mahfuzar-rahman-munna-41a342351/" target="_blank" rel="noreferrer">
                            <FaLinkedin size={22} className="hover:text-blue-500 transition-colors" />
                        </a>
                        <a href="https://github.com/mahfuzarrahmanmunna" target="_blank" rel="noreferrer">
                            <FaGithub size={22} className="hover:text-gray-500 transition-colors" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10 border-t pt-4 border-gray-300 dark:border-gray-700">
                <p>© {new Date().getFullYear()} Job Nest. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

