import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';
import DatePicker from 'react-datepicker';
import { useLoaderData } from 'react-router';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthContext';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import usePageTitle from '../../Hooks/usePageTitle';
import Fallback from '../../Components/Fallback/Fallback';

const UpdatedMyPost = () => {
    usePageTitle();
    const data = useLoaderData();
    const { user } = useContext(AuthContext);

    const {
        title,
        category,
        budget,
        formateDate,
        description,
        _id
    } = data || {};

    const [date, setDate] = useState(new Date(formateDate));

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            title,
            category,
            budget,
            description
        }
    });

    useEffect(() => {
        setValue('title', title);
        setValue('category', category);
        setValue('budget', budget);
        setValue('description', description);
    }, [title, category, budget, description, setValue]);

    const imgbbKey = import.meta.env.VITE_IMGBB_KEY;

    const onSubmit = async (data) => {
        let imageURL = null;

        if (data.image?.length > 0) {
            const formData = new FormData();
            formData.append('image', data.image[0]);

            try {
                const imgRes = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
                    method: 'POST',
                    body: formData
                });
                const imgData = await imgRes.json();
                if (imgData.success) {
                    imageURL = imgData.data.display_url;
                }
            } catch (error) {
                console.error("Image upload failed", error);
            }
        }

        const updatedTask = {
            title: data.title,
            category: data.category,
            budget: data.budget,
            formateDate: date.toLocaleDateString('en-CA'),
            description: data.description,
            image: imageURL || data.oldImage, // keep old image if not updated
            email: user?.email,
            name: user?.displayName
        };

        fetch(`https://b11a10-server-side-mahfuzarrahmanmu.vercel.app/tasks-nest/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTask)
        })
            .then(res => res.json())
            .then(result => {
                if (result.matchedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Task updated successfully!',
                        timer: 1500,
                        showConfirmButton: false,
                        position: 'center'
                    });
                    reset();
                }
            })
            .catch(err => console.error("Update failed", err));
    };

    if (!data) {
        return <Fallback />;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <form onSubmit={handleSubmit(onSubmit)} className="rounded">
                <Fade direction="down">
                    <h1 className="text-center text-3xl font-bold text-primary mb-2">Update Task</h1>
                </Fade>
                <Fade direction="up">
                    <p className="mb-10 text-center text-gray-600 dark:text-gray-200">
                        Edit and reschedule your task with ease.
                    </p>
                </Fade>

                <div className="lg:grid space-y-6 md:grid-cols-1 lg:grid-cols-2 px-4 gap-6">

                    {/* Title */}
                    <fieldset>
                        <label className="label font-semibold dark:text-gray-200">
                            Task Title
                            <span data-tooltip-id="title-tip" data-tooltip-content="Edit task title" className="ml-1 cursor-pointer text-sm text-blue-500">ⓘ</span>
                            <Tooltip id="title-tip" />
                        </label>
                        <input
                            {...register('title', { required: true })}
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                        />
                        {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
                    </fieldset>

                    {/* Category */}
                    <fieldset>
                        <label className="label font-semibold dark:text-gray-200">Category</label>
                        <select
                            {...register('category', { required: true })}
                            className="select select-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                        >
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
                        {errors.category && <p className="text-red-500 text-sm">Category is required</p>}
                    </fieldset>

                    {/* Deadline */}
                    <fieldset className='fieldset w-full p-0'>
                        <label className="label font-bold dark:text-gray-200">Deadline</label>
                        <DatePicker
                            selected={date}
                            onChange={(val) => setDate(val)}
                            dateFormat="yyyy-MM-dd"
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                        />
                    </fieldset>

                    {/* Budget */}
                    <fieldset>
                        <label className="label font-semibold dark:text-gray-200">Budget ($)</label>
                        <input
                            type="number"
                            {...register('budget', { required: true })}
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                        />
                        {errors.budget && <p className="text-red-500 text-sm">Budget is required</p>}
                    </fieldset>

                    {/* Email */}
                    <fieldset>
                        <label className="label font-semibold dark:text-gray-200">User Email</label>
                        <input
                            type="email"
                            value={user?.email}
                            disabled
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                        />
                    </fieldset>

                    {/* Name */}
                    <fieldset>
                        <label className="label font-semibold dark:text-gray-200">User Name</label>
                        <input
                            type="text"
                            value={user?.displayName}
                            disabled
                            className="input input-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                        />
                    </fieldset>

                    {/* Description */}
                    <fieldset className="col-span-2">
                        <label className="label font-semibold dark:text-gray-200">Description</label>
                        <textarea
                            {...register('description', { required: true })}
                            className="textarea textarea-bordered dark:bg-gray-700 dark:text-gray-200 w-full"
                            rows={3}
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm">Description is required</p>}
                    </fieldset>

                    {/* Image Upload */}
                    <fieldset className="col-span-2">
                        <label className="label font-semibold dark:text-gray-200">Upload New Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            {...register('image')}
                            className="file-input file-input-bordered w-full dark:bg-gray-700 dark:text-gray-200"
                        />
                    </fieldset>
                </div>

                <div className="mt-8 px-4">
                    <motion.input
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={isSubmitting}
                        value={isSubmitting ? "Updating..." : "Update Task"}
                        className="w-full btn btn-info btn-outline text-lg"
                    />
                </div>
            </form>
        </motion.div>
    );
};

export default UpdatedMyPost;
