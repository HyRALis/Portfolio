import React from 'react';

export const MainNav = () => {
    return (
        <nav className="px-4 py-2 flex justify-between">
            <h1>Logo</h1>
            <ul className="flex gap-4">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};
