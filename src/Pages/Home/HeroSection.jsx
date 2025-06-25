import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import React, { } from 'react';
import 'swiper/css/pagination';

const HeroSection = () => {
    return (
        <div className="relative w-full h-[80vh]">

            <Swiper
                pagination={{ dynamicBullets: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 2000 }}
                loop={true}
                className="h-full"
            >
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/B2vZp1F3/pexels-adilgkkya-2739306.jpg"
                        alt="Slide 1"
                        className="w-full h-[90vh] object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/fYQCf5KM/pexels-olly-842548.jpg"
                        alt="Slide 2"
                        className="w-full h-[90vh] object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/Wwyc7QT/pexels-caio-56759.jpg"
                        alt="Slide 3"
                        className="w-full h-[90vh] object-cover"
                    />
                </SwiperSlide>
            </Swiper>

            <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center px-4 z-10">

                <Fade direction="down">
                    <motion.h1
                        className="text-3xl md:text-6xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typewriter
                            words={["Welcome to Job Nest", "Hire. Work. Grow."]}
                            loop={false}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </motion.h1>

                    <p className="text-lg max-w-xl text-gray-300 mb-8">
                        Connect with talented freelancers or get hired for your unique skills. Join the future of work today.
                    </p>
                </Fade>

                <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row gap-4">
                    <Fade direction="left">
                        <Link
                            to="/browse-tasks"
                            className="bg-white text-primary font-semibold px-6 py-2 rounded-md shadow hover:bg-indigo-100"
                        >
                            Browse Tasks
                        </Link>
                    </Fade>
                    <Fade direction="right">
                        <Link
                            to="/add-task"
                            className="border border-white text-white px-8 py-2 rounded-md hover:bg-white hover:text-indigo-700"
                        >
                            Post a Task
                        </Link>
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;