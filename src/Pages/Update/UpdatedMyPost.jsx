import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';
import DatePicker from 'react-datepicker';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import usePageTitle from '../../Hooks/usePageTitle';
import Fallback from '../../Components/Fallback/Fallback';

const UpdatedMyPost = () => {
    usePageTitle()
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log('photo', user?.photoURL);

    const {
        title,
        category,
        budget,
        formateDate,
        description,
        _id
    } = data || {};

    const [titles, setTitles] = useState(title || '');
    const [categories, setCategories] = useState(category || '');
    const [dates, setDates] = useState(formateDate || new Date());
    const [amount, setAmount] = useState(budget || '');
    const [descriptions, setDescriptions] = useState(description || '');

    const handleUpdatedTask = (e) => {
        e.preventDefault();

        const updatedData = {
            title: titles,
            category: categories,
            budget: amount,
            formateDate: dates,
            description: descriptions,
            email: user?.email,
            name: user?.displayName
        };

        // console.log("Updated Task Submitted:", updatedData);

        // Updated data here functionality
        fetch(`https://freelance-task-marketplace-server.vercel.app/tasks-nest/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.matchedCount) {
                    // console.log(data);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Task has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                // console.log('updated data', data);
            })
            .catch(err => {
                const code = err.code;
                console.log(code);
            })

    };

    if (!data) {
        return <Fallback />; // Assuming Fallback is a component that handles loading state or errors
    }


    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <form
                onSubmit={handleUpdatedTask}
                className="bg-white dark:bg-gray-800 rounded"
            >
                <Fade direction='down'>
                    <h1 className="text-center text-3xl font-bold text-primary mb-2">
                        Update Task
                    </h1>
                </Fade>
                <Fade direction='up'>
                    <p className="mb-10 text-center text-gray-600 dark:text-gray-200">
                        Plan your workflow efficiently with a well-scheduled task.
                    </p>
                </Fade>

                <div className="lg:grid space-y-6 md:grid-cols-1 lg:grid-cols-2 px-4 gap-6">
                    {/* Task Title */}
                    <fieldset className="w-full fieldset">
                        <label className="label dark:text-gray-200 font-semibold">
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
                            value={titles}
                            onChange={(e) => setTitles(e.target.value)}
                            className="input  dark:bg-gray-700 dark:placeholder:text-gray-200 dark:text-gray-200 input-bordered w-full"
                            placeholder="E.g. Build Landing Page"
                            required
                        />
                    </fieldset>

                    {/* Category */}
                    <fieldset className="w-full fieldset">
                        <label className="label dark:text-gray-200 font-semibold">Category</label>
                        <select
                            name="category"
                            value={categories}
                            onChange={(e) => setCategories(e.target.value)}
                            className="select dark:bg-gray-700 dark:text-gray-200 select-bordered w-full"
                            required
                        >
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
                    <fieldset className="w-full fieldset">
                        <label className="label dark:text-gray-200 font-bold">
                            <span className="label-text">Deadline</span>
                        </label>
                        <DatePicker
                            className="input dark:bg-gray-700 dark:text-gray-200 input-bordered w-full"
                            selected={dates}
                            onChange={(date) => setDates(date)}
                            dateFormat="yyyy-MM-dd"
                            required
                        />
                    </fieldset>

                    {/* Budget */}
                    <fieldset className="w-full fieldset">
                        <label className="label dark:text-gray-200 font-semibold">Budget ($)</label>
                        <input
                            type="text"
                            name="budget"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="input  dark:bg-gray-700 dark:placeholder:text-gray-200 dark:text-gray-200 input-bordered w-full"
                            placeholder="E.g. 250"
                            required
                        />
                    </fieldset>

                    {/* User Email */}
                    <fieldset className="w-full fieldset">
                        <label className="label dark:text-gray-200 font-semibold">User Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email || ""}
                            className="input  dark:bg-gray-700 dark:placeholder:text-gray-200 dark:text-gray-200 input-bordered w-full"
                            disabled
                        />
                    </fieldset>

                    {/* User Name */}
                    <fieldset className="w-full fieldset">
                        <label className="label dark:text-gray-200 font-semibold">User Name</label>
                        <input
                            type="text"
                            name="name"
                            value={user?.displayName || ""}
                            className="input dark:bg-gray-700 dark:placeholder:text-gray-200 dark:text-gray-200 input-bordered w-full"
                            disabled
                        />
                    </fieldset>

                    {/* Description */}
                    <fieldset className="w-full fieldset col-span-2">
                        <label className="label dark:text-gray-200 font-semibold">Description</label>
                        <textarea
                            name="description"
                            value={descriptions}
                            onChange={(e) => setDescriptions(e.target.value)}
                            className="textarea textarea-bordered dark:bg-gray-700 dark:placeholder:text-gray-200 dark:text-gray-200 dark:text-gray-200 w-full"
                            placeholder="Brief description of the task..."
                            rows={3}
                            required
                        />
                    </fieldset>
                </div>

                {/* Submit Button */}
                <div className="mt-8 px-4">
                    <motion.input
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        value="Update Task"
                        className="w-full btn btn-info btn-outline text-lg"
                    />
                </div>
            </form>
        </motion.div>
    );
};

export default UpdatedMyPost;
