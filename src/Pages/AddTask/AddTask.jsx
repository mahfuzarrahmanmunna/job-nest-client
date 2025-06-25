import React, { use, useState } from 'react';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Fade } from 'react-awesome-reveal';
import Swal from 'sweetalert2';
import usePageTitle from '../../Hooks/usePageTitle';
import { AuthContext } from '../../Context/AuthContext';

const AddTask = () => {
    usePageTitle()
    const { user } = use(AuthContext)
    // const { email, displayName } = user || {}
    // console.log(email);
    const [startDate, setStartDate] = useState(new Date());

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const bids = 0
        const formData = new FormData(form);
        const formateDate = startDate.toLocaleDateString('en-CA')
        const { title, category, budget, description, } = Object.fromEntries(formData.entries())
        const newTaskData = {
            title,
            category,
            budget,
            description,
            email: user?.email,
            name: user?.displayName,
            formateDate,
            bids
        }
        // console.log(newTaskData);

        // Added to post method for post data into database
        fetch('https://freelance-task-marketplace-server.vercel.app/tasks-nest', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTaskData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // console.log(data);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Task added successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:px-24 md:px-12 mx-auto px-4 pb-12"
        >
            <form
                onSubmit={handleAddTask}
                className="bg-white dark:bg-gray-800 py-12 lg:px-24 mt-12 md:px-12 px-4 rounded-2xl shadow-lg border border-indigo-100"
            >
                <Fade direction='down'>
                    <h1 className="text-center text-3xl font-bold text-primary mb-2">
                        Add New Task
                    </h1>
                </Fade>
                <Fade direction='up'>
                    <p className="mb-10 text-center text-gray-600 dark:text-gray-300">
                        Plan your workflow efficiently with a well-scheduled task.
                    </p>
                </Fade>

                <div className="lg:grid space-y-6 md:grid-cols-1 lg:grid-cols-2  px-4 gap-6">
                    {/* Title */}
                    <fieldset className="w-full">
                        <label className="dark:text-gray-100 label font-semibold">
                            Task Title
                            <span
                                data-tooltip-id="title-tip"
                                data-tooltip-content="Enter a descriptive task title"
                                className="ml-1 cursor-pointer text-sm text-blue-500"
                            >
                                ⓘ
                            </span>
                            <Tooltip id="title-tip" />
                        </label>
                        <input
                            type="text"
                            name="title"
                            required
                            className="input dark:bg-gray-700 dark:placeholder:text-gray-200 dark:text-gray-200 input-bordered w-full"
                            placeholder="E.g. Build Landing Page"
                        />
                    </fieldset>

                    {/* Category */}
                    <fieldset className="w-full">
                        <label className="dark:text-gray-100 label font-semibold">Category</label>
                        <select name="category" className="select select-bordered dark:bg-gray-700 dark:text-gray-200 w-full">
                            <option value="">Select a Category</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Design">Design</option>
                            <option value="Content Writing">Content Writing</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Freelancer">Freelancer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="Graphics Designer">Graphics Designer</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                        </select>
                    </fieldset>



                    {/* Deadline */}
                    <fieldset className="fieldset  w-full">
                        {/* <label className="dark:text-gray-100 label">Date</label>
                        <input type="date" name='date' className="input w-full" placeholder="Date" /> */}
                        <label className="dark:text-gray-100 label font-bold">
                            <span className="label-text">Deadline</span>
                        </label>
                        <DatePicker
                            className="input dark:bg-gray-700 dark:placeholder:text-gray-200 dark:text-gray-200 input-bordered w-full"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </fieldset>

                    {/* Budget */}
                    <fieldset className="w-full">
                        <label className="dark:text-gray-100 label font-semibold">Budget ($)</label>
                        <input
                            type="text"
                            name="budget"
                            className="input dark:bg-gray-700 dark:placeholder:text-gray-200 dark:text-gray-200 input-bordered w-full"
                            placeholder="E.g. 250"
                        />
                    </fieldset>

                    {/* User Email */}
                    <fieldset className="w-full">
                        <label className="dark:text-gray-100 label font-semibold">User Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email}
                            disabled
                            className="input dark:bg-gray-700 dark:placeholder:text-gray-200 dark:text-gray-200 input-bordered w-full"
                            placeholder="you@example.com"
                            required
                        />
                    </fieldset>

                    {/* User Name */}
                    <fieldset className="w-full">
                        <label className="dark:text-gray-100 label font-semibold">User Name</label>
                        <input
                            type="text"
                            name="name"
                            value={user?.displayName}
                            disabled
                            className="input dark:bg-gray-700 dark:placeholder:text-gray-200 dark:text-gray-200 input-bordered w-full"
                            placeholder="John Doe"
                            required
                        />
                    </fieldset>

                    {/* Description */}
                    <fieldset className="w-full col-span-2">
                        <label className="dark:text-gray-100 label font-semibold">Description</label>
                        <textarea
                            name="description"
                            className="textarea dark:bg-gray-700 dark:text-gray-200 textarea-bordered w-full"
                            placeholder="Brief description of the task..."
                            rows={3}
                        />
                    </fieldset>
                </div>

                {/* Submit Button */}
                <div className="mt-8 px-4">
                    <motion.input
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        value="Add Task"
                        className="w-full btn btn-info btn-outline text-lg"
                    />
                </div>
            </form>
        </motion.div>
    );
};

export default AddTask;
