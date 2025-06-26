import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const RootLayouts = () => {
    return (
        <div className='bg-white dark:bg-gray-800 font-poppins'>
            <div className='sticky top-0 dark:bg-gray-900 z-50 bg-transparent '>
                <Navbar />
            </div>
            <div className="min-h-[calc(100vh-300px)] bg-base-200 dark:bg-gray-800 bg-[url('https://example.com/image.jpg')] bg-cover bg-center">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default RootLayouts;