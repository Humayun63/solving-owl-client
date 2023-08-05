import React from 'react';
import SingleProblem from './SingleProblem';
import Lottie from "lottie-react";
import animation1 from '../../assets/lottiefiles/animation.json'
import animation2 from '../../assets/lottiefiles/computer-man.json'

const ShowProblems = ({title, items}) => {
    return (
        <>
            <h2 className='text-3xl font-medium text-center my-8 border-b pb-2'>{title}</h2>
            <div className={`flex flex-col md:flex-row justify-between gap-4 items-start`}>
                <div className='w-full md:w-1/2'>
                    <Lottie animationData={animation1} />
                    <hr className={items.length > 5 ? 'md:block' : 'hidden'} />
                    <Lottie animationData={animation2} className={`mt-8 ${items.length > 5 ? 'md:block' : 'hidden'}`} />
                </div>
                <div className='space-y-2 w-full md:w-1/2 pb-4'>
                    {
                        items.map(item => <SingleProblem problem={item}></SingleProblem>)
                    }
                </div>
            </div>
        </>
    );
};

export default ShowProblems;