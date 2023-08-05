import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const SingleProblemPage = () => {
    const loadedProblem = useLoaderData() || [];
    const {title, sub_title} = loadedProblem[0] || {}
    return (
        <>
            {
                loadedProblem.length === 0 ? <Loader></Loader> : <>
                    <div className='mt-4'>
                        <h2 className='text-2xl font-semibold mb-4'>* {title}</h2>
                        <p>{sub_title}</p>
                    </div>
                </>
            }
        </>
    );
};

export default SingleProblemPage;