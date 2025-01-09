import { registerUser } from "../apiService";

// Action Types
export const SET_USER_INFO = "SET_USER_INFO";
export const SET_ERROR = "SET_ERROR";
export const RESET_SIGNUP_FORM = "RESET_SIGNUP_FORM";
export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

// Action Creators
export const setUserInfo = (userInfo) => ({
	type: SET_USER_INFO,
	payload: userInfo,
});

export const setError = (error) => ({
	type: SET_ERROR,
	payload: error,
});

export const resetSignupForm = () => ({
	type: RESET_SIGNUP_FORM,
});

// New Action Creators for registration
export const registerUserRequest = () => ({
	type: REGISTER_USER_REQUEST,
});

export const registerUserSuccess = (userData) => ({
	type: REGISTER_USER_SUCCESS,
	payload: userData,
});

export const registerUserFailure = (error) => ({
	type: REGISTER_USER_FAILURE,
	payload: error,
});

// Thunk action for registering user
export const registerUserThunk = (userData) => {
	return async (dispatch) => {
		dispatch(registerUserRequest()); // Start loading state

		try {
			const data = await registerUser(userData); // Make the API call to register user
			localStorage.setItem("token", data.token); // Store the token in localStorage
			dispatch(registerUserSuccess(data)); // Dispatch success action
			return data; // Optionally return the response for use in the component
		} catch (error) {
			dispatch(registerUserFailure(error.message || "Something went wrong.")); // Dispatch failure action
			throw error; // Throw error to be caught by the component
		}
	};
};
