import { useEffect, useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa"; // Add FaEye and FaEyeSlash
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../authSlice/authSlice";
import { toast } from "react-toastify";
import LoadingSpinner from "./spinner/LoadingSpinner";

const Signup = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		role: "",
		bio: "",
	});

	const [showPassword, setShowPassword] = useState(false); // State for password visibility
	const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { firstName, lastName, email, password, confirmPassword, role, bio } =
		formData;

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}
		if (isSuccess || user) {
			toast.success("Registration successful!");
			navigate("/");
		}
		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted with data: ", formData);

		if (password !== confirmPassword) {
			toast.error("Passwords do not match!");
		} else {
			const userData = {
				firstName,
				lastName,
				email,
				password,
				role,
				bio,
			};
			dispatch(register(userData));
		}
	};

	// Toggle password visibility
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	// Toggle confirm password visibility
	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<div className='flex items-center justify-center mt-10 px-4 sm:px-6 lg:px-8'>
			<section className='flex flex-col items-center space-y-4 text-center p-6 bg-white shadow-xl rounded-2xl w-full max-w-md sm:max-w-lg'>
				<div className='flex items-center space-x-2'>
					<FaUser className='text-2xl text-blue-500' />
					<span className='text-lg font-semibold'>Register here</span>
				</div>
				<h2 className='text-2xl font-bold'>Please create an account</h2>
				<form onSubmit={onSubmit} className='w-full space-y-4'>
					{/* First Name */}
					<div className='flex flex-col w-full'>
						<input
							type='text'
							name='firstName'
							placeholder='First Name'
							value={formData.firstName}
							onChange={onChange}
							className='border rounded-md p-2 w-full'
						/>
					</div>
					{/* Last Name */}
					<div className='flex flex-col w-full'>
						<input
							type='text'
							name='lastName'
							placeholder='Last Name'
							value={formData.lastName}
							onChange={onChange}
							className='border rounded-md p-2 w-full'
						/>
					</div>
					{/* Email */}
					<div className='flex flex-col w-full'>
						<input
							type='email'
							name='email'
							placeholder='Email'
							value={formData.email}
							onChange={onChange}
							className='border rounded-md p-2 w-full'
						/>
					</div>
					{/* Password */}
					<div className='flex flex-col w-full'>
						<div className='relative'>
							<input
								type={showPassword ? "text" : "password"} // Toggle input type for password
								name='password'
								placeholder='Password'
								value={formData.password}
								onChange={onChange}
								className='border rounded-md p-2 w-full'
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
					</div>

					{/* Confirm Password */}
					<div className='flex flex-col w-full'>
						<div className='relative'>
							<input
								type={showConfirmPassword ? "text" : "password"} // Toggle input type for confirm password
								name='confirmPassword'
								placeholder='Confirm Password'
								value={formData.confirmPassword}
								onChange={onChange}
								className='border rounded-md p-2 w-full'
							/>
							<div
								className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
								onClick={toggleConfirmPasswordVisibility}
							>
								{showConfirmPassword ? (
									<FaEyeSlash className='text-gray-500 hover:text-blue-500' />
								) : (
									<FaEye className='text-gray-500 hover:text-blue-500' />
								)}
							</div>
						</div>
					</div>

					{/* Role - Dropdown for selecting role */}
					<div className='flex flex-col w-full'>
						<select
							name='role'
							value={formData.role}
							onChange={onChange}
							className='border rounded-md p-2 w-full'
						>
							<option value=''>Select Role</option>
							<option value='ARTIST'>Artist</option>
							<option value='RENTER'>Renter</option>
						</select>
					</div>
					{/* Bio */}
					<div className='flex flex-col w-full'>
						<input
							type='text'
							name='bio'
							placeholder='Bio'
							value={formData.bio}
							onChange={onChange}
							className='border rounded-md p-2 w-full'
						/>
					</div>

					{/* Submit Button */}
					<div className='w-full'>
						<button
							type='submit'
							className='bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700'
						>
							Submit
						</button>
					</div>
				</form>

				{/* Login Link */}
				<p className='text-sm text-gray-600'>
					Already have an account?{" "}
					<Link
						to='/login' // Adjust the path based on your routes
						className='text-blue-600 hover:underline'
					>
						Login
					</Link>
				</p>
			</section>
		</div>
	);
};

export default Signup;
