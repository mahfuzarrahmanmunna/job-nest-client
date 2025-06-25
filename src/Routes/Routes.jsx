import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home";
import AddTask from "../Pages/AddTask/AddTask";
import BrowserTask from "../Pages/BrowserTask/BrowserTask";
import MyPostTask from "../Pages/MyPostTask/MyPostTask";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Fallback from "../Components/Fallback/Fallback";
import TaskDetails from "../Components/TaskDetails/TaskDetails";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import ErrorPage from "../Error/ErrorPage";
import PrivateRoutes from "../Provider/Private/PrivateRoutes";
import UpdatedMyPost from "../Pages/Update/UpdatedMyPost";
// import UserProfiles from "../Components/UserProfiles/UserProfiles";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayouts,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                Component: Home,
                loader: () => fetch('https://freelance-task-marketplace-server.vercel.app/tasks-nest/sorted'),
                hydrateFallbackElement: <Fallback />
            },
            {
                path: "/add-task",
                element: <PrivateRoutes>
                    <AddTask />
                </PrivateRoutes>
            },
            {
                path: "/browse-tasks",
                Component: BrowserTask,
                loader: () => fetch('https://freelance-task-marketplace-server.vercel.app/tasks-nest'),
                hydrateFallbackElement: <Fallback />
            },
            {
                path: "/my-posted-tasks",
                element: <PrivateRoutes><MyPostTask /></PrivateRoutes>,
                loader: () => fetch('https://freelance-task-marketplace-server.vercel.app/tasks-nest'),
                hydrateFallbackElement: <Fallback />
            },
            {
                path: "/sign-up",
                Component: SignUp
            },
            {
                path: "/sign-in",
                Component: SignIn
            },
            {
                path: "/browse-tasks/:id",
                element: <PrivateRoutes><TaskDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://freelance-task-marketplace-server.vercel.app/tasks-nest/${params.id}`),
                hydrateFallbackElement: <Fallback />
            },
            {
                path: "/terms",
                Component: TermsAndConditions,
            },
            {
                path: "/privacy",
                Component: PrivacyPolicy,
            },
            {
                path: "/updated-task/:id",
                element: <PrivateRoutes><UpdatedMyPost /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://freelance-task-marketplace-server.vercel.app/tasks-nest/${params.id}`),
                hydrateFallbackElement: <Fallback />
            },
        ]
    }
])