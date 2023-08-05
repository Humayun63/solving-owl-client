import React from 'react';
import { Link } from 'react-router-dom';

const SingleProblem = ({ problem }) => {
    const { title, _id, level } = problem || {}
    return (
        <Link to={`/problems/${_id}`}>
            <div className='border rounded-md px-4 py-4 hover:bg-black mb-4'>
                <h3 className='text-xl mb-2'>{title}</h3>
                <span className={`px-2 py-1 rounded-lg uppercase ${level === 'easy' ? 'bg-green-400' : level === 'medium' ? 'bg-yellow-400' : 'bg-red-500'}`}>{level}</span>
            </div>
        </Link>
    );
};

export default SingleProblem;