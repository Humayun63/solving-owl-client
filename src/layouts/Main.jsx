import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
       <>
        <div className='w-full'>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
       </>
    );
};

export default MainLayout;