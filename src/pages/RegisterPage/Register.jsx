import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import animation from '../../assets/lottiefiles/computer-man.json'
import Lottie from "lottie-react";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const { setTitle, googleSignIn, emailSignIn } = useContext(AuthContext) || {}
    const [selectedImage, setSelectedImage] = useState(null);

    
    setTitle('Register |')
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    
    const handleGoogleLogin = () => {
        
    }
    const handleSignIn = event => {
        
    }
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    
    return (
        <>
            <div className='flex flex-col md:flex-row gap-4 justify-between items-center my-8'>
                <div className='w-full md:w-1/2'>
                    <Lottie animationData={animation}></Lottie>
                </div>
                <div className='w-full md:w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <form className="">
                        <h2 className='text-black text-3xl py-4 font-semibold'>Register to Solving Owl!</h2>
                        <hr className='mb-4' />
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
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
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Select An Image
                            </label>
                            <input
                                className="appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                            />
                            {selectedImage && (
                                <div className="mt-4">
                                    <img src={selectedImage} alt="Selected" className="w-14 border p-2 h-auto" />
                                </div>
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-slate-700 text-white hover:bg-slate-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Register
                            </button>
                        </div>
                        <p className='text-black mt-2'>Already have account? <Link to='/login' className='underline font-semibold'>Login Now</Link></p>
                    </form>
                    <hr className='my-4' />
                    <div className='text-center space-x-2 space-y-2'>
                        <button className='bg-slate-700 hover:bg-slate-950 inline-flex items-center px-4 py-2 rounded gap-2'>
                            <FaGoogle className='text-2xl'></FaGoogle>
                            <span className=''>Register With Google</span>
                        </button>
                        <button className='bg-slate-700 hover:bg-slate-950 inline-flex items-center px-4 py-2 rounded gap-2'>
                            <FaGithub className='text-2xl'></FaGithub>
                            <span className=''>Register With Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;