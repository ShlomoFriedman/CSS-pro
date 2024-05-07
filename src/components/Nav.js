import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className='navbar'>
            <img src="/Little%20Lemon%20Logo.svg" alt="Logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#about">About</a></li>
                <li><a href="#order online">Order Online</a></li>
            </ul>
            <ul className='Login'>
                <li ><a href="#login">Login</a></li>
            </ul>
        </header>
    )
}

export default Nav;