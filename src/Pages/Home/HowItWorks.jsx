// HowItWorks.js
import React from 'react';
import { FilePlus, Send, ThumbsUp } from 'lucide-react';

const steps = [
    {
        icon: <FilePlus className="w-8 h-8" />,
        title: '1. Post Your Task',
        desc: 'Describe your task, set a deadline, and post it for freelancers to see.',
    },
    {
        icon: <Send className="w-8 h-8" />,
        title: '2. Receive Bids',
        desc: 'Freelancers will send proposals. Review, chat, and choose the best one.',
    },
    {
        icon: <ThumbsUp className="w-8 h-8" />,
        title: '3. Get It Done',
        desc: 'Track progress, review submissions, and mark it complete once satisfied.',
    }
];

const HowItWorks = () => {
    return (
        <section className="">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-10 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center">
                        <div className="text-indigo-500 dark:text-indigo-300 mb-4">{step.icon}</div>
                        <h3 className="text-lg font-semibold text-primary dark:text-white mb-2">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
