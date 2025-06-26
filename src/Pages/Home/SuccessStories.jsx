// SuccessStories.js
import React, { useEffect, useState } from 'react';

const SuccessStories = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('/testimonials.json')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <section className="py-16 bg-indigo-50 dark:bg-neutral-800 px-4 md:px-12">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-10 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                {testimonials.map((t, index) => (
                    <div key={index} className="bg-white dark:bg-neutral-700 p-6 rounded-2xl shadow-md text-left">
                        <div className="flex items-center mb-4">
                            <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <h4 className="text-lg font-semibold text-primary dark:text-white">{t.name}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-300">{t.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-100 text-sm">{t.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SuccessStories;
