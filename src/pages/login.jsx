import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userData = {
			username,
			password,
		};

		try {
			const response = await fetch("http://127.0.0.1:8000/api/login/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			localStorage.setItem("token", data.token);
			window.location.href = "/";
			navigate("/");
		} catch (error) {
			setError("Invalid username or password. Please try again.");
		}
	};

	return (
		<div className='bg-gray-50 w-full p-6 md:p-10 h-screen'>
			<div className='container mx-auto p-4 md:px-6 md:py-12 bg-white shadow-xl rounded-2xl w-full md:w-2/3 lg:w-1/3 xl:w-1/4'>
				<h1 className='text-4xl font-bold mb-4 text-gray-900'>
					<div className='text-5xl text-gray-800'>𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙</div>
				</h1>

				{/* Error Message */}
				{error && (
					<div className='max-w-md mx-auto mb-4 p-2 text-red-700 bg-red-100 border border-red-400 rounded'>
						{error}
					</div>
				)}

				{/* Form */}
				<form
					onSubmit={handleSubmit}
					className='max-w-md mx-auto p-4 space-y-4 text-left'
				>
					<div>
						<label className='block text-sm font-medium text-gray-700'>
							Username
						</label>
						<input
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
							placeholder='Enter your username'
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
						className='w-full py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
					>
						Login
					</button>

					{/* Register Link */}
					<div className='text-gray-700 mt-12 text-lg flex flex-row justify-between'>
						<div>Don't have an account?</div>
						<a
							href='/signup'
							className='font-semibold text-blue-600 hover:underline'
						>
							REGISTER
						</a>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
