import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';


const SingleProblemPage = () => {
    const loadedProblem = useLoaderData() || [];
    const { user, isSolved, setIsSolved } = useContext(AuthContext) || {}
    const { title, sub_title, tests, _id } = loadedProblem[0] || {}
    // const { title, sub_title, _id } = loadedProblem[0] || {}
    const [dontShow, setDontShow] = useState(false)
    const [code, setCode] = useState('');
    const [output, setOutput] = useState([])
    const navigate = useNavigate()




    function large(arr) {
        const sorted = arr.sort((a, b) => b - a)
        return sorted[0]
    }

    let solvedIds = []
    if (isSolved) {
        solvedIds = isSolved
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const handleSubmit = event => {
        event.preventDefault()
        let inputCode;
        let result;
        setOutput([])

        const isArrowFunction = code.trim().split(' ')[0] !== 'function';

        if (isArrowFunction) {
            let array = code.trim().split('')
            if (array[array.length - 1] === ';') {
                array.pop()
            }
            let index = array.indexOf('=')
            array.splice(0, index + 1)
            inputCode = array.join('')
        } 
       

        for (let item of tests) {
            try {
                if (isArrowFunction) {
                    console.log('arrow calling', inputCode)
                    result = eval(`(${inputCode})(${item.input})`)
                } else {
                    console.log('normal calling', code)
                    result = eval(`(${code})(${item.input})`)
                }

                if (item.output !== result) {
                    setOutput((output) => [...output, `Failed: ${item.fail} not ${result}`])
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something is wrong in your code!'
                    })
                    break;
                } else if (item === tests[tests.length - 1]) {
                    setOutput((output) => [...output, 'Passed'])
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Solved The Problem!',
                        showConfirmButton: false,
                        timer: 1500
                    })


                    // Save problem id
                    if (user && user.email) {
                        fetch('https://solving-owl-server.vercel.app/user/solved', {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('access-token')}`
                            },
                            body: JSON.stringify({ email: user?.email, problemId: _id })
                        })
                            .then(res => res.json())
                            .then(data => {
                                setIsSolved([...isSolved, _id])
                            })
                            .catch(error => {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops....',
                                    text: `Something Went wrong : ${error?.message}`
                                })
                            })
                    } else {
                        // Save to local storage
                        const solvedProblems = localStorage.getItem('solvedProblems')
                        if (solvedProblems) {
                            const solvedProblemsParsed = JSON.parse(solvedProblems)
                            if (solvedProblemsParsed.includes(_id)) {
                                console.log('Already Solved')
                            } else {
                                solvedProblemsParsed.push(_id)
                                localStorage.setItem('solvedProblems', JSON.stringify(solvedProblemsParsed))
                                setIsSolved([...isSolved, _id])
                            }
                        } else {
                            localStorage.setItem('solvedProblems', JSON.stringify([_id]))
                            setIsSolved([...isSolved, _id])
                        }
                        if (!user && !dontShow) {
                            Swal.fire({
                                title: 'You are not logged in!',
                                text: 'Login for track your process',
                                showDenyButton: true,
                                showCancelButton: true,
                                confirmButtonText: 'Login',
                                denyButtonText: `Don't show this again`,
                            }).then((result) => {
                                /* Read more about isConfirmed, isDenied below */
                                if (result.isConfirmed) {
                                    navigate('/login', { replace: true })
                                } else if (result.isDenied) {
                                    setDontShow(true)
                                }
                            })
                        }
                    }

                } else {
                    setOutput((output) => [...output, 'Passed'])
                }
            } catch (error) {
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
                        <p className='md:flex justify-between'>{sub_title} {isSolved.includes(_id) && <span className='text-black bg-[#A2F740] px-2 py-1 rounded-md'>Solved</span>}</p>
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