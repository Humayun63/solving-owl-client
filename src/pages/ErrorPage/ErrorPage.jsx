import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import animation from '../../assets/animation.json'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    console.log(error)
    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <Lottie animationData={animation} />
            <div>
                <p className='text-8xl text-red-400 font-bold my-6'>{status || 404}</p>
                <p className='text-xl  mb-4'>{error?.message || 'Something went wrong!'}</p>
                <button className='btn btn-info mt-8'>
                    <Link to='/'>Go Back To Home</Link>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;