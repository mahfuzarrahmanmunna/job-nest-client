import React from 'react';
import { useTheme } from './ThemeContext';
import { Moon, SunMoon } from 'lucide-react';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={`btn btn-circle ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}>
            <div onClick={toggleTheme}>
                {theme == 'light' ? <SunMoon /> : <Moon />}
            </div>
        </div>
    );
};

export default ThemeSwitch;