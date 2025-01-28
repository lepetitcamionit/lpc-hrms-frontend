import React from "react";
import { Navigate, useLocation  } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("authToken");
  const role = localStorage.getItem("roleName");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  if (!role || (allowedRoles && !allowedRoles.includes(role))) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
