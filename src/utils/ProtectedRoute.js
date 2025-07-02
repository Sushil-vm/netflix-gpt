// utils/ProtectedRoute.js
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const user = useSelector((store) => store.user);
  if (!user) return <Navigate to="/" state={{ from: location }} replace />;
  return children;
};

export default ProtectedRoute;
