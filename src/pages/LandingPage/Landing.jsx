import React from 'react';
import Lottie from "lottie-react";
import animation from './animation.json'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import LongText from './LongText';

const Landing = () => {
    

    return (
        <div className='flex flex-col-reverse md:flex-row w-full gap-4 justify-between items-center pb-4'>
            <div className='w-full px-2 md:w-1/2'>
                <h2 className='text-2xl md:text-xl front-bold text-[#A2F740]'>Welcome to Solving Owl</h2>
                <h2>
                    <TypeAnimation
                        sequence={[
                            'Ready to fight!',
                            1000,
                            'Solve.Excel.Repeat',
                            1000,
                            'Crack problems with magic',
                            1000,
                            'Be an ultra Solving OWL',
                            1000,
                            'Crack.Innovate.Succeed',
                            1000,
                            'Debug.Enhance.Triumph',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1.5em', display: 'inline-block', fontWeight: 'bold' }}
                        repeat={Infinity}
                    />
                </h2>
                <p className='text-lg text-justify my-4'>
                    <LongText maxWords={30}></LongText>
                </p>
                <Link to='/home'>
                    <button className='w-full md:w-1/2 px-4 py-2 mt-4 rounded-md text-black bg-[#A2F740]'>Starts The Journey Now!</button>
                </Link>
            </div>
            <div className='md:w-1/2'>
                <Lottie animationData={animation} />
            </div>
        </div>
    );
};

export default Landing;