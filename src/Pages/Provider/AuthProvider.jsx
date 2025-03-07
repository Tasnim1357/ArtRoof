import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../../firebase/firebase.config';


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser]=useState(null)
    const [loading,setLoading]=useState(true)
   

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const goolgeLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin=()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const profile=(name,photo)=>{
       
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }

           
           
     useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) =>{
            console.log('User in the auth state changed',currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo={user,createUser,logOut,createLogin,loading,profile,goolgeLogin,githubLogin,setLoading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;