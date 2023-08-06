import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Swal from 'sweetalert2';


const SingleProblemPage = () => {
    const loadedProblem = useLoaderData() || [];
    const { title, sub_title, tests } = loadedProblem[0] || {}
    const [code, setCode] = useState('');
    const [output, setOutput] = useState([])

    const handleSubmit = event => {
        event.preventDefault()
        let inputCode;
        let result;
        setOutput([])


        if (code.trim().split('')[0] !== 'function') {
            let array = code.trim().split('')
            if (array[array.length - 1] === ';') {
                array.pop()
            }
            let index = array.indexOf('=')
            array.splice(0, index + 1)
            inputCode = array.join('')
        } else {
            inputCode = code;
        }
        console.log(inputCode);

        for (let item of tests) {
            try {
                result = eval(`(${inputCode})(${item.input})`)
                if (item.output !== result) {
                    console.log('failed');
                    setOutput((output) => [...output, `Failed: ${item.fail} not ${result}`])
                    setAllResult(false)
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something is wrong in your code!'
                    })
                    break;
                } else if (item === tests[tests.length - 1]) {
                    setOutput((output) => [...output, 'Passed'])
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                } else {
                    setOutput((output) => [...output, 'Passed'])
                }
            } catch(error){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message
                })
            }
        }

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
                            <input type="submit" value="Submit" className='px-4 py-2 rounded-md mt-4 text-black bg-[#A2F740] cursor-pointer' />
                        </form>
                        <div className='py-4'>
                            <h3 className='text-xl font-medium'>Output:</h3>
                            <ul className='list-disc ms-8 mt-4'>
                                {output.map((item, index) => <li key={index} className={`text-xl ${item === 'Passed' ? 'text-[#A2F740]' : 'text-red-500'}`}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default SingleProblemPage;