import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowProblems from '../../components/ShowProblems/ShowProblems';
import Loader from '../../components/Loader/Loader';

const MediumProblems = () => {
    const loadProblems = useLoaderData() || []
    const [problems, setProblems] = useState(loadProblems)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <>
            {
                problems.length === 0 ? <Loader></Loader> : <ShowProblems title={'Medium Problems'} items={problems}></ShowProblems>
            }
        </>
    );
};

export default MediumProblems;