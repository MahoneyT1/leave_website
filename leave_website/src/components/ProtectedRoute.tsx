import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase"; // make sure path is correct

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const user = auth.currentUser;

    if (!user) {
        // If user is not logged in, redirect to login page
        return <Navigate to="/login"  />;
    }

    // If logged in, render the child component
    return children;
};

export default ProtectedRoute;
