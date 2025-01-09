import {
	SET_USER_INFO,
	SET_ERROR,
	RESET_SIGNUP_FORM,
	REGISTER_USER_REQUEST,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_FAILURE,
} from "../actions/actions";

// Initial State
export const initialState = {
	userInfo: {
		username: "",
		fullname: "",
		publicName: "",
		email: "",
		password: "",
		confirmPassword: "",
		role: "",
		subscribeToMailingList: false,
		agreedToRules: false,
	},
	error: null,
	loading: false, // Add loading state for asynchronous actions
	success: false, // Track success state
};

// Reducer
const signupReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_USER_REQUEST:
			return {
				...state,
				loading: true, // Set loading state when API call starts
				success: false,
				error: null, // Clear error when new request starts
			};

		case REGISTER_USER_SUCCESS:
			return {
				...state,
				userInfo: action.payload || state.userInfo, // Save user data or keep current state
				loading: false, // Set loading to false when request is successful
				success: true, // Set success to true
				error: null, // Clear any errors on success
			};

		case REGISTER_USER_FAILURE:
			return {
				...state,
				loading: false, // Set loading to false on failure
				error: action.payload, // Set the error message
				success: false,
			};

		case SET_USER_INFO:
			return {
				...state,
				userInfo: {
					...state.userInfo,
					...action.payload, // Merge the new user info data
				},
			};

		case SET_ERROR:
			return {
				...state,
				error: action.payload, // Store the error message
			};

		case RESET_SIGNUP_FORM:
			return initialState; // Reset everything to initial state

		default:
			return state;
	}
};

export default signupReducer;
