import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import usePageTitle from '../../Hooks/usePageTitle';
import { Link } from 'react-router';

const TermsAndConditions = () => {
    usePageTitle();

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
            {/* Banner Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-14 text-center text-white shadow-md">
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold tracking-tight"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Terms & Conditions
                </motion.h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    Please review our terms and conditions to understand your responsibilities and our policies.
                </p>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-white dark:bg-gray-800 shadow py-4 sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-white">
                        JobNest
                    </Link>
                    <ul className="flex space-x-6 text-sm md:text-base">
                        <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
                        <li><Link to="/about" className="hover:text-indigo-600">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-indigo-600">Contact</Link></li>
                    </ul>
                </div>
            </nav>

            <div className="px-4 lg:px-24 py-16">
                <div className="bg-white dark:bg-gray-800 border rounded-2xl shadow-md p-8 md:p-12">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold text-center mb-10 text-indigo-600"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typewriter
                            words={["Terms & Conditions"]}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </motion.h1>

                    <div className="space-y-10">
                        {[{
                            title: '1. Acceptance of Terms',
                            content: 'By accessing and using our platform, you agree to comply with and be bound by these terms and conditions.'
                        }, {
                            title: '2. User Obligations',
                            tooltip: 'Rules and responsibilities you must follow',
                            content: 'Users must provide accurate information, maintain account security, and use the platform lawfully.'
                        }, {
                            title: '3. Intellectual Property',
                            content: 'All content, trademarks, and data on this platform are the property of their respective owners.'
                        }, {
                            title: '4. Termination',
                            tooltip: 'When we can suspend or close your account',
                            content: 'We reserve the right to suspend or terminate accounts that violate these terms at any time.'
                        }, {
                            title: '5. Contact Us',
                            content: 'If you have questions about these terms, please reach out via our contact page.'
                        }].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="border p-6 rounded-2xl border-indigo-200 dark:border-indigo-600 bg-white dark:bg-gray-900 shadow-sm"
                            >
                                <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
                                    {item.title}
                                    {item.tooltip && (
                                        <span
                                            data-tooltip-id={`tooltip-${idx}`}
                                            data-tooltip-content={item.tooltip}
                                            className="text-sm underline ml-2 cursor-help text-indigo-400"
                                        >
                                            (?)
                                        </span>
                                    )}
                                </h2>
                                <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {item.content}
                                </p>
                                {item.tooltip && <Tooltip id={`tooltip-${idx}`} place="top" />}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="bg-gray-800 text-white py-6 text-center">
                <p>&copy; 2025 JobNest. All Rights Reserved.</p>
                <div className="space-x-4 mt-2">
                    <Link to="/privacy-policy" className="text-indigo-400 hover:text-indigo-500">Privacy Policy</Link>
                    <Link to="/terms-and-conditions" className="text-indigo-400 hover:text-indigo-500">Terms & Conditions</Link>
                </div>
            </footer>
        </div>
    );
};

export default TermsAndConditions;