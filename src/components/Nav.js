import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className='app-navbar'>
            <img src="/Little%20Lemon%20Logo.svg" alt="Logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><a href="#order online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </header>
    )
}

export default Nav;