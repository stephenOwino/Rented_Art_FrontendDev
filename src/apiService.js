const BASE_URL = "https://rented-art-server.onrender.com/api/users";

// General Function to register User (Artist or Renter)
export const registerUser = async (userData, userType) => {
	const endpoint =
		userType === "artist" ? "register/artist" : "register/renter";

	try {
		const response = await fetch(`${BASE_URL}/${endpoint}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || `Error registering ${userType}`);
		}

		return data;
	} catch (error) {
		throw new Error(error.message || "An unexpected error occurred");
	}
};

// Function to register Artist
export const registerArtist = async (artistData) => {
	return await registerUser(artistData, "artist");
};

// Function to register Renter
export const registerRenter = async (renterData) => {
	return await registerUser(renterData, "renter");
};

// Function to login Artist
export const loginArtist = async (artistData) => {
	try {
		const response = await fetch(`${BASE_URL}/login/artist`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(artistData),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || "Error logging in artist");
		}

		return data;
	} catch (error) {
		throw new Error(error.message || "An unexpected error occurred");
	}
};

// Function to login Renter
export const loginRenter = async (renterData) => {
	try {
		const response = await fetch(`${BASE_URL}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(renterData),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || "Error logging in renter");
		}

		return data;
	} catch (error) {
		throw new Error(error.message || "An unexpected error occurred");
	}
};
