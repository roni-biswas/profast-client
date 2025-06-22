import React, { useState } from "react";
import Loading from "../pages/shared/Loading/Loading";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useState();

  if (loading) return <Loading />;

  if (!user) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;
