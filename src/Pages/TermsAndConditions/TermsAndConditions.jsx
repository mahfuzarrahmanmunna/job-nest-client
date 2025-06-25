import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import usePageTitle from '../../Hooks/usePageTitle';
// import termsAnimation from './termsAnimation.json';
import { Link } from 'react-router';

const TermsAndConditions = () => {
    usePageTitle();

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
            {/* Banner Section */}
            <div className="bg-indigo-600 py-12 text-center text-white shadow-lg">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Terms & Conditions
                </motion.h1>
                <p className="mt-4 text-lg md:text-xl">
                    Please read these terms and conditions carefully before using our platform.
                </p>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-white dark:bg-gray-800 shadow-md py-4">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-white">
                        JobNest
                    </Link>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-600">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-600">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="px-4 lg:px-24 py-12">
                {/* Terms Section */}
                <div className="bg-white dark:bg-gray-800 border rounded-2xl shadow-lg p-8">
                    {/* Animated Header */}
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold text-center mb-6 text-indigo-600"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typewriter
                            words={['Terms & Conditions']}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </motion.h1>

                    {/* Lottie Animation (Optional) */}
                    <div className="max-w-sm mx-auto mb-10">
                        {/* <Lottie animationData={termsAnimation} loop={true} /> */}
                    </div>

                    {/* Sections */}
                    <div className="space-y-8 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className='border p-6 rounded-2xl border-indigo-200'
                        >
                            <h2 className="text-xl font-semibold text-primary">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using our platform, you agree to comply with and be bound by these terms and conditions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className='border p-6 rounded-2xl border-indigo-200'
                        >
                            <h2 className="text-xl font-semibold text-primary">
                                2. User Obligations{' '}
                                <span
                                    data-tooltip-id="user-obligations"
                                    data-tooltip-content="Rules and responsibilities you must follow"
                                    className="text-sm underline cursor-help text-indigo-400"
                                >
                                    (?)
                                </span>
                            </h2>
                            <p>
                                Users must provide accurate information, maintain account security, and use the platform lawfully.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className='border p-6 rounded-2xl border-indigo-200'
                        >
                            <h2 className="text-xl font-semibold text-primary">3. Intellectual Property</h2>
                            <p>
                                All content, trademarks, and data on this platform are the property of their respective owners.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className='border p-6 rounded-2xl border-indigo-200'
                        >
                            <h2 className="text-xl font-semibold text-primary">
                                4. Termination{' '}
                                <span
                                    data-tooltip-id="termination"
                                    data-tooltip-content="When we can suspend or close your account"
                                    className="text-sm underline cursor-help text-indigo-400"
                                >
                                    (?)
                                </span>
                            </h2>
                            <p>
                                We reserve the right to suspend or terminate accounts that violate these terms at any time.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='border p-6 rounded-2xl border-indigo-200'
                        >
                            <h2 className="text-xl font-semibold text-primary">5. Contact Us</h2>
                            <p>
                                If you have questions about these terms, please reach out via our contact page.
                            </p>
                        </motion.div>
                    </div>

                    {/* React Tooltips */}
                    <Tooltip id="user-obligations" place="top" />
                    <Tooltip id="termination" place="top" />
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-6 text-center">
                <p>&copy; 2025 JobNest. All Rights Reserved.</p>
                <div className="space-x-4 mt-4">
                    <Link to="/privacy-policy" className="text-indigo-400 hover:text-indigo-500">Privacy Policy</Link>
                    <Link to="/terms-and-conditions" className="text-indigo-400 hover:text-indigo-500">Terms & Conditions</Link>
                </div>
            </footer>
        </div>
    );
};

export default TermsAndConditions;
