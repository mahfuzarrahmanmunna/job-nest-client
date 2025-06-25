import React from 'react';
import { motion } from 'framer-motion';
import { Delete, Edit, Eye } from 'lucide-react';
import { Link } from 'react-router';

const MyPostTable = ({ task, index, handleDeleteFormDB, setSelectedTask }) => {
    const { title, category, budget, _id, formateDate } = task || {};

    return (
        <motion.tr
            className="text-center border-t hover:bg-indigo-50 dark:hover:bg-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
        >
            <td className="px-4 py-2 dark:text-white border">{index + 1}</td>
            <td className="px-4 py-2 dark:text-white border">{title}</td>
            <td className="px-4 py-2 dark:text-white border">{category}</td>
            <td className="px-4 py-2 dark:text-white border">${budget}</td>
            <td className="px-4 py-2 dark:text-white border">{new Date(formateDate).toLocaleDateString()}</td>
            <td className="px-4 py-2 dark:text-white border lg:space-y-0 space-y-2 lg:space-x-2">
                <Link to={`/dashboard/updated-task/${_id}`} className="btn btn-info  btn-sm text-white">
                    <Edit size={15} />
                </Link>
                <button
                    onClick={() => handleDeleteFormDB(_id)}
                    className="btn btn-error btn-sm text-white"
                >
                    <Delete size={15} />
                </button>
                <button
                    onClick={() => setSelectedTask(task)}
                    className="btn btn-success btn-sm text-white"
                >
                    <Eye size={15} />
                </button>
            </td>
        </motion.tr>
    );
};

export default MyPostTable;
