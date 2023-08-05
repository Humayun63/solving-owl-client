import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowProblems from '../../components/ShowProblems/ShowProblems';
import Loader from '../../components/Loader/Loader';

const Home = () => {
    const loadProblems = useLoaderData() || []
    const [problems, setProblems] = useState(loadProblems)

    return (
        <>
            {
                problems.length === 0 ? <Loader></Loader> : <ShowProblems title={'All Category Problems'} items={problems}></ShowProblems>
            }
            
        </>
    );
};

export default Home;