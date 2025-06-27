import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';

const blogData = [
    {
        id: 1,
        title: 'How to Land Freelance Jobs in 2025',
        excerpt: 'Learn the best practices to find freelance jobs on modern platforms and stand out as a top bidder.',
        author: 'Mahfuzar Rahman',
        date: 'June 25, 2025',
        image: 'https://i.ibb.co/BHC4VCG0/freelance.png'
    },
    {
        id: 2,
        title: 'Top 10 Skills in High Demand for Remote Work',
        excerpt: 'Discover the most profitable skills that clients are actively looking for in the freelance marketplace.',
        author: 'Munna Dev',
        date: 'June 20, 2025',
        image: 'https://i.ibb.co/Cph1fzHL/Skills-scaled.jpg'
    },
    {
        id: 3,
        title: 'Creating a Strong Portfolio That Wins Projects',
        excerpt: 'A well-crafted portfolio builds trust. Here’s how to structure one that converts visitors into clients.',
        author: 'Team JobNest',
        date: 'June 18, 2025',
        image: 'https://i.ibb.co/zVC4G3sp/1696405029412.jpg'
    }
];

const BlogsSection = () => {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-16 rounded-2xl">
            {/* Section Title */}
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-center text-primary mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typewriter
                    words={['Latest Blogs & Insights']}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={90}
                    deleteSpeed={60}
                    delaySpeed={1500}
                />
            </motion.h2>
            <p className="text-center text-gray-500 dark:text-gray-300 max-w-xl mx-auto mb-12">
                Stay updated with valuable resources, industry trends, and expert advice from our team and top freelancers.
            </p>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {blogData.map((blog, index) => (
                    <motion.div
                        key={blog.id}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <img src={blog.image} alt={blog.title} className="w-full h-52 object-cover" />
                        <div className="p-6 space-y-3">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{blog.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-300">{blog.excerpt}</p>
                            <div className="flex justify-between items-center pt-4 border-t dark:border-gray-700 text-sm text-gray-400 dark:text-gray-500">
                                <span>By {blog.author}</span>
                                <span>{blog.date}</span>
                            </div>
                            <div className="pt-2">
                                <Link
                                    to={`/`}
                                    className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BlogsSection;
