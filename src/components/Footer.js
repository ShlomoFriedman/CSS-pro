import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <img src="/Little%20Lemon%20Logo%20Icon.svg" alt="Logo" />
            <ul className='doormat navigation'>
                <li className='doormat navigation'><h1 className="menu-title">Doormat Navigation</h1></li>
                <li className='doormat navigation'><a href="#home">Home</a></li>
                <li className='doormat navigation'><a href="#about">About</a></li>
                <li className='doormat navigation'><a href="#reservations">Reservations</a></li>
                <li className='doormat navigation'><a href="#order online">Order Online</a></li>
                <li className='doormat navigation'><a href="login">Login</a></li>
            </ul>
            <ul className='contact'>
                <li className='contact'><h1 className="menu-title">Contact</h1></li>
                <li className='contact'><a href="#address">Address</a></li>
                <li className='contact'><a href="#phone number">Phone Number</a></li>
                <li className='contact'><a href="email">Email</a></li>
            </ul>
            <ul>
                <li className='social media'><h1 className="menu-title">Social Media</h1></li>
                <li className='social media'><a href="#facebook">Facebook</a></li>
                <li className='social media'><a href="#tiktok">Tiktok</a></li>
                <li className='social media'><a href="Instagram">Instagram</a></li>
            </ul>
            <p>All rights reserved © 2024 Little Lemon Restaurant</p>
        </footer>
    )
}

export default Footer;