import React, { useState } from 'react';
import ShowProblems from '../../components/ShowProblems/ShowProblems';
import { useLoaderData } from 'react-router-dom';

const AdvanceProblems = () => {
    const loadProblems = useLoaderData() || []
    const [problems, setProblems] = useState(loadProblems)
    return (
        <ShowProblems title={'Advanced Problems'} items={problems}></ShowProblems>
    );
};

export default AdvanceProblems;