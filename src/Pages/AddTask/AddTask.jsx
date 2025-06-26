import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
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
    usePageTitle();
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm();

    const imgbbKey = import.meta.env.VITE_IMGBB_KEY;

    const onSubmit = async (data) => {
        const formateDate = startDate.toLocaleDateString('en-CA');
        const bids = 0;

        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const imgRes = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
                method: 'POST',
                body: formData,
            });
            const imgData = await imgRes.json();
            if (imgData.success) {
                const task = {
                    title: data.title,
                    category: data.category,
                    budget: data.budget,
                    description: data.description,
                    image: imgData.data.display_url,
                    email: user?.email,
                    name: user?.displayName,
                    formateDate,
                    bids
                };

                const res = await fetch('http://localhost:3000/tasks-nest', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(task)
                });

                const result = await res.json();
                if (result.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Task Added Successfully!',
                        timer: 1500,
                        showConfirmButton: false,
                        position: 'center'
                    });
                    reset();
                }
            }
        } catch (error) {
            console.error("Image upload or task submission failed", error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="rounded">
                <Fade direction="down">
                    <h1 className="text-center text-3xl font-bold text-primary mb-2">Add New Task</h1>
                </Fade>
                <Fade direction="up">
                    <p className="mb-10 text-center text-gray-600 dark:text-gray-300">
                        Plan your workflow efficiently with a well-scheduled task.
                    </p>
                </Fade>

                <div className="lg:grid space-y-2 md:grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Task Title */}
                    <fieldset>
                        <label className="label font-semibold dark:text-gray-100">
                            Task Title
                            <span
                                data-tooltip-id="title-tip"
                                data-tooltip-content="Enter a descriptive task title"
                                className="ml-1 text-blue-500 cursor-pointer text-sm"
                            >ⓘ</span>
                            <Tooltip id="title-tip" />
                        </label>
                        <input
                            type="text"
                            {...register('title', { required: true })}
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                            placeholder="E.g. Build Landing Page"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">Title is required</p>}
                    </fieldset>

                    {/* Category */}
                    <fieldset>
                        <label className="label font-semibold dark:text-gray-100">Category</label>
                        <select {...register('category', { required: true })} className="select select-bordered dark:bg-gray-700 dark:text-gray-200 w-full">
                            <option value="">Select a Category</option>
                            <option>Web Development</option>
                            <option>Design</option>
                            <option>Content Writing</option>
                            <option>Digital Marketing</option>
                            <option>Freelancer</option>
                            <option>Backend Developer</option>
                            <option>Graphics Designer</option>
                            <option>Full Stack Developer</option>
                        </select>
                        {errors.category && <p className="text-red-500 text-sm mt-1">Category is required</p>}
                    </fieldset>

                    {/* Deadline */}
                    <fieldset className='fieldset w-full p-0'>
                        <label className="label font-semibold dark:text-gray-100">Deadline</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                        />
                    </fieldset>

                    {/* Budget */}
                    <fieldset>
                        <label className="label font-semibold dark:text-gray-100">Budget ($)</label>
                        <input
                            type="number"
                            {...register('budget', { required: true })}
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                            placeholder="E.g. 250"
                        />
                        {errors.budget && <p className="text-red-500 text-sm mt-1">Budget is required</p>}
                    </fieldset>

                    {/* User Email */}
                    <fieldset>
                        <label className="label font-semibold dark:text-gray-100">User Email</label>
                        <input
                            type="email"
                            value={user?.email}
                            disabled
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                        />
                    </fieldset>

                    {/* User Name */}
                    <fieldset>
                        <label className="label font-semibold dark:text-gray-100">User Name</label>
                        <input
                            type="text"
                            value={user?.displayName}
                            disabled
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                        />
                    </fieldset>

                    {/* Description */}
                    <fieldset className="col-span-2">
                        <label className="label font-semibold dark:text-gray-100">Description</label>
                        <textarea
                            {...register('description', { required: true })}
                            className="textarea textarea-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                            rows={3}
                            placeholder="Brief description of the task..."
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
                    </fieldset>

                    {/* Image Upload */}
                    <fieldset className="col-span-2">
                        <label className="label font-semibold dark:text-gray-100">Task Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            {...register('image', { required: true })}
                            className="file-input file-input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                        />
                        {errors.image && <p className="text-red-500 text-sm mt-1">Image is required</p>}
                    </fieldset>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                    <motion.input
                        whileHover={{ scale: 1.005 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isSubmitting}
                        type="submit"
                        value={isSubmitting ? "Submitting..." : "Add Task"}
                        className="w-full btn btn-info btn-outline text-lg"
                    />
                </div>
            </form>
        </motion.div>
    );
};

export default AddTask;
