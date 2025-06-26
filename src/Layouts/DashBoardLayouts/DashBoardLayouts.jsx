import { Outlet } from 'react-router';
import Sidebar from '../../Components/Dashboard/Sidebar/Sidebar';
import DashboardNavbar from '../../Components/Dashboard/DashboardNavbar/DashboardNavbar';

const DashBoardLayouts = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-base-100 dark:bg-gray-900">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <DashboardNavbar /> {/* 👈 Add this line */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashBoardLayouts;
