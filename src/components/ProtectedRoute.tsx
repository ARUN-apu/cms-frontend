import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles: string[];
}

function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (!allowedRoles.includes(user!.role)) {
        return <Navigate to="/unauthorized" />;
    }

    return <>{children}</>;
}

export default ProtectedRoute;