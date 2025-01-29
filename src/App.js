import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Layout from './components/UI/Layout';

const App = () => {
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
