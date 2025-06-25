import { Eye } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';


const TaskTable = ({ task, index }) => {
    // console.log(index, task);
    const { name, title, category, _id } = task
    console.log(_id);
    return (
        <motion.tr
            className="text-center border-t  hover:bg-indigo-50 dark:hover:bg-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
        >
            <th className="px-4 py-2 dark:text-white  border">{index + 1}</th>
            <td className="px-4 py-2 dark:text-white  border">{name}</td>
            <td className="px-4 py-2 dark:text-white  border">{title}</td>
            <td className="px-4 py-2 dark:text-white  border">{category}</td>
            <td className="px-4 py-2 dark:text-white  border">
                <Link to={`/dashboard/browse-tasks/${_id}`} title='See Details' className='btn btn-xs btn-primary btn-outline'>
                    <Eye />
                </Link>
            </td>
        </motion.tr>
    );
};

export default TaskTable;