import type { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const jwt = useSelector((state: any) => state.jwt);
  if (jwt) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
