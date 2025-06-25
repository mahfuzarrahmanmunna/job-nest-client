import React from 'react';
import { motion } from 'framer-motion';


const Faqs = () => {
    return (
        <motion.div
            className="border border-indigo-200 rounded-lg p-4 text-left cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
        >
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Frequently Asked Questions</h2>
            <div className='space-y-4'>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title font-semibold">How do I create an account?</div>
                    <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">How do I post a task?</div>
                    <div className="collapse-content text-sm">Click on 'Post a Task', fill in your task details, and publish it. Freelancers will start applying soon.</div>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">How do payments work?</div>
                    <div className="collapse-content text-sm">Clients fund the project upfront. We hold the payment securely and release it once work is approved.</div>
                </div>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">Can I apply for multiple tasks?</div>
                    <div className="collapse-content text-sm">Yes, as a freelancer you can apply to as many open tasks as you'd like.</div>
                </div>
            </div>
        </motion.div>
    );
};

export default Faqs;