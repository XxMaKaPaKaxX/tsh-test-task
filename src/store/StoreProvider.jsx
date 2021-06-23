import React, { createContext, useState } from 'react';

export const StoreContext = createContext({});

const StoreProvider = ({ children }) => {

    const [isUserLogged, setIsUserLogged] = useState(true);
    const [userData, setUserData] = useState(null);

    return (
        <StoreContext.Provider value={{
            isUserLogged,
            setIsUserLogged,
            userData,
            setUserData
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;