import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";
export const AuthContex = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const loginProvider = provider=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateProfileuser = (profile) =>{
        return updateProfile(auth.currentUser, profile);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            console.log('inside auth state change', currentUser);
            if(currentUser === null || currentUser.uid){
                setUser(currentUser);
            }
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    
    const authInfo ={ loginProvider ,createUser,logIn,logOut,user,loading,setLoading,updateProfileuser }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;