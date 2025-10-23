import type { JSX } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

interface Props {
  children: JSX.Element;
}

const PublicRoutes: React.FC<Props> = ({ children }) => {
  const jwt = useSelector((state: any) => state.jwt);
  if (jwt) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PublicRoutes;
