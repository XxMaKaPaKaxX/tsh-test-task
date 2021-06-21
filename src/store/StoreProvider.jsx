import React, { createContext, useState } from 'react';

export const StoreContext = createContext({});

const StoreProvider = ({ children }) => {

    const [isUserLogged, setIsUserLogged] = useState(true);

    return (
        <StoreContext.Provider value={{
            isUserLogged,
            setIsUserLogged,
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;