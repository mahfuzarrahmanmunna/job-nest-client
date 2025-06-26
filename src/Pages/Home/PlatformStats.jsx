import React from 'react';
import CountUp from 'react-countup';
import { Briefcase, Users, CheckCircle } from 'lucide-react';

const stats = [
    { icon: <Briefcase />, label: 'Tasks Posted', value: 4200 },
    { icon: <Users />, label: 'Freelancers Joined', value: 8500 },
    { icon: <CheckCircle />, label: 'Tasks Completed', value: 3900 },
];

const PlatformStats = () => {
    return (
        <section className="px-4 md:px-12">
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-10 text-center">Platform in Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="bg-indigo-50 dark:bg-neutral-800 p-6 rounded-xl flex items-center gap-4 shadow"
                    >
                        <div className="text-indigo-500 dark:text-indigo-400 text-3xl">{stat.icon}</div>
                        <div>
                            <p className="text-xl font-bold text-primary dark:text-white">
                                <CountUp
                                    end={stat.value}
                                    duration={2}
                                    separator=","
                                    enableScrollSpy
                                    scrollSpyDelay={300}
                                />
                                +
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PlatformStats;
