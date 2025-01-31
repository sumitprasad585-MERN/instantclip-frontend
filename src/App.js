import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.scss';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Layout from './components/UI/Layout';
import ClipDetails from './components/ClipDetails';

const App = () => {
  const location = useLocation();

  /**
   * As the redux store is not persisted in the application due to security considerations,
   * save the last visited route in the session storage. This will be used to redirect user
   * to the same page after the page refresh once the credentials are validated on page
   * refresh.
   */
  useEffect(() => {
    if (location.pathname !== '/') {
      sessionStorage.setItem('lastRoute', location.pathname);
    }
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/clips/:id"
          element={
            <PrivateRoute>
                <ClipDetails />
              </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
