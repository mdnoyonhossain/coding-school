import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged,GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userInfoUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const userGithubSignin = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const userInfo = { user, createUser, userInfoUpdate, userLogin, logOut, loading, userGoogleSignIn, userGithubSignin };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;