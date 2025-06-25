
const DashboardHome = () => {
    // const { user } = use
    // const [totalTasks, setTotalTasks] = useState(0);
    // const [myTasks, setMyTasks] = useState(0);
    // const [totalUsers, setTotalUsers] = useState(0);

    // // ✅ Load all stats
    // useEffect(() => {
    //     // Fetch all tasks
    //     axios.get('https://freelance-task-marketplace-server.vercel.app/tasks-nest')
    //         .then(res => {
    //             setTotalTasks(res.data.length);
    //             const userTasks = res.data.filter(task => task.email === user?.email);
    //             setMyTasks(userTasks.length);
    //         })
    //         .catch(err => console.error(err));

    //     // Fetch all users
    //     axios.get('https://freelance-task-marketplace-server.vercel.app/users')
    //         .then(res => setTotalUsers(res.data.length))
    //         .catch(err => console.error(err));
    // }, [user?.email]);

    return (
        <div className="p-4 md:p-8">
            {/* <h2 className="text-3xl font-bold mb-8">👋 Welcome, {user?.displayName || "User"}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-100 dark:bg-blue-800 p-6 rounded-lg shadow text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Total Tasks</h3>
                    <p className="text-4xl font-bold text-blue-700 dark:text-white">{totalTasks}</p>
                </div>

                <div className="bg-green-100 dark:bg-green-800 p-6 rounded-lg shadow text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">My Tasks</h3>
                    <p className="text-4xl font-bold text-green-700 dark:text-white">{myTasks}</p>
                </div>

                <div className="bg-purple-100 dark:bg-purple-800 p-6 rounded-lg shadow text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Total Users</h3>
                    <p className="text-4xl font-bold text-purple-700 dark:text-white">{totalUsers}</p>
                </div>
            </div> */}
        </div>
    );
};

export default DashboardHome;
