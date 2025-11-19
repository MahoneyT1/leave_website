import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

interface PublicRouteProps {
    children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const user = auth.currentUser;

    // If user is logged in, redirect to dashboard
    if (user) {
        return <Navigate to="/" replace />;
    }

    // Otherwise, allow access
    return children;
};

export default PublicRoute;
