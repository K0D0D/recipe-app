import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthUser } from "../../redux/auth/authSelectors";

const PrivateRoute = ({ children }) => {
    const user = useSelector(selectAuthUser);

    return user ? children : <Navigate to="/auth" />; 
}

export default PrivateRoute;