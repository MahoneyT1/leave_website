import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../components/AuthProvider";
import type { auth } from "../../firebase";

export default function ProtectedAdminRoute({ children }) {
    const { user, isAdmin } = useAuth();

    // if (!user) {
    //     return <Navigate to="/login" replace />;
    // }

    if (!isAdmin) {
        return <p className="text-center text-red-500 mt-10">Access Denied</p>;
    }

    return children;
}
