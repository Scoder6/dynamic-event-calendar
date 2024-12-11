import React, { useState } from 'react';

function Navbar() {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        setDarkMode(!isDarkMode);
    };

    return (
        <nav className="navbar">
            <h1>Event Calendar</h1>
            <button onClick={toggleDarkMode}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </nav>
    );
}

export default Navbar;
