import React, { useState } from 'react';
import ShowProblems from '../../components/ShowProblems/ShowProblems';
import { useLoaderData } from 'react-router-dom';

const EasyProblems = () => {
    const loadProblems = useLoaderData() || []
    const [problems, setProblems] = useState(loadProblems)
    return (
        <ShowProblems title={'Easy Problems'} items={problems}></ShowProblems>
    );
};

export default EasyProblems;