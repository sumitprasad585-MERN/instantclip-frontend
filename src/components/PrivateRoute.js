import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";
import Layout from "./UI/Layout";

const PrivateRoute = ({ children }) => {
  const auth = useSelector(state => state.auth);
  return auth.userAuthenticated ? (
    <Layout>
      {children}
    </Layout>
  ) : <Navigate to="/" replace/>
};

export default PrivateRoute;
