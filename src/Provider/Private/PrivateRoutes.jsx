import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Fallback from '../../Components/Fallback/Fallback';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Fallback />
    }
    if (user && user.email) {
        return children
    }
    else {
        return <Navigate state={location.pathname} to='/sign-in' replace={true} />
    }
};

export default PrivateRoutes;