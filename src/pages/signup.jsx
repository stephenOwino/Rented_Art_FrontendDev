import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
	const [username, setUsername] = useState("");
	const [fullname, setFullname] = useState("");
	const [publicName, setPublicName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [subscribeToMailingList, setSubscribeToMailingList] = useState(false);
	const [agreedToRules, setAgreedToRules] = useState(false);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		if (!role) {
			alert("Please select a role");
			return;
		}

		if (role === "ARTIST" && !agreedToRules) {
			alert(
				"You must agree to the Rules and Regulations to register as an Artist."
			);
			return;
		}

		if (role === "ARTIST") {
			navigate("/artist-info");
		} else if (role === "RENTER") {
			navigate("/recommendations");
		}

		const userData = {
			username: role === "ARTIST" ? fullname : username,
			publicName: role === "ARTIST" ? publicName : "",
			email: email,
			role: role,
			password: password,
			subscribeToMailingList: subscribeToMailingList,
			agreedToRules: agreedToRules,
		};

		try {
			const response = await fetch("http://127.0.0.1:8000/register/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.detail || "Failed to register");
			}

			const data = await response.json();
			localStorage.setItem("token", data.token);
			navigate("/login");
		} catch (error) {
			setError(error.message);
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

				<div className='flex items-center justify-center mb-6'>
					<button
						type='button'
						className={`px-4 py-2 mr-4 border rounded-md text-sm font-medium ${
							role === "ARTIST"
								? "bg-indigo-600 text-white"
								: "bg-white text-gray-700 border-gray-300"
						}`}
						onClick={() => setRole("ARTIST")}
					>
						Artist
					</button>
					<button
						type='button'
						className={`px-4 py-2 border rounded-md text-sm font-medium ${
							role === "RENTER"
								? "bg-indigo-600 text-white"
								: "bg-white text-gray-700 border-gray-300"
						}`}
						onClick={() => setRole("RENTER")}
					>
						Client
					</button>
				</div>

				<form onSubmit={handleSubmit}>
					{role === "ARTIST" ? (
						<>
							<div className='mb-4'>
								<label className='block text-sm font-medium text-gray-700'>
									Full Name
								</label>
								<input
									type='text'
									value={fullname}
									onChange={(e) => setFullname(e.target.value)}
									className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
									value={publicName}
									onChange={(e) => setPublicName(e.target.value)}
									className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
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
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
							placeholder='Confirm your password'
							required
						/>
					</div>

					<div className='flex items-center mb-4'>
						<input
							type='checkbox'
							id='mailingList'
							checked={subscribeToMailingList}
							onChange={(e) => setSubscribeToMailingList(e.target.checked)}
							className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
						/>
						<label htmlFor='mailingList' className='ml-2 text-sm text-gray-700'>
							Subscribe to our mailing list
						</label>
					</div>

					{role === "ARTIST" && (
						<div className='flex items-center mb-6'>
							<input
								type='checkbox'
								id='rules'
								checked={agreedToRules}
								onChange={(e) => setAgreedToRules(e.target.checked)}
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
			</div>
		</div>
	);
}

export default Signup;
