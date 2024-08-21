import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};

		try {
			const response = await axios.post("/api/login", userData); // Pass userData here
			localStorage.setItem("token", response.data.token);
			window.location.href = "/";
		} catch (error) {
			setError(error.message);
		}

		navigate("/");
	};

	return (
		<div className='container mx-auto p-4 pt-12 md:p-12 lg:p-20'>
			<h1 className='text-4xl font-bold mb-4 text-indigo-700 drop-shadow-lg'>
				<div className='text-5xl drop-shadow-sm text-indigo-700'>
					𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-[70px]'>.</span>
				</div>
			</h1>

			<form
				onSubmit={handleSubmit}
				className='max-w-md mx-auto p-4 space-y-4 text-left'
			>
				<div>
					<label className='block text-sm font-medium text-gray-700'>
						Email
					</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						placeholder='Enter your email'
						required
					/>
				</div>

				<div>
					<label className='block text-sm font-medium text-gray-700'>
						Password
					</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						placeholder='Enter your password'
						required
					/>
				</div>

				<button
					type='submit'
					className='w-full py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
				>
					Login
				</button>

				<div className='text-gray-700  mt-12 text-lg flex flex-row justify-between'>
					<div>Don't have account?</div>
					<a href='/signup' className='font-[600] underline'>
						REGISTER
					</a>
				</div>
			</form>
		</div>
	);
}

export default Login;
