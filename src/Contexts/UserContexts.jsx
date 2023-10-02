import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config'


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContexts = ({children}) => {

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const user = {email: 'john Smith'};
    const authInfo = {user};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;