import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Lottie from 'lottie-react';
import usePageTitle from '../../Hooks/usePageTitle';

const PrivacyPolicy = () => {
    usePageTitle()
    return (
        <div className='px-4'>
            <div className="bg-indigo-50 lg:mx-24 md:px-12 border rounded-2xl border-indigo-200 dark:bg-gray-800 shadow-sm my-12 text-gray-800 dark:text-gray-200 px-4 py-10">
                {/* Animated Heading */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typewriter
                        words={['Privacy Policy']}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={90}
                        deleteSpeed={50}
                        delaySpeed={1200}
                    />
                </motion.h1>

                {/* Lottie Animation */}
                <div className="max-w-sm mx-auto mb-10">
                    {/* <Lottie animationData={privacyAnimation} loop={true} /> */}
                </div>

                {/* Policy Sections */}
                <div className="max-w-4xl mx-auto space-y-10 text-left">
                    {/* Section 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='border p-6 rounded-2xl border-indigo-200'
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl font-semibold text-primary">1. Information We Collect</h2>
                        <p>
                            We collect personal information such as your name, email address, and{' '}
                            <span
                                className="underline text-indigo-500 cursor-help"
                                data-tooltip-id="cookies"
                                data-tooltip-content="Small files stored in your browser"
                            >
                                cookies
                            </span>{' '}
                            to improve user experience.
                        </p>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='border p-6 rounded-2xl border-indigo-200'
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl font-semibold text-primary">2. How We Use Your Information</h2>
                        <p>
                            Your information is used to provide better services, customize content, and improve security on our platform.
                        </p>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className='border p-6 rounded-2xl border-indigo-200'
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl font-semibold text-primary">
                            3. Sharing of Information{' '}
                            <span
                                className="underline text-indigo-500 cursor-help"
                                data-tooltip-id="third-party"
                                data-tooltip-content="External services we may work with "
                            >
                                (third-party)
                            </span>
                        </h2>
                        <p>
                            We do not sell your personal data. Information may be shared with trusted partners to help us operate our services.
                        </p>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='border p-6 rounded-2xl border-indigo-200'
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl font-semibold text-primary">4. Data Security</h2>
                        <p>
                            We use encryption and industry best practices to protect your information. However, no system is 100% secure.
                        </p>
                    </motion.div>

                    {/* Section 5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='border p-6 rounded-2xl border-indigo-200'
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl font-semibold text-primary">5. Your Choices</h2>
                        <p>
                            You can manage or delete your personal data through your account settings or by contacting us.
                        </p>
                    </motion.div>

                    {/* Section 6 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='border p-6 rounded-2xl border-indigo-200'
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl font-semibold text-primary">6. Contact Us</h2>
                        <p>
                            If you have any concerns about this Privacy Policy, reach out at <a href="mailto:mdmahfuzarrahmanmunna44@gmail.com" className="text-primary text-xs underline">mdmahfuzarrahmanmunna44@gmail.com</a>.
                        </p>
                    </motion.div>
                </div>
                {/* Tooltips */}
                <Tooltip id="cookies" place="top" />
                <Tooltip id="third-party" place="top" />
            </div>
        </div>
    );
};

export default PrivacyPolicy;
