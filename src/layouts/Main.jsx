import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <div className='w-full min-h-screen bg-slate-700'>
                <div className="container mx-auto flex flex-col gap-y-4">
                    <NavBar></NavBar>
                    <div className="owl-outlet">
                        <Outlet></Outlet>
                    </div>
                    <div className='mt-auto'>
                        <Footer></Footer>
                    </div>                
                    </div>
            </div>
        </>
    );
};

export default MainLayout;