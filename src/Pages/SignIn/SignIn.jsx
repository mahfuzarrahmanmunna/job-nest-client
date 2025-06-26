import { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { Mail, Lock, LogIn, ArrowRight, MoveRight } from 'lucide-react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import usePageTitle from '../../Hooks/usePageTitle';

const SignIn = () => {
    usePageTitle()
    const { signInPass, signinWithGoogle } = use(AuthContext)

    const provider = new GoogleAuthProvider();

    const handleGoogle = async () => {
        try {
            const result = await signinWithGoogle(provider);
            const user = result.user;

            const signInInfo = {
                uid: user?.uid,
                email: user?.email,
                displayName: user?.displayName,
                photoURL: user?.photoURL,
                lastSignInTime: user?.metadata?.lastSignInTime
            };

            // Send user data to database
            const res = await fetch('http://localhost:3000/users', {
                method: 'PATCH', // You can use PUT if your backend is updated for that
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signInInfo)
            });

            const data = await res.json();
            console.log('Google login user saved:', data);

            toast.success(`Logged in as ${user.displayName}`);
            navigate(location.state || '/');

        } catch (err) {
            console.error("Google Sign-in Failed:", err.code);
            toast.error("Google Sign-in Failed");
        }
    };
    

    const navigate = useNavigate()
    const location = useLocation()

    const handleSignin = async (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            // Sign in with email & password
            const result = await signInPass(email, password);
            const user = result.user;

            // Prepare user data
            const signInInfo = {
                uid: user?.uid,
                email: user?.email,
                displayName: user?.displayName,
                photoURL: user?.photoURL,
                lastSignInTime: user?.metadata?.lastSignInTime
            };

            // Save/update user to database
            const res = await fetch('http://localhost:3000/users', {
                method: 'PATCH', // or use PUT/POST if your backend requires it
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signInInfo)
            });

            const data = await res.json();
            console.log('Server response:', data);

            // Navigate after success
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Sign in successful",
                showConfirmButton: false,
                timer: 1500
            });

            navigate(location.state || '/');
        } catch (error) {
            console.error("Sign in failed:", error.code);
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: error.message
            });
        }
    };



    return (
        <div className="py-12 flex items-center justify-center  lg:px-12 px-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col lg:flex-row w-full overflow-hidden">
                <div className="lg:w-1/2 hidden lg:flex items-center justify-center bg-indigo-100 dark:bg-gray-700 overflow-hidden">
                    <Fade direction='left' className="w-full h-full">
                        <iframe className='h-full w-full' src="https://lottie.host/embed/28742e5f-707a-4b87-a920-61696c2bf40a/GKywRvy43y.lottie"></iframe>
                    </Fade>
                </div>
                <Toaster />
                <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                    <Fade direction="right">
                        <h2 className="lg:text-3xl md:text-2xl font-bold text-primary mb-2">
                            <Typewriter
                                words={["Welcome Back!", "Login to Your Account"]}
                                loop={false}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-200 mb-6">Sign in to manage your freelance tasks</p>

                        <form onSubmit={handleSignin} className="space-y-4">
                            <div>
                                <label className="block text-sm dark:text-gray-200 font-semibold mb-1">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        // value={formData.email}
                                        // onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="input input-bordered dark:bg-gray-700 dark:text-gray-200 dark:placeholder:text-gray-200 w-full pl-10"
                                        required
                                        data-tip="Enter your email address"
                                    />
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>

                            <div>
                                <label className="block dark:text-gray-200 text-sm font-semibold mb-1">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="********"
                                        className="input dark:bg-gray-700 dark:text-gray-200 dark:placeholder:text-gray-200 input-bordered w-full pl-10"
                                        required
                                        data-tip="Enter your password"
                                    />
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary w-full flex items-center gap-2">
                                <LogIn size={18} /> Sign In
                            </button>
                        </form>

                        <div className="divider dark:divider-success text-gray-200 ">OR</div>

                        <button
                            onClick={handleGoogle}
                            className="btn w-full flex items-center justify-center gap-2 border border-gray-300"
                            data-tip="Sign in using Google account"
                        >
                            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-5 h-5" />
                            Sign in with Google
                        </button>

                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-200 text-center">
                            Don't have an account?{' '}
                            <Link to="/sign-up" className="link link-primary inline-flex items-center">
                                Signup <MoveRight size={16} className="ml-1" />
                            </Link>
                        </p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default SignIn;