import { Fade } from 'react-awesome-reveal';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import 'swiper/css/pagination';


const WhyChose = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-16">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Fade>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-indigo-50 p-6 dark:bg-gray-700 md:h-[272px] rounded-xl shadow text-center"
                    >
                        <div className="text-5xl mb-4 flex justify-center">
                            <img className='w-12' src="https://i.ibb.co/XZY3YgJ1/2345130.png" alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Trusted Platform</h3>
                        <p className="text-gray-600 dark:text-gray-50">Thousands of freelancers and clients trust us every day.</p>
                    </motion.div>
                </Fade>

                <Fade>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-indigo-50 p-6 dark:bg-gray-700 md:h-[272px] rounded-xl shadow text-center"
                    >
                        <div className="text-5xl mb-4 flex justify-center">
                            <img className='w-12' src="https://i.ibb.co/s9FScT5k/pngtree-lightning-electric-icon-png-image-6486818.png" alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Fast Hiring</h3>
                        <p className="text-gray-600 dark:text-gray-50">Post a task and get proposals within minutes.</p>
                    </motion.div>
                </Fade>

                <Fade>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-indigo-50 p-6 dark:bg-gray-700 md:h-[272px] rounded-xl shadow text-center"
                    >
                        <div className="text-5xl mb-4 flex justify-center">
                            <img src="https://i.ibb.co/nsH9G1CS/1803612.png" className='w-12' alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Secure Payments</h3>
                        <p className="text-gray-600 dark:text-gray-50">Our system ensures secure and on-time payments.</p>
                    </motion.div>
                </Fade>
            </div>
        </div>
    );
};

export default WhyChose;