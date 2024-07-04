import CallIcon from '@mui/icons-material/Call';
import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaTripadvisor, FaTwitter } from 'react-icons/fa';
import { Link, Outlet } from "react-router-dom";
import kgl from '../assets/kgl.png';

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
                    <img className='nav_image' src={kgl} alt=''/>
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