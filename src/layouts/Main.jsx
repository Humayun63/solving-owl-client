import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <div className='w-full min-h-screen bg-slate-700'>
                <div className="container h-[100vh] mx-auto flex flex-col gap-y-4">
                    <header>
                        <NavBar></NavBar>
                    </header>
                    <main className='px-2 md:px-0'>
                        <Outlet></Outlet>
                    </main>
                    <footer className='mt-auto pb-4'>
                        <Footer></Footer>
                    </footer>                
                    </div>
            </div>
        </>
    );
};

export default MainLayout;