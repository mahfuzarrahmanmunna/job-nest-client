import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import usePageTitle from '../../Hooks/usePageTitle';
import HeroSection from './HeroSection';
import Featured from './Featured';
import HighestBidTasks from './HighestBidTasks';
import TopCategory from './TopCategory';
import BlogsSection from './BlogsSection';
import Faqs from './Faqs';
import WhyChose from './WhyChose';
import SuccessStories from './SuccessStories';
import HowItWorks from './HowItWorks';
import PlatformStats from './PlatformStats';
import JoinUsSection from './JoinUsSection';
import Fallback from '../../Components/Fallback/Fallback';
import { useLoaderData } from 'react-router-dom';

const sectionAnim = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: false, amount: 0.2 },
};

const Home = () => {
    usePageTitle();
    const featured = useLoaderData();

    if (!featured) return <Fallback />;

    return (
        <div className="min-h-screen text-center">
            <HeroSection />

            {/* Banner Slider */}
            <section className="px-4 md:px-8 lg:px-12 mt-16">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="max-w-5xl mx-auto rounded-xl overflow-hidden"
                >
                    <SwiperSlide className="px-6 bg-blue-200 p-10 h-full text-xl font-semibold">
                        Find Top Freelancers Fast
                    </SwiperSlide>
                    <SwiperSlide className="bg-purple-200 h-full py-10 px-2 lg:text-xl font-semibold">
                        Post Your Task and Get Proposals
                    </SwiperSlide>
                    <SwiperSlide className="px-6 bg-teal-200 h-full p-10 text-xl font-semibold">
                        Build Your Career with Us
                    </SwiperSlide>
                </Swiper>
            </section>

            <div className="space-y-16 px-4 md:px-8 lg:px-12 py-16">
                <motion.section {...sectionAnim}>
                    <h2 className="text-3xl font-bold text-primary mb-16 dark:text-white">Featured Tasks</h2>
                    <Featured featured={featured} />
                </motion.section>

                <motion.section {...sectionAnim}>
                    <HighestBidTasks />
                </motion.section>

                <motion.section {...sectionAnim}>
                    <TopCategory />
                </motion.section>

                <motion.section {...sectionAnim}>
                    <BlogsSection />
                </motion.section>

                <motion.section {...sectionAnim} className="lg:flex justify-between">
                    <div className="w-full lg:w-1/3 flex justify-center">
                        <iframe
                            className="h-96 w-96"
                            src="https://lottie.host/embed/17e8227c-a3c9-4716-88bd-d705ca67a4b8/BdpkybsETt.lottie"
                            title="FAQs Animation"
                        ></iframe>
                    </div>
                    <div className="space-y-4 max-w-4xl mx-auto mt-8 lg:mt-0">
                        <Faqs />
                    </div>
                </motion.section>

                <motion.section {...sectionAnim}>
                    <WhyChose />
                </motion.section>

                <motion.section {...sectionAnim}>
                    <SuccessStories />
                </motion.section>

                <motion.section {...sectionAnim}>
                    <HowItWorks />
                </motion.section>

                <motion.section {...sectionAnim}>
                    <PlatformStats />
                </motion.section>

                <motion.section {...sectionAnim} className="bg-white dark:bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl py-12">
                    <div className="max-w-4xl mx-auto text-center px-2">
                        <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Our Mission</h2>
                        <p className="text-gray-600 dark:text-gray-100 text-lg">
                            To empower freelancers and employers by creating a safe, efficient, and fair digital workspace where skills and opportunities meet.
                        </p>
                    </div>
                </motion.section>

                <motion.section {...sectionAnim}>
                    <JoinUsSection />
                </motion.section>
            </div>
        </div>
    );
};

export default Home;
