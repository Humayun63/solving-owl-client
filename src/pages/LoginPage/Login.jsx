import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import animation from '../../assets/lottiefiles/animation.json'
import Lottie from "lottie-react";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const { setTitle, googleSignIn, emailSignIn, githubSignIn } = useContext(AuthContext) || {}
    const navigate = useNavigate();

    setTitle('Login |')

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = {
                    email: result?.user?.email,
                    name: result?.user?.displayName
                }

                fetch('https://solving-owl-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `Welcome ${result?.user?.displayName || 'User'}`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/home', { replace: true })
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error?.message,
                        })
                    })


            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error?.message,
                })
            })
    }
    const handleGithubLogin = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = {
                    email: result?.user?.email,
                    name: result?.user?.displayName
                }

                fetch('https://solving-owl-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `Welcome ${result?.user?.displayName || 'User'}`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/home', { replace: true })
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error?.message,
                        })
                    })


            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error?.message,
                })
            })
    }
    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        emailSignIn(email, password)
            .then(result => {
                Swal.fire({
                    position: 'center',
                    icon: 'success login',
                    title: `Welcome ${result?.user?.displayName || 'User'}`,
                    showConfirmButton: false,
                    timer: 1500
                })
                form.reset()
                navigate('/home', { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
            })
    }

    return (
        <>
            <div className='flex flex-col md:flex-row gap-4 justify-between items-center mt-4'>
                <div className='w-full md:w-1/2'>
                    <Lottie animationData={animation}></Lottie>
                </div>
                <div className='w-full md:w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <form className="" onSubmit={handleSignIn}>
                        <h2 className='text-black text-3xl py-4 font-semibold'>Login your account!</h2>
                        <hr className='mb-4' />
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-slate-700 text-white hover:bg-slate-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                        <p className='text-black mt-2'>New to Solving Owl? <Link to='/register' className='underline font-semibold'>Register Now</Link></p>
                    </form>
                    <hr className='my-4' />
                    <div className='text-center space-x-2 space-y-2'>
                        <button className='bg-slate-700 hover:bg-slate-950 inline-flex items-center px-4 py-2 rounded gap-2' onClick={handleGoogleLogin}>
                            <FaGoogle className='text-2xl'></FaGoogle>
                            <span className=''>Login With Google</span>
                        </button>
                        <button className='bg-slate-700 hover:bg-slate-950 inline-flex items-center px-4 py-2 rounded gap-2' onClick={handleGithubLogin}>
                            <FaGithub className='text-2xl'></FaGithub>
                            <span className=''>Login With GitHub</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;