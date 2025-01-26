import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { auth, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!auth || !allowedRoles.includes(auth.user.role)) {
    return <Navigate to="/signin" />;
  }

  return element;
};

export default ProtectedRoute;