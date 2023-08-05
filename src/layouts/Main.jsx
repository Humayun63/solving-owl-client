import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <div className='w-full min-h-screen bg-slate-700'>
                <div className=" h-[100vh] mx-auto flex flex-col ">
                    <header className='bg-slate-700'>
                        <div className='w-full px-2 md:w-11/12 md:mx-auto'>
                            <NavBar></NavBar>
                        </div>
                    </header>
                    <main className='bg-slate-700'>
                        <div className='w-full px-2 md:w-11/12 md:mx-auto'>
                            <Outlet></Outlet>
                        </div>
                    </main>
                    <footer className='mt-auto bg-slate-700'>
                        <div className='w-full pb-4 px-2 md:w-11/12 md:mx-auto'>
                            <Footer></Footer>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default MainLayout;