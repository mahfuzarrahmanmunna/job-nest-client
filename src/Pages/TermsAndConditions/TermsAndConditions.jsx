import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Lottie from 'lottie-react';
import usePageTitle from '../../Hooks/usePageTitle';
// import privacyAnimation from './privacyAnimation.json';

const PrivacyPolicy = () => {
    usePageTitle();

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen py-12 px-4 md:px-10 lg:px-24">
            {/* Banner Section */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl p-10 shadow-xl text-center mb-10">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold"
                    initial={{ opacity: 0, y: -30 }}
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
                <p className="text-lg mt-4 max-w-3xl mx-auto">
                    Understand how we handle your data and protect your privacy while using the JobNest platform.
                </p>
            </div>

            {/* Lottie Animation */}
            {/* <div className="max-w-xs mx-auto mb-10">
                <Lottie animationData={privacyAnimation} loop={true} />
            </div> */}

            {/* Policy Sections */}
            <div className="max-w-5xl mx-auto space-y-10">
                {[
                    {
                        title: '1. Information We Collect',
                        content: `We collect personal information such as your name, email address, and ` +
                            `<span class='underline text-indigo-500 cursor-help' data-tooltip-id='cookies' data-tooltip-content='Small files stored in your browser'>cookies</span> to improve user experience.`
                    },
                    {
                        title: '2. How We Use Your Information',
                        content: 'Your information is used to provide better services, customize content, and improve security on our platform.'
                    },
                    {
                        title: '3. Sharing of Information (third-party)',
                        content: `We do not sell your personal data. Information may be shared with ` +
                            `<span class='underline text-indigo-500 cursor-help' data-tooltip-id='third-party' data-tooltip-content='External services we may work with'>trusted partners</span> to help us operate our services.`
                    },
                    {
                        title: '4. Data Security',
                        content: 'We use encryption and industry best practices to protect your information. However, no system is 100% secure.'
                    },
                    {
                        title: '5. Your Choices',
                        content: 'You can manage or delete your personal data through your account settings or by contacting us.'
                    },
                    {
                        title: '6. Contact Us',
                        content: `If you have any concerns about this Privacy Policy, reach out at ` +
                            `<a href="mailto:mdmahfuzarrahmanmunna44@gmail.com" class="text-primary text-sm underline">mdmahfuzarrahmanmunna44@gmail.com</a>.`
                    }
                ].map((section, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="border border-indigo-200 dark:border-indigo-500 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md"
                    >
                        <h2 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2" dangerouslySetInnerHTML={{ __html: section.title }} />
                        <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
                    </motion.div>
                ))}
            </div>

            {/* Tooltips */}
            <Tooltip id="cookies" place="top" />
            <Tooltip id="third-party" place="top" />

            {/* Footer */}
            <footer className="mt-20 text-center text-sm text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} JobNest. All rights reserved.
            </footer>
        </div>
    );
};

export default PrivacyPolicy;
