import React, { useState } from 'react';
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className='h-16 py-4 relative px-2 lg:px-0'>
            <div className='flex items-center justify-between'>
                <Link to='/' className='inline-flex items-center gap-2'>
                    <img src={logo} alt="Image" className='bg-white rounded-md p-1 w-14 lg:w-12' />
                    <span className='text-2xl lg:text-xl font-medium uppercase'>Solving <span className='text-[#F5900B]'>Owl</span></span>
                </Link>

                <ul className='lg:flex gap-4 hidden'>
                    <li>
                        <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/easy-problems' className={({ isActive }) => (isActive ? 'active' : 'default')}>Easy Problems</NavLink>
                    </li>
                    <li>
                        <NavLink to='/medium-problems' className={({ isActive }) => (isActive ? 'active' : 'default')}>Medium Problems</NavLink>
                    </li>
                    <li>
                        <NavLink to='/advance-problems' className={({ isActive }) => (isActive ? 'active' : 'default')}>Advance Problems</NavLink>
                    </li>
                </ul>

                <div className="hidden lg:block">
                    <Link to='/login'><button className='bg-white text-black px-4 py-2 rounded-md'>Login/Register</button></Link>
                </div>
                <FaBars className='h-10 w-10 lg:hidden cursor-pointer' onClick={() => setIsOpen(true)} />

            </div>
            {/* Mobile Menu */}
            {
                isOpen &&

                <div className='absolute top-2 text-center w-[96%] bg-slate-700 border rounded pb-4 pe-2 pt-2 z-10 space-y-2'>
                    <FaWindowClose className='h-10 w-10 ms-auto cursor-pointer' onClick={() => setIsOpen(false)} />
                    <Link to='/' className='inline-flex items-center gap-1' onClick={() => setIsOpen(false)}>
                        <img src={logo} alt="Image" className='bg-white rounded-md p-1 w-20' />
                    </Link>
                    <ul className='space-y-2'>
                        <li>
                            <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/easy-problems' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)}>Easy Problems</NavLink>
                        </li>
                        <li>
                            <NavLink to='/medium-problems' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)}>Medium Problems</NavLink>
                        </li>
                        <li>
                            <NavLink to='/advance-problems' className={({ isActive }) => (isActive ? 'active' : 'default')} onClick={() => setIsOpen(false)}>Advance Problems</NavLink>
                        </li>
                    </ul>
                    <div>
                        <Link to='/login'><button className='bg-white text-black px-4 py-2 rounded-md'>Login/Register</button></Link>
                    </div>
                </div>

            }
        </nav>
    );
};

export default NavBar;