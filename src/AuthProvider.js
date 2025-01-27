import { createContext, useContext, useState, useEffect } from "react";
import apiInstance from "./api/apiInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAuthState = async () => {
//       try {
//         console.log("AuthProvider: fetchAuthState 01");
//         console.log("AuthProvider: fetchAuthState 02", auth);
//         const response = await apiInstance.get("/user/auth/session", {
//           withCredentials: true,
//         });
//         console.log("AuthProvider: fetchAuthState 03", response);
//         if (response.data) {
//           setAuth(response.data);
//         }
//       } catch (error) {
//         console.error("Failed to validate session:", error);
//         setAuth(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAuthState();
//   }, []);

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