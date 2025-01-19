import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const register = async (userData) => {
	const response = await axios.post(`${API_BASE_URL}/users/register`, userData);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

const login = async (userData) => {
	const response = await axios.post(`${API_BASE_URL}/users/login`, userData);

	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
	register,
	login,
	logout,
};

export default authService;
