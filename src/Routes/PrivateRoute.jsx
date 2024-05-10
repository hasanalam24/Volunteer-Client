import { useContext } from "react";
import { AppContext } from "../Firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AppContext)
    const location = useLocation()


    if (loading) {
        return <span className="loading loading-spinner text-secondary"></span>
    }
    if (user) {
        return children;
    }
    console.log(location)
    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>

};

export default PrivateRoute;