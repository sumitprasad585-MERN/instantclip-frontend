import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export default store;
