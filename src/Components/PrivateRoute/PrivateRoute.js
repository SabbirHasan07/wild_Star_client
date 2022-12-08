import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../Contex/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContex);
    const location = useLocation();
    if (loading) {
        return (

            
                <span className="sr-only">Loading...</span>
           

        );
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;




getAllBookings(user?.email).then(data => {
      console.log(data)
      setBookings(data)
      setLoading(false)