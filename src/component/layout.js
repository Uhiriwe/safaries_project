import React from 'react';
import images from '../assets/images.jpeg';
import { Outlet, Link } from "react-router-dom";
import { FaEnvelope } from 'react-icons/fa';
import { FaTwitter, FaInstagram, FaLinkedin, FaTripadvisor } from 'react-icons/fa';
import CallIcon from '@mui/icons-material/Call';

const Layout = () => {
    return (
        <>
            <div className='header'>
                <div className='flex'>
                    <p><FaEnvelope /> kglsafariestour@gmail.com </p>
                    <CallIcon className='call_icon' />
                    <p>+250791032369 </p>
                </div>
                <div className='icons'>
                    Give us a review
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer">
                        <FaTripadvisor size={20} />
                    </a>
                </div>


            </div>
            <nav className='nav_bar'>
                <ul>
                    <img className='nav_image' src={images} alt=''/>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tour_packages">Tour Packages</Link>
                    </li>
                    <li>
                        <Link to="/destinations">Destinations</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;