import React, { createContext, useContext, useState, useEffect } from "react";

const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [navBarType, setNavBarType] = useState("common");

  useEffect(() => {
    const role = localStorage.getItem("roleName");
    if (
      ["owner", "admin", "manager", "supervisor", "accountant"].includes(role)
    ) {
      setNavBarType("admin");
    } else {
      setNavBarType("common");
    }
  }, []);

  return (
    <NavBarContext.Provider value={{ navBarType, setNavBarType }}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBar = () => useContext(NavBarContext);
