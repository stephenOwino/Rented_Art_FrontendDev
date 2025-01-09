import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInfo, setError } from "../actions/actions";
import { registerUser } from "../apiService";
import {
	registerUserRequest,
	registerUserSuccess,
	registerUserFailure,
} from "../actions/actions";

function Signup() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// Get data from Redux store
	const { userInfo, error, loading, success } = useSelector(
		(state) => state.signup
	);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		dispatch(setUserInfo({ [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (userInfo.password !== userInfo.confirmPassword) {
			dispatch(setError("Passwords do not match. Please check and try again."));
			return;
		}

		if (!userInfo.role) {
			alert("Please select a role to continue.");
			return;
		}

		if (userInfo.role === "ARTIST" && !userInfo.agreedToRules) {
			alert(
				"You must agree to the Rules and Regulations to register as an Artist."
			);
			return;
		}

		const userData = {
			username:
				userInfo.role === "ARTIST" ? userInfo.fullname : userInfo.username,
			publicName: userInfo.role === "ARTIST" ? userInfo.publicName : "",
			email: userInfo.email,
			role: userInfo.role,
			password: userInfo.password,
			subscribeToMailingList: userInfo.subscribeToMailingList,
			agreedToRules: userInfo.agreedToRules,
		};

		// Show loading spinner
		dispatch(registerUserRequest());

		try {
			const data = await registerUser(userData); // Call the registerUser function from the API service
			localStorage.setItem("token", data.token);

			// Success message upon successful signup
			alert("Registration successful! Redirecting to the login page.");
			navigate("/login");
			dispatch(registerUserSuccess(data)); // Success state
		} catch (error) {
			dispatch(
				registerUserFailure(
					error.message || "Something went wrong. Please try again."
				)
			);
		}
	};

	return (
		<div className='bg-gray-50 w-full p-8'>
			<div className='max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl'>
				<h1 className='text-3xl font-bold mb-6 text-gray-900'>Sign Up</h1>

				{error && (
					<div className='max-w-md mx-auto mb-4 p-2 text-red-700 bg-red-100 border border-red-400 rounded'>
						{error}
					</div>
				)}

				{loading && (
					<div className='text-center py-4'>
						<span>Loading...</span> {/* Or use a spinner here */}
					</div>
				)}

				<div className='flex items-center justify-center mb-6'>
					<button
						type='button'
						className={`px-4 py-2 mr-4 border rounded-md text-sm font-medium ${
							userInfo.role === "ARTIST"
								? "bg-indigo-600 text-white"
								: "bg-white text-gray-700 border-gray-300"
						}`}
						onClick={() => dispatch(setUserInfo({ role: "ARTIST" }))}
					>
						Artist
					</button>
					<button
						type='button'
						className={`px-4 py-2 border rounded-md text-sm font-medium ${
							userInfo.role === "RENTER"
								? "bg-indigo-600 text-white"
								: "bg-white text-gray-700 border-gray-300"
						}`}
						onClick={() => dispatch(setUserInfo({ role: "RENTER" }))}
					>
						Client
					</button>
				</div>

				<form onSubmit={handleSubmit}>
					{userInfo.role === "ARTIST" ? (
						<>
							<div className='mb-4'>
								<label className='block text-sm font-medium text-gray-700'>
									Full Name
								</label>
								<input
									type='text'
									name='fullname'
									value={userInfo.fullname}
									onChange={handleInputChange}
									className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700'
									placeholder='Enter your full name'
									required
								/>
							</div>
							<div className='mb-4'>
								<label className='block text-sm font-medium text-gray-700'>
									Public Name
								</label>
								<input
									type='text'
									name='publicName'
									value={userInfo.publicName}
									onChange={handleInputChange}
									className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700'
									placeholder='Enter your public name'
									required
								/>
							</div>
						</>
					) : (
						<div className='mb-4'>
							<label className='block text-sm font-medium text-gray-700'>
								Username
							</label>
							<input
								type='text'
								name='username'
								value={userInfo.username}
								onChange={handleInputChange}
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700'
								placeholder='Enter Username'
								required
							/>
						</div>
					)}

					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-700'>
							Email
						</label>
						<input
							type='email'
							name='email'
							value={userInfo.email}
							onChange={handleInputChange}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700'
							placeholder='Enter your email'
							required
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-700'>
							Password
						</label>
						<input
							type='password'
							name='password'
							value={userInfo.password}
							onChange={handleInputChange}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700'
							placeholder='Enter your password'
							required
						/>
					</div>

					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-700'>
							Confirm Password
						</label>
						<input
							type='password'
							name='confirmPassword'
							value={userInfo.confirmPassword}
							onChange={handleInputChange}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700'
							placeholder='Confirm your password'
							required
						/>
					</div>

					<div className='flex items-center mb-4'>
						<input
							type='checkbox'
							id='mailingList'
							name='subscribeToMailingList'
							checked={userInfo.subscribeToMailingList}
							onChange={handleInputChange}
							className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
						/>
						<label htmlFor='mailingList' className='ml-2 text-sm text-gray-700'>
							Subscribe to our mailing list
						</label>
					</div>

					{userInfo.role === "ARTIST" && (
						<div className='flex items-center mb-6'>
							<input
								type='checkbox'
								id='rules'
								name='agreedToRules'
								checked={userInfo.agreedToRules}
								onChange={handleInputChange}
								className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
								required
							/>
							<label htmlFor='rules' className='ml-2 text-sm text-gray-700'>
								I agree to the Rules and Regulations
							</label>
						</div>
					)}

					<button
						type='submit'
						className='w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
					>
						Sign Up
					</button>
				</form>

				{success && (
					<div className='mt-4 text-green-600 text-center'>
						Registration Successful! Redirecting to the login page...
					</div>
				)}
			</div>
		</div>
	);
}

export default Signup;
