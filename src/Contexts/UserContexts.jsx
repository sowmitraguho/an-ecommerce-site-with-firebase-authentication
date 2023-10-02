import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from 'firebase'


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContexts = ({children}) => {
    const user = {email: 'john Smith'};
    const authInfo = {user};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;