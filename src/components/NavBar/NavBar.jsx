import React, { useContext, useState } from 'react';
import { FaBars, FaUser, FaWindowClose } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../provider/AuthProvider';
const NavBar = () => {
    const { user, logOut, loading } = useContext(AuthContext) || {}
    const [isOpen, setIsOpen] = useState(false)
    const handleLogOut = () => {
        setIsOpen(false)
        logOut()
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }
    return (
        <nav className='h-16 py-4 relative px-2 lg:px-0'>
            <div className='flex items-center justify-between border-b pb-2'>
                <Link to='/' className='inline-flex items-center gap-2'>
                    <img src={logo} alt="Image" className='bg-white rounded-md p-1 w-14 lg:w-12' />
                    <span className='text-2xl lg:text-xl font-medium uppercase'>Solving <span className='text-[#A2F740]'>Owl</span></span>
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
                    {
                        (user && !loading) ? <div className='inline-flex items-center gap-2'>
                            {
                                user?.photoURL ? <img src={user?.photoURL} alt={'image'} title={user?.displayName} className='w-12 rounded-full' /> : <FaUser></FaUser>
                            }
                            <button className='rounded-md bg-[#A2F740] text-black px-4 py-2' onClick={handleLogOut}>LogOut</button>
                        </div> : <>
                            <Link to='/login'><button className='bg-[#A2F740] text-black px-4 py-2 rounded-md'>Login/Register</button></Link>
                        </>
                    }
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
                        {
                            (user && !loading) ? <div className='inline-flex items-center gap-2'>
                                {
                                    user?.photoURL ? <img src={user?.photoURL} alt={'image'} title={user?.displayName} className='w-12 rounded-full' onClick={() => setIsOpen(false)} /> : <FaUser onClick={() => setIsOpen(false)}></FaUser>
                                }
                                <button className='rounded-md bg-[#A2F740] text-black px-4 py-2' onClick={handleLogOut}>LogOut</button>
                            </div> : <>
                                <Link to='/login' onClick={() => setIsOpen(false)}><button className='bg-[#A2F740] text-black px-4 py-2 rounded-md'>Login/Register</button></Link>
                            </>
                        }
                    </div>
                </div>

            }
        </nav>
    );
};

export default NavBar;