import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector(state => state.auth);
  return auth.userAuthenticated ? children : <Navigate to="/" />
};

export default PrivateRoute;
