import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../authSlice/authSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});
