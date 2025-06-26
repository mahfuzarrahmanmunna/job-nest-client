import React from 'react';
import { useTheme } from './ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === 'dark'}
                onChange={toggleTheme}
            />
            <div className="w-14 h-8 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-600 transition-colors duration-300"></div>
            <span className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-6 flex items-center justify-center">
                {theme === 'dark' ? (
                    <Moon className="w-4 h-4 text-gray-800" />
                ) : (
                    <Sun className="w-4 h-4 text-yellow-500" />
                )}
            </span>
        </label>
    );
};

export default ThemeSwitch;
