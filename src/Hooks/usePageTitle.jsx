import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        if (path === '/') document.title = 'Home | Job Nest';
        if (path == '/sign-up') document.title = 'Sign Up | Job Nest';
        if (path == '/sign-in') document.title = 'Sign in | Job Nest';
        if (path == '/browse-tasks') document.title = 'Browse All Task | Job Nest';
        if (path == '/terms') document.title = 'Terms | Job Nest';
        if (path == '/privacy') document.title = 'Privacy | Job Nest';
        if (path == '/about-us') document.title = 'About Us | Job Nest';
        if (path == '/contact') document.title = 'Contact Us | Job Nest';
        if (path == '/support') document.title = 'Support| Job Nest';
        if (path == '/dashboard') document.title = 'Dashboard | Job Nest';
        if (path == '/dashboard/my-posted-tasks') document.title = 'My Posted All Task | Job Nest';
        if (path == '/dashboard/add-task') document.title = 'Add Task | Job Nest';
        if (path == '/dashboard/my-profile') document.title = 'My Profile | Job Nest';
        if (path == '/dashboard/browse-tasks') document.title = 'Browse All Task | Job Nest';
        if (path.startsWith('/browse-tasks/')) document.title = 'Task Details | Job Nest';
        if (path.startsWith('/updated-task/')) document.title = 'Updated Task | Job Nest';
        if (path.startsWith('/dashboard/browse-tasks/')) document.title = 'Task Details | Job Nest';
        if (path.startsWith('/dashboard/updated-task/')) document.title = 'Updated Task | Job Nest';
    }, [location])
};

export default usePageTitle;