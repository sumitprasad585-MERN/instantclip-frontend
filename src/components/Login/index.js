import { useState, useEffect } from 'react';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from '../../actions/authActions';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { loginSuccess } from '../../reducers/authReducer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const auth = useSelector((state) => state.auth);
  const authError = auth.authError;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const success = await dispatch(authenticateUser(email, password));
    if (success) navigate('/home');
  };

  useEffect(() => {
    if (auth.userAuthenticated) {
      const lastRoute = sessionStorage.getItem('lastRoute');
      lastRoute ? navigate(lastRoute) : navigate('/home');
      return;
    }
    const token = Cookies.get('token');
    if (token) {
      dispatch(loginSuccess())
    }
  }, [auth.userAuthenticated, dispatch, navigate]);

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Please enter the email';
    if (!password) newErrors.password = 'Please enter the password';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <header className="Login-header">
          <h1>Instantclip</h1>
        </header>
        <div className="submit-error-wrapper">
          {authError?.message ? (
            <div className="Login-error">{authError.message}</div>
          ): '\u00A0'}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="input-error-wrapper">
              <span className="input-error">
                {errors?.email || '\u00A0'}
              </span>
            </div>            
          </div>
          <div className="form-group">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="input-error-wrapper">
              <span className="input-error">
                {errors?.password || '\u00A0'}
              </span>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="Login-register">
          <Link to="/register">Dont' have an account? Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
