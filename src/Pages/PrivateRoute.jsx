// import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (!currentUser) {
    return <Navigate to="/login" />; // Redirect to login if no user is logged in
  }

  return children; // If user is authenticated, allow access to the route
};

export default PrivateRoute;