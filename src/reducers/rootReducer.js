import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../reducers/authReducer';
import clipReducer from '../reducers/clipReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  clip: clipReducer
});

export default rootReducer;
