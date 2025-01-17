import axios from "axios";

const API_URL = "https://rented-art-server.onrender.com/api/users/register";
const LOGIN_URL = "https://rented-art-server.onrender.com/api/users/login";

//REGISTER USER
const register = async (userData) => {
	const responce = await axios.post(API_URL, userData);

	if (responce.data) {
		localStorage.setItem("user", JSON.stringify(responce.data));
	}
	return responce.data;
};

//LOGIN USER
const login = async (userData) => {
	const responce = await axios.post(LOGIN_URL, userData);

	if (responce.data) {
		localStorage.setItem("user", JSON.stringify(responce.data));
	}
	return responce.data;
};

//LOGOUT USER
const logout = () => {
	localStorage.removeItem("user");
};

const authService = {
	register,
	login,
	logout,
};

export default authService;
