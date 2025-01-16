import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault(); // Prevent default form submission
		console.log("Login submitted with data: ", formData);
		// Add login logic here (e.g., API call)
	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8'>
			<section className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md sm:max-w-lg'>
				{/* Header */}
				<div className='flex items-center justify-center space-x-2 mb-6'>
					<FaSignInAlt className='text-2xl text-blue-500' />
					<h1 className='text-2xl font-semibold text-gray-700'>Login</h1>
				</div>

				<p className='text-center text-gray-600 text-sm mb-8'>
					Welcome back! Please enter your credentials to log in.
				</p>

				{/* Form */}
				<form onSubmit={onSubmit} className='space-y-6'>
					{/* Email Field */}
					<div>
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={onChange}
							className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
							placeholder='Email'
							required
						/>
					</div>

					{/* Password Field */}
					<div>
						<input
							type='password'
							name='password'
							id='password'
							value={password}
							onChange={onChange}
							className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
							placeholder='Password'
							required
						/>
					</div>

					{/* Submit Button */}
					<div>
						<button
							type='submit'
							className='w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition'
						>
							Login
						</button>
					</div>
				</form>

				{/* Register Link */}
				<div className='flex justify-end mt-6'>
					<p className='text-sm text-gray-600'>
						Don't have an account?{" "}
						<a href='/signup' className='text-blue-600 hover:underline'>
							Register
						</a>
					</p>
				</div>
			</section>
		</div>
	);
};

export default Login;
