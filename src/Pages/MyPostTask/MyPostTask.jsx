import React, { useEffect, useState, useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2';
import { BiLeftArrow } from 'react-icons/bi';
import MyPostTable from './MyPostTable';
import { VscReactions } from 'react-icons/vsc';
import { UserRoundIcon } from 'lucide-react';
import usePageTitle from '../../Hooks/usePageTitle';
import Fallback from '../../Components/Fallback/Fallback';

const MyPostTask = () => {
    usePageTitle()
    const data = useLoaderData();
    const { user } = useContext(AuthContext);


    const [userTasks, setUserTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        if (user) {
            const filtered = data?.filter(task => task?.email === user?.email);
            setUserTasks(filtered);
        }
    }, [data, user]);


    if (!data) {
        return <Fallback />
    }

    // console.log(data);



    const handleDeleteFormDB = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/tasks-nest/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your task has been deleted.",
                                icon: "success"
                            });

                            const remaining = userTasks.filter(task => task._id !== id);
                            setUserTasks(remaining);
                        }
                    })
                    .catch(err => {
                        console.error("Delete failed", err);
                    });
            }
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded"
        >
            <h2 className="text-3xl text-primary text-center font-bold mb-6">
                <Typewriter
                    words={['My Posted Tasks']}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>

            {userTasks.length > 0 ? (
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 dark:bg-gray-800 dark:border">
                    <motion.table
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="min-w-full table-auto table border"
                    >
                        <thead className="bg-indigo-100 text-indigo-900 font-semibold">
                            <tr>
                                <th className="px-4 py-2 text-center border">Serial</th>
                                <th className="px-4 py-2 text-center border">Title</th>
                                <th className="px-4 py-2 text-center border">Category</th>
                                <th className="px-4 py-2 text-center border">Budget</th>
                                <th className="px-4 py-2 text-center border">Posted On</th>
                                <th className="px-4 py-2 text-center border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userTasks.map((task, index) => (
                                <MyPostTable
                                    key={task._id}
                                    task={task}
                                    index={index}
                                    handleDeleteFormDB={handleDeleteFormDB}
                                    setSelectedTask={setSelectedTask}
                                />
                            ))}
                        </tbody>
                    </motion.table>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 text-center"
                >
                    <p>
                        You haven't posted any tasks yet.
                    </p>
                    <Link className='btn mt-2 btn-primary btn-outline inline-flex items-center gap-2' to='/add-task'>
                        <BiLeftArrow /> Go Back & Post Data
                    </Link>
                </motion.div>
            )}

            {selectedTask && (
                <>
                    <input type="checkbox" id="taskModal" className="modal-toggle" checked readOnly />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg font-bold flex items-center justify-center">
                                <UserRoundIcon className="mr-2" /> Name: {selectedTask.name}
                            </h3>
                            <p className="py-4 text-center flex items-center justify-center">
                                <VscReactions size={20} className="text-yellow-300 mr-2" />
                                Total Bids: {selectedTask.bids}
                            </p>
                            <div className="modal-action">
                                <button className="btn" onClick={() => setSelectedTask(null)}>
                                    Close
                                </button>
                            </div>
                        </div>
                        <div className="modal-backdrop" onClick={() => setSelectedTask(null)} />
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default MyPostTask;
