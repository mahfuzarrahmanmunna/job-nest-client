import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user);

    // create user here
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin with email pass
    const signInPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signin with google
    const signinWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // updateProfile
    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    // user Logout
    const logOutUser = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const authData = {
        user,
        setUser,
        createUser,
        loading,
        setLoading,
        signInPass,
        updateUser,
        logOutUser,
        signinWithGoogle
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;