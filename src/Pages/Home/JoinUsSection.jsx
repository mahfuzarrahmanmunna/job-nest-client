import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router';

const JoinUsSection = () => {
    return (
        <section className="bg-indigo-200 dark:bg-gradient-to-r from-neutral-900 to-neutral-800 py-20 px-6 md:px-12 lg:px-24 rounded-t-3xl shadow-inner">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <div className="flex justify-center mb-4">
                    <Rocket className="text-primary w-10 h-10 animate-bounce" />
                </div>
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug">
                    Ready to Take the Leap?
                </h2>
                <p className="text-lg text-indigo-900 dark:text-gray-300 mb-8">
                    Whether you're a freelancer looking for your next gig or a client in search of talent, we're here to help you grow and succeed.
                </p>
                <Link
                    to="/sign-up"
                    className="btn btn-primary px-8 py-3 text-white text-lg rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                    Get Started
                </Link>
            </motion.div>
        </section>
    );
};

export default JoinUsSection;
