import React, { createContext, useContext, useState } from "react";

const NavBarContext = createContext();

export const useNavBar = () => useContext(NavBarContext);

export const NavBarProvider = ({ children }) => {
    const [navBarType, setNavBarType] = useState("abc");

    return (
        <NavBarContext.Provider value={{ navBarType, setNavBarType }}>
            {children}
        </NavBarContext.Provider>
    );
};
