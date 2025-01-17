import { useState, useEffect } from "react";
import { FaSignInAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../authSlice/authSlice";
import { toast } from "react-toastify";
import LoadingSpinner from "./spinner/LoadingSpinner";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	const { email, password } = formData;

	useEffect(() => {
		if (isError) {
			// Custom handling for user not found
			if (message.includes("not found")) {
				toast.error(`${message}. Please register.`);
			} else {
				toast.error(message);
			}
			// Reset error after showing the message
			dispatch(reset());
		}

		if (isSuccess || user) {
			// Redirect to homepage on successful login
			navigate("/");
		}
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onSubmit = (e) => {
		e.preventDefault();
		// Clear previous errors before login attempt
		dispatch(reset());

		const userData = {
			email,
			password,
		};
		dispatch(login(userData));
	};

	if (isLoading) {
		return <LoadingSpinner />;
	}

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
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
					<div className='relative'>
						<input
							type={showPassword ? "text" : "password"}
							name='password'
							id='password'
							value={password}
							onChange={onChange}
							className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
							placeholder='Password'
							required
						/>
						<div
							className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
							onClick={togglePasswordVisibility}
						>
							{showPassword ? (
								<FaEyeSlash className='text-gray-500 hover:text-blue-500' />
							) : (
								<FaEye className='text-gray-500 hover:text-blue-500' />
							)}
						</div>
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
						<Link to='/signup' className='text-blue-600 hover:underline'>
							Register
						</Link>
					</p>
				</div>
			</section>
		</div>
	);
};

export default Login;
