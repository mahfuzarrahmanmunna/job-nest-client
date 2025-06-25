import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import DashBoardLayouts from "../Layouts/DashBoardLayouts/DashBoardLayouts";

import Home from "../Pages/Home/Home";
import BrowserTask from "../Pages/BrowserTask/BrowserTask";
import MyPostTask from "../Pages/MyPostTask/MyPostTask";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import TaskDetails from "../Components/TaskDetails/TaskDetails";
import UpdatedMyPost from "../Pages/Update/UpdatedMyPost";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ErrorPage from "../Error/ErrorPage";
import Fallback from "../Components/Fallback/Fallback";
import PrivateRoutes from "../Provider/Private/PrivateRoutes";

// Dashboard Pages
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import AddTask from "../Pages/AddTask/AddTask";
import Profile from "../Pages/Dashboard/Profile/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                Component: Home,
                loader: () =>
                    fetch('https://freelance-task-marketplace-server.vercel.app/tasks-nest/sorted'),
                hydrateFallbackElement: <Fallback />,
            },
            {
                path: '/sign-up',
                Component: SignUp,
            },
            {
                path: '/sign-in',
                Component: SignIn,
            },
            {
                path: '/terms',
                Component: TermsAndConditions,
            },
            {
                path: '/privacy',
                Component: PrivacyPolicy,
            },
            {
                path: '/about-us',
                Component: AboutUs,
            },
        ],
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoutes>
                <DashBoardLayouts />
            </PrivateRoutes>
        ),
        children: [
            {
                index: true, // ✅ default route (when visiting /dashboard)
                element: (
                    <PrivateRoutes>
                        <DashboardHome />
                    </PrivateRoutes>
                ),
            },
            {
                path: 'add-task',
                element: (
                    <PrivateRoutes>
                        <AddTask />
                    </PrivateRoutes>
                ),
            },
            {
                path: 'browse-tasks',
                Component: BrowserTask,
                loader: () =>
                    fetch('https://freelance-task-marketplace-server.vercel.app/tasks-nest'),
                hydrateFallbackElement: <Fallback />,
            },
            {
                path: 'browse-tasks/:id',
                element: (
                    <PrivateRoutes>
                        <TaskDetails />
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(`https://freelance-task-marketplace-server.vercel.app/tasks-nest/${params.id}`),
                hydrateFallbackElement: <Fallback />,
            },
            {
                path: 'my-posted-tasks',
                element: (
                    <PrivateRoutes>
                        <MyPostTask />
                    </PrivateRoutes>
                ),
                loader: () =>
                    fetch('https://freelance-task-marketplace-server.vercel.app/tasks-nest'),
                hydrateFallbackElement: <Fallback />,
            },
            {
                path: 'updated-task/:id',
                element: (
                    <PrivateRoutes>
                        <UpdatedMyPost />
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(`https://freelance-task-marketplace-server.vercel.app/tasks-nest/${params.id}`),
                hydrateFallbackElement: <Fallback />,
            },
            {
                path: 'updated-task/:id',
                element: (
                    <PrivateRoutes>
                        <UpdatedMyPost />
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(`https://freelance-task-marketplace-server.vercel.app/tasks-nest/${params.id}`),
                hydrateFallbackElement: <Fallback />,
            },
            {
                path: 'my-profile',
                element: (
                    <PrivateRoutes>
                        <Profile />
                    </PrivateRoutes>
                )
            }
        ],
    },

]);
