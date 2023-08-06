import React, { useEffect, useState } from 'react';
import ShowProblems from '../../components/ShowProblems/ShowProblems';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const EasyProblems = () => {
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
                problems.length === 0 ? <Loader></Loader> : <ShowProblems title={'Easy Problems'} items={problems}></ShowProblems>
            }
        </>
    );
};

export default EasyProblems;