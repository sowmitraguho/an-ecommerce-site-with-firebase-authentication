import React, { createContext } from 'react';


export const AuthContext = createContext();
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