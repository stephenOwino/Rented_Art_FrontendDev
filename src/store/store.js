import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import { thunk } from "redux-thunk";

// Create the Redux store with thunk middleware and Redux DevTools
const store = configureStore({
	reducer: rootReducer, // Root reducer
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add thunk middleware
	devTools: process.env.NODE_ENV !== "production", // Enable DevTools in development only
});

export default store;
