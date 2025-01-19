import { useState, useEffect } from 'react';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const authError = auth.authError;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = dispatch(authenticateUser(email, password));
    if (success) navigate('/home');
  };

  useEffect(() => {
    if (auth.userAuthenticated) {
      navigate('/home');
    }
  }, [auth, navigate]);

  return (
    <div className="Login">
      {
        (authError && authError.message) &&
        <div className="Login-error">
          {authError.message}
        </div> 
      }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
