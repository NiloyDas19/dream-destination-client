import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-2 border-brand-200 border-t-brand-700 rounded-full animate-spin" />
                    <p className="text-body-sm text-neutral-400">Loading...</p>
                </div>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" />;
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoutes;