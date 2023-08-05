import React from 'react';

const SingleProblem = ({problem}) => {
    const {title, _id, level} = problem || {}
    return (
        <div className='border rounded-md px-4 py-4 hover:bg-black cursor-pointer'>
            <h3 className='text-xl mb-2'>{title}</h3>
            <span className={`px-2 py-1 rounded-lg uppercase ${level === 'easy' ? 'bg-green-400' : level === 'medium' ? 'bg-yellow-400' : 'bg-red-500'}`}>{level}</span>
        </div>
    );
};

export default SingleProblem;