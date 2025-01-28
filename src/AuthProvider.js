import { createContext, useContext, useState } from "react";
import apiInstance from "./api/apiInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const signUp = async (user) => {
    try {
      const response = await apiInstance.post(`/user`, user);
      console.log("AuthProvider:signUp: ", response.data);
      setAuth(response.data)
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const login = async (userCredentials) => {
    try {
      console.log("AuthProvider:login: 01");
      const response = await apiInstance.post(`/user/login`, userCredentials);
      console.log("AuthProvider:login: 02", response.data);
      setAuth(response.data)
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const logout = async () => {
    try {
      const response = await apiInstance.get("/user/logout");
      if (response.data.success) {
        console.log("Logout successful", response.data.message);
        setAuth(null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        localStorage.removeItem("roleName");
      } else {
        console.error("Logout failed", response.data.message);
      }
      return response;
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, logout, login, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);