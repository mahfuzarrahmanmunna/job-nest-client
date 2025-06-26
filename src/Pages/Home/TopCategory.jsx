import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import React, { } from 'react';
import 'swiper/css/pagination';

const TopCategory = () => {
    return (
        <div className="text-center ">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-16">Top Categories</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                autoplay={{ delay: 2500 }}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className="w-full"
            >
                <SwiperSlide>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-neutral-300 rounded-xl shadow overflow-hidden"
                    >
                        <iframe className='w-full h-full' src="https://lottie.host/embed/0b1eca51-bde8-4ad9-8a64-fbdb458bc5e1/oXpPrNwONa.lottie"></iframe>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-indigo-700">Web Development</h3>
                        </div>
                    </motion.div>
                </SwiperSlide>

                <SwiperSlide>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-neutral-300 rounded-xl shadow overflow-hidden"
                    >
                        <iframe className='w-full h-full' src="https://lottie.host/embed/4502cc83-5061-4061-b156-d3137f05a25d/6iIwjPVX9d.lottie"></iframe>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-indigo-700">Graphic Design</h3>
                        </div>
                    </motion.div>
                </SwiperSlide>

                <SwiperSlide>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-neutral-300 rounded-xl shadow overflow-hidden"
                    >
                        <iframe className='w-full h-full' src="https://lottie.host/embed/6ddc14c0-2db5-4245-bdbd-574a2408db98/u2sO9SScG8.lottie"></iframe>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-indigo-700">Content Writing</h3>
                        </div>
                    </motion.div>
                </SwiperSlide>

                <SwiperSlide>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-neutral-300 rounded-xl shadow overflow-hidden"
                    >
                        <iframe className='w-full h-full' src="https://lottie.host/embed/d3d41ce1-9416-4c4a-b4d7-f8530513376f/tQeFjLqchO.lottie"></iframe>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-indigo-700">Marketing</h3>
                        </div>
                    </motion.div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TopCategory;