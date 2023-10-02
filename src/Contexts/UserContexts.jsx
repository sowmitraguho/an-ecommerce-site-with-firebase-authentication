import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import app from '../firebase/firebase.config'


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContexts = ({children}) => {

    const [user, setUser] = useState(null);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged((auth, currentUser) => {
            if (currentUser) {
                console.log(currentUser);
                setUser(currentUser);
            } else {
                setUser(null);
            }
        })
        return () => unsubscribe();
    })
    
    const authInfo = {user, createUser, signIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;