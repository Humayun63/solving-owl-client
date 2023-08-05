import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowProblems from '../../components/ShowProblems/ShowProblems';

const Home = () => {
    const loadProblems = useLoaderData() || []
    const [problems, setProblems] = useState(loadProblems)

    return (
        <>
            <ShowProblems title={'All Category Problems'} items={problems}></ShowProblems>
        </>
    );
};

export default Home;