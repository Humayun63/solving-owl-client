import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowProblems from '../../components/ShowProblems/ShowProblems';

const MediumProblems = () => {
    const loadProblems = useLoaderData() || []
    const [problems, setProblems] = useState(loadProblems)
    return (
        <ShowProblems title={'Medium Problems'} items={problems}></ShowProblems>
    );
};

export default MediumProblems;