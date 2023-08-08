import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [title, setTitle] = useState('')
    const [loading, setLoading] = useState(true)
    const [isSolved, setIsSolved] = useState([])
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        if (user) {
            fetch(`https://solving-owl-server.vercel.app/users/single-user/${user?.email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access-token')}`
                },
            })
                .then(res => res.json())
                .then(data => setUserDetails(data))
                .catch(error => console.log(error))
        }
    }, [user])



    useEffect(() => {
        if (user && userDetails?.solved) {
            setIsSolved(userDetails?.solved)
        }

        if (!user && localStorage.getItem('solvedProblems')) {
            setIsSolved(JSON.parse(localStorage.getItem('solvedProblems')))
        }
        if (user) {
            localStorage.removeItem('solvedProblems')
        }
    }, [userDetails])

    console.log(userDetails)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const emailSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        document.title = `${title} Solving Owl`
    }, [title])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            // Token related
            if (currentUser) {
                axios.post('https://solving-owl-server.vercel.app/jwt', {
                    email: currentUser.email
                })
                    .then(data => {
                        // console.log(data)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                    })
            } else {
                localStorage.removeItem('access-token')
            }

            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setTitle,
        createUser,
        emailSignIn,
        googleSignIn,
        githubSignIn,
        updateUser,
        logOut,
        setIsSolved,
        isSolved,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;