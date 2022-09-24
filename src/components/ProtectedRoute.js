import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({children}) => {
  const { user } = UserAuth();

  if (user) {
    return children
  }

  return <Navigate to="/" />;
};

export default ProtectedRoute;
