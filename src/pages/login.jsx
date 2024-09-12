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
		<div className='bg-gradient-to-l from-indigo-700 via-amber-500 to-lime-300 w-[100%] p-20 h-screen'>
		<div className='container mx-auto p-2 pt-4 md:px-4 md:pb-12 lg:pb-12 lg:px-8 bg-white shadow-xl rounded-2xl h-4/5 w-2/5'>

			<h1 className='text-4xl font-bold mb-4 text-indigo-800 drop-shadow-lg'>
				<div className='text-5xl drop-shadow-sm text-indigo-800'>
					𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-[70px]'>.</span>
				</div>
			</h1>

		
			{error && (
				<div className='max-w-md mx-auto mb-4 p-2 text-red-700 bg-red-100 border border-red-400 rounded'>
					{error}
				</div>
			)}
         
			<form
				onSubmit={handleSubmit}
				className='max-w-md mx-auto p-4 space-y-4 text-left'
			>
				<div>
					<label className='block text-sm font-medium text-gray-700'>
						Username
					</label>
					<input
						type='string'
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
					className='w-full py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
		</div>
	);
}

export default Login;
