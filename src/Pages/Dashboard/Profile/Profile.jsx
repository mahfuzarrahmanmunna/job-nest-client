import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthContext';
import Swal from 'sweetalert2';

const Profile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (user) {
            reset({
                name: user.displayName || '',
            });
        }
    }, [user, reset]);

    const onSubmit = async (data) => {
        const { name, image } = data;

        let imageUrl = user?.photoURL;

        if (image && image.length > 0) {
            const formData = new FormData();
            formData.append('image', image[0]);

            const res = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
                method: 'POST',
                body: formData,
            });
            const result = await res.json();
            if (result.success) {
                imageUrl = result.data.url;
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Profile updated successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                return toast.error("Image upload failed");
            }
        }

        updateUser({ displayName: name, photoURL: imageUrl })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: imageUrl });
                toast.success('Profile updated!');
            })
            .catch(() => toast.error('Failed to update profile'));
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* ✅ Cover Photo */}
            <div className="relative h-72 rounded-lg shadow-md">
                <img
                    src="https://i.ibb.co/FqyWnMGd/job-nest-web-site-profile-cover-image.jpg"
                    alt="Cover"
                    className="w-full h-full object-cover rounded-lg "
                />
                <div className="absolute bottom-[-50px] left-6">
                    <img
                        src={user?.photoURL || 'https://i.ibb.co/tqfWjKr/avatar.png'}
                        alt="Profile"
                        className="w-28 h-28 rounded-full border-4 border-white shadow object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
            </div>

            {/* ✅ Form + Info */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mt-20 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Update Your Profile
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Display Name</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className="w-full px-4 py-2 border rounded bg-gray-50 dark:bg-gray-700 dark:text-white"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* File Upload */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Upload New Profile Picture</label>
                        <input
                            type="file"
                            {...register('image')}
                            accept="image/*"
                            className="w-full text-gray-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
                    >
                        Save Changes
                    </button>
                </form>
            </div>

            {/* ✅ Additional Info Section */}
            <div className="bg-gray-100 dark:bg-gray-900 mt-8 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Profile Details</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>Full Name:</strong> {user?.displayName || 'N/A'}</li>
                    <li><strong>Email:</strong> {user?.email || 'N/A'}</li>
                    <li><strong>Account Status:</strong> ✅ Active</li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
