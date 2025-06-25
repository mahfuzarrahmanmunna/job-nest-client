import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Lottie from 'lottie-react';
import usePageTitle from '../../Hooks/usePageTitle';
// import termsAnimation from './termsAnimation.json';

const TermsAndConditions = () => {
    usePageTitle()
    return (
        <div className='px-4'>
            <div className="bg-indigo-50 dark:bg-gray-800 lg:mx-24 md:px-12 border rounded-2xl border-indigo-200 shadow-sm my-12 text-gray-800 dark:text-gray-200 px-4 py-10">
                {/* Animated Header */}
                <motion.h1
                    className="text-2xl md:text-5xl font-bold text-center mb-6 text-primary"
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

                {/* Lottie Animation */}
                <div className="max-w-sm mx-auto mb-10">
                    {/* <Lottie animationData={termsAnimation} loop={true} /> */}
                </div>

                {/* Sections */}
                <div className="lg:px-24  mx-auto space-y-8 text-left">
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
    );
};

export default TermsAndConditions;
