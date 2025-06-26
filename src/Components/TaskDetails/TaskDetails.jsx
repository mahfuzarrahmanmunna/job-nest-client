import { Typewriter } from 'react-simple-typewriter';
import { Fade, Slide } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { motion } from 'framer-motion';
import { useLoaderData, useLocation } from 'react-router';
import DetailsError from '../../Error/DetailsError';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import usePageTitle from '../../Hooks/usePageTitle';
import Fallback from '../Fallback/Fallback';

const TaskDetails = () => {
    usePageTitle()
    const task = useLoaderData();
    const location = useLocation();
    const path = location.pathname;
    const result = path.replace('/dashboard/browse-tasks/', '');


    const {
        title,
        description,
        category,
        budget,
        formateDate,
        email,
        name,
        bids
    } = task || {};
    // console.log(formateDate);
    // const updatedTime = formateDate.replace('T00:00:00.000Z', '')

    const [bidsCount, setBidsCount] = useState(bids || 0);

    if (!task && !result) {
        return <Fallback />
    }

    if (!task || result !== task._id) {
        return <DetailsError result={result} />;
    }

    const handleBidsCount = () => {
        const newBids = bidsCount + 1;

        // data patch here
        fetch(`http://localhost:3000/tasks-nest/${task._id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bids: newBids }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log('after added data', data);
                    setBidsCount(newBids);
                    toast.success('Bids Added Successful')
                }
            })
            .catch(err => {
                const code = err.code;
                console.log(code);
            })
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto dark:bg-gray-800 p-6 bg-white shadow-xl my-12 rounded-3xl border border-indigo-100"
        >
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                {/* Lottie Animation */}
                <Fade direction='up' className="w-full lg:w-1/2">
                    <iframe
                        src="https://lottie.host/embed/db733a44-32c1-479a-8202-f642a7e11633/WC4GLDRZH8.lottie"
                        className="w-full h-60 rounded-xl"
                        title="Task Animation"
                        frameBorder="0"
                        allowFullScreen
                    />
                </Fade>
                <Toaster />

                {/* Task Info */}
                <div className="w-full lg:w-1/2">
                    <Fade direction="down">
                        <h1 className="text-3xl font-bold text-primary mb-4">
                            {title}
                        </h1>
                    </Fade>

                    <Fade cascade damping={0.1}>
                        <p className="text-gray-700 dark:text-gray-200 mb-2">
                            <strong>Posted by:</strong> {name}
                            <span
                                data-tooltip-id="email-tooltip"
                                data-tooltip-content={email}
                                className="ml-2 text-blue-500 cursor-pointer text-sm"
                                title="Click to view email"
                            >
                                (contact)
                            </span>
                            <Tooltip id="email-tooltip" />
                        </p>

                        <p className="text-gray-700 dark:text-gray-200 mb-2">
                            <strong>Category:</strong> {category}
                        </p>

                        <p className="text-gray-700 dark:text-gray-200 mb-2">
                            <strong>Budget:</strong> ${budget}
                        </p>

                        <p className="text-gray-700 dark:text-gray-200 mb-2">
                            <strong>Deadline:</strong>  {new Date(formateDate).toLocaleDateString()}
                        </p>

                        <p className="text-gray-700 dark:text-gray-200 mb-4">
                            <strong>Description:</strong> {description}
                        </p>

                        <div className="flex items-center gap-5">
                            <button
                                onClick={handleBidsCount}
                                className="btn btn-sm btn-outline btn-primary"
                            >
                                Bids+
                            </button>
                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-50">
                                {bidsCount}
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>

            {/* Footer Note */}
            <Slide direction="up">
                <div className="mt-10 text-center text-gray-600 dark:text-gray-300">
                    Ready to bring this task to life? Collaborate with{' '}
                    <span className="text-primary font-semibold">top freelancers</span> today!
                </div>
            </Slide>
        </motion.div>
    );
};

export default TaskDetails;
