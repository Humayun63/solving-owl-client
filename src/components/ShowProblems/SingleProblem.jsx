import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SingleProblem = ({ problem }) => {
    const { isSolved } = useContext(AuthContext) || {}
    const { title, _id, level } = problem || {}
    
    let solvedIds = []
    if(isSolved){
        solvedIds = isSolved
    }

    return (
        <Link to={`/problems/${_id}`}>
            <div className={`border rounded-md px-4 py-4 hover:bg-black mb-4 ${solvedIds.includes(_id) ? 'bg-slate-500' : ''}`}>
                <h3 className='text-xl mb-2'>{title}</h3>
                <span className={`px-2 py-1 rounded-lg uppercase ${level === 'easy' ? 'bg-green-400' : level === 'medium' ? 'bg-yellow-400' : 'bg-red-500'}`}>{level}</span>
                {
                    solvedIds.includes(_id) && <span className={`px-2 py-1 rounded-lg uppercase bg-green-400 mx-4`}>Solved</span>
                }
            </div>
        </Link>
    );
};

export default SingleProblem;