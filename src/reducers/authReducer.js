import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: null,
  refresh_token: null,
  user: null,
  userAuthenticated: true
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.userAuthenticated = true
    },
    loginError: (state, action) => {
      state.userAuthenticated = false
    }
  }
});

export const {
  loginSuccess,
  loginError
} = authSlice.actions;

export default authSlice.reducer;
