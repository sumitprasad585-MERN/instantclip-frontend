import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: null,
  refresh_token: null,
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
      state.access_token = action.payload.token;
      state.refresh_token = action.payload.refresh_token;
    },
    loginError: (state, action) => {
      state.userAuthenticated = false
      state.authError = action.payload
    }
  }
});

export const {
  loginSuccess,
  loginError
} = authSlice.actions;

export default authSlice.reducer;
