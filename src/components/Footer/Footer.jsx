import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../NavBar/logo.png'
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='border-y py-4  flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-16'>
                <div>
                    <Link to='/' className='inline-flex flex-col items-center gap-2'>
                        <img src={logo} alt="Image" className='bg-white rounded-md p-1 w-14 lg:w-14' />
                        <span className='text-2xl lg:text-2xl font-medium uppercase'>Solving <span className='text-[#F5900B]'>Owl</span></span>
                    </Link>
                </div>
                <div>
                    <h2 className='hidden md:block text-xl  font-medium mb-4'>Follow Us</h2>
                    <span className='inline-flex gap-3 text-3xl'>
                        <Link to='https://web.facebook.com/Anxious.Carbon'><FaFacebook></FaFacebook></Link>
                        <Link to='https://www.linkedin.com/in/kabir63/'><FaLinkedin></FaLinkedin></Link>
                        <Link to='https://github.com/Humayun63/'><FaGithub></FaGithub></Link>
                        <Link to='https://www.youtube.com/'><FaYoutube></FaYoutube></Link>
                    </span>
                </div>
            </div>
            <div>
                <p className='text-center mt-2'><small>&copy; All rights reserved to <span className='font-bold'>The Black OWL</span></small></p>
            </div>
        </>
    );
};

export default Footer;