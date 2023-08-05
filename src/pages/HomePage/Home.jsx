import React, { useEffect, useState } from 'react';
import SingleProblem from './SingleProblem';
import Lottie from "lottie-react";
import animation from './animation.json';
import computerMan from './computer-man.json';

const Home = () => {
    const [problems, setProblems] = useState([])
    useEffect(() => {
        fetch('https://solving-owl-server.vercel.app/all-problems')
            .then(res => res.json())
            .then(data => setProblems(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <h2 className='text-3xl font-medium text-center my-8 border-b pb-2'>All Category Problems</h2>
            <div className='flex flex-col md:flex-row justify-between items-start gap-4'>
                <div className='w-full md:w-1/2'>
                    <Lottie animationData={animation} />
                    <hr className='hidden md:block'/>
                    <Lottie animationData={computerMan} className='mt-8 hidden md:block'/>
                </div>
                <div className='space-y-2 w-full md:w-1/2 pb-4'>
                    {
                        problems.map(problem => <SingleProblem problem={problem}></SingleProblem>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;