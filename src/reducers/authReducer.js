import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userAuthenticated: false,
  authError: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.userAuthenticated = true;
    },
    loginError: (state, action) => {
      state.userAuthenticated = false
      state.authError = action.payload
    },
    logoutSuccess: (state, action) => {
      state.userAuthenticated = false;
    }
  }
});

export const {
  loginSuccess,
  loginError,
  logoutSuccess
} = authSlice.actions;

export default authSlice.reducer;
