import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { Link, useLoaderData } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import React, { } from 'react';
import Faqs from './Faqs';
import 'swiper/css/pagination';
import Featured from './Featured';
import HeroSection from './HeroSection';
import TopCategory from './TopCategory';
import WhyChose from './WhyChose';
import usePageTitle from '../../Hooks/usePageTitle';
import JoinUsSection from './JoinUsSection';
import Fallback from '../../Components/Fallback/Fallback';


const Home = () => {
    usePageTitle()
    const featured = useLoaderData()
    if (!featured) {
        return <Fallback />
    }
    // console.log(featured);
    // const sortedTasks = featured?.sort((a, b) => new Date(a?.formateDate) - new Date(b?.formateDate));

    return (
        <div className="min-h-screen text-center  bg-indigo-50 dark:bg-neutral-900 ">
            {/* Hero Section with Background Image Slider */}
            <HeroSection />


            {/* Banner Slider */}
            <section className="my-16 px-4 md:px-8 lg:px-12">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="max-w-5xl mx-auto rounded-xl overflow-hidden"
                >
                    <SwiperSlide className="px-6 bg-blue-200 p-10 h-full text-xl font-semibold">Find Top Freelancers Fast</SwiperSlide>
                    <SwiperSlide className=" bg-purple-200 h-full py-10 px-2 lg:text-xl font-semibold">Post Your Task and Get Proposals</SwiperSlide>
                    <SwiperSlide className="px-6 bg-teal-200 h-full p-10 text-xl font-semibold">Build Your Career with Us</SwiperSlide>
                </Swiper>
            </section>

            {/* Featured Tasks */}
            <section className="">
                <h2 className="text-3xl font-bold text-primary dark:text-white  mb-6">Featured Tasks</h2>
                <Featured featured={featured} />
            </section>

            {/* Top Categories Section */}
            <section className="bg-indigo-100 dark:bg-gradient-to-b from-neutral-900 to-neutral-800  py-16 px-4 md:px-8 lg:px-12 pb-16">
                <TopCategory />
            </section>

            {/* FAQs */}
            <section className="py-12 px-4 md:px-8 lg:px-12 bg-white dark:bg-gradient-to-b from-neutral-800 to-neutral-700 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        <Faqs />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white  dark:bg-gradient-to-b from-neutral-700 to-neutral-800 py-16 px-4 md:px-8 lg:px-12 pb-16">
                <WhyChose />
            </section>
            {/* Our Mission */}
            <section className="bg-white dark:bg-gradient-to-b from-neutral-800 to-neutral-800 py-12 px-4 md:px-8 lg:px-12 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Our Mission</h2>
                    <p className="text-gray-600 dark:text-gray-100 text-lg">
                        To empower freelancers and employers by creating a safe, efficient, and fair digital workspace where skills and opportunities meet.
                    </p>
                </div>
            </section>

            {/* Join us */}
            <JoinUsSection />
        </div>
    );
};

export default Home;
