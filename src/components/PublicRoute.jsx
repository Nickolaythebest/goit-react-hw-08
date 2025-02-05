import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/auth/selectors"
import { Navigate } from "react-router-dom";

function PublicRoute({children}) {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? <Navigate to='/contacts' /> : children
}
export default PublicRoute;