import useAuth from "../pages/Hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    // Check if the current route is the property details route
    const isPropertyDetailsRoute = location.pathname.startsWith('/property/');

    if (loading && !isPropertyDetailsRoute) {
        // Display loading spinner only if it's not the property details route
        return <span className="text-center loading loading-infinity loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname || '/'} to="/login"></Navigate>;
};

export default PrivateRoute;
