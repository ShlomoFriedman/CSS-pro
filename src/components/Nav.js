import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    // State to toggle the hamburger menu
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='navbar'>
            <img src="/Little%20Lemon%20Logo.svg" alt="Logo" />

            {/* Hamburger Button */}
            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
                ☰
            </button>
            

            {/* Main Navigation Menu */}
            <nav className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#order online">Order Online</a></li>
                </ul>
                <ul className='Login'>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
