import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const ProtectedRoute = ({ children }) => {
    const { session } = useSupabaseAuth();
    const location = useLocation();

    if (!session) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;