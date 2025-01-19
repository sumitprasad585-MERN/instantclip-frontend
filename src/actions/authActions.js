import axios from 'axios';
import { loginError, loginSuccess } from '../reducers/authReducer';

export const authenticateUser = (email, password) => {
  return async (dispatch, getState) => {
    axios.post('http://localhost:8888/api/v1/users/login', {
      email,
      password
    })
      .then(res => {
        dispatch(loginSuccess(res.data));
        return true;
      })
      .catch(err => {
        dispatch(loginError(err.response.data));
        return false;
      })
  };
};
