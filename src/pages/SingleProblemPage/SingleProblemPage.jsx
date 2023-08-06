import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import CodeEditor from '@uiw/react-textarea-code-editor';

const SingleProblemPage = () => {
    const loadedProblem = useLoaderData() || [];
    const { title, sub_title } = loadedProblem[0] || {}
    const [code, setCode] = useState('');

    const handleSubmit = () =>{
        event.preventDefault()
        console.log(code)
    }
    return (
        <>
            {
                loadedProblem.length === 0 ? <Loader></Loader> : <>
                    <div className='mt-4'>
                        <h2 className='text-2xl font-semibold mb-4'>* {title}</h2>
                        <p>{sub_title}</p>
                        <form className='py-4' onSubmit={handleSubmit}>
                            <CodeEditor
                                className='rounded-lg'
                                value={code}
                                language="js"
                                minHeight={250}
                                placeholder="Please type your solution here."
                                data-color-mode="dark"
                                onChange={(evn) => setCode(evn.target.value)}
                                padding={15}
                                style={{
                                    fontSize: 14,
                                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                                }}
                            />
                            <input type="submit" value="Submit" className='px-4 py-2 rounded-md mt-4 text-black bg-[#A2F740] cursor-pointer'/>
                        </form>
                    </div>
                </>
            }
        </>
    );
};

export default SingleProblemPage;