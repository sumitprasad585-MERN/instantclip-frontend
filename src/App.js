import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import Register from './components/Register';

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
      </Routes>
    </div>
  );
};

export default App;
