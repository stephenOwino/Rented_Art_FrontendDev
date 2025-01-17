import React, { useState } from "react";
import {
	MagnifyingGlassIcon,
	ShoppingCartIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../authSlice/authSlice";
import { FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

	return (
		<header className='sticky top-0 w-full bg-white border-b border-gray-200 z-50 shadow-md'>
			{/* Large and Medium Screens */}
			<div className='hidden md:flex items-center justify-between py-4 px-6 lg:px-16'>
				<Link
					to='/'
					className='text-3xl font-extrabold tracking-wide text-indigo-900 drop-shadow-lg'
				>
					𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-4xl'>.</span>
				</Link>

				{/* Search Bar */}
				<div className='relative w-1/3'>
					<input
						type='text'
						className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
						placeholder='Search for art...'
					/>
					<button
						type='submit'
						className='absolute right-2 top-2 text-gray-500 hover:text-indigo-600'
					>
						<MagnifyingGlassIcon className='h-5 w-5' />
					</button>
				</div>

				{/* Navigation Links */}
				<div className='flex items-center space-x-8 text-sm font-semibold text-gray-700'>
					<Link to='/' className='hover:text-indigo-800'>
						Home
					</Link>
					<Link to='/about' className='hover:text-indigo-800'>
						About
					</Link>
					<Link to='/services' className='hover:text-indigo-800'>
						Services
					</Link>
					<Link to='/contact' className='hover:text-indigo-800'>
						Contact Us
					</Link>
				</div>

				{/* User Links & Cart Icon */}
				<div className='flex items-center space-x-6'>
					{user ? (
						<button
							onClick={onLogout}
							className='flex items-center space-x-2 text-gray-800 hover:text-indigo-600'
						>
							<FaSignOutAlt />
							<span>Logout</span>
						</button>
					) : (
						<div className='flex space-x-4'>
							<Link
								to='/login'
								className='text-gray-800 hover:text-indigo-800 flex items-center space-x-2'
							>
								<FaSignInAlt />
								<span>Login</span>
							</Link>
							<Link
								to='/signup'
								className='text-gray-800 hover:text-indigo-800 flex items-center space-x-2'
							>
								<FaUser />
								<span>Register</span>
							</Link>
						</div>
					)}

					<Link to='/cart'>
						<ShoppingCartIcon className='h-6 w-6 text-gray-800' />
					</Link>
				</div>
			</div>

			{/* Mobile Screens */}
			<div className='md:hidden flex flex-col items-center py-4 px-6'>
				<div className='flex items-center justify-between w-full'>
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className='text-gray-800 focus:outline-none'
					>
						{menuOpen ? (
							<XMarkIcon className='h-6 w-6' />
						) : (
							<Bars3Icon className='h-6 w-6' />
						)}
					</button>
					<Link to='/' className='text-lg font-semibold text-indigo-800'>
						𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-xl'>.</span>
					</Link>
					<Link to='/cart'>
						<ShoppingCartIcon className='h-6 w-6 text-gray-800' />
					</Link>
				</div>

				{/* Login, Logout, Register Buttons */}
				<div className='flex flex-wrap items-center justify-center space-x-4 space-y-2 mt-4'>
					{user ? (
						<button
							onClick={onLogout}
							className='flex items-center text-gray-800 hover:text-indigo-600 space-x-2'
						>
							<FaSignOutAlt />
							<span>Logout</span>
						</button>
					) : (
						<>
							<Link
								to='/login'
								className='text-gray-800 hover:text-indigo-800 flex items-center space-x-2'
							>
								<FaSignInAlt />
								<span>Login</span>
							</Link>
							<Link
								to='/signup'
								className='text-gray-800 hover:text-indigo-800 flex items-center space-x-2'
							>
								<FaUser />
								<span>Register</span>
							</Link>
						</>
					)}
				</div>

				{/* Search Bar */}
				<div className='relative w-full mt-4'>
					<input
						type='text'
						className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
						placeholder='Search for art...'
					/>
					<button
						type='submit'
						className='absolute right-2 top-2 text-gray-500 hover:text-indigo-600'
					>
						<MagnifyingGlassIcon className='h-5 w-5' />
					</button>
				</div>
			</div>

			{/* Dropdown Menu for Mobile */}
			{menuOpen && (
				<div className='md:hidden bg-white shadow-md py-4 px-6'>
					<nav className='flex flex-col space-y-4 text-gray-800 font-medium'>
						<Link to='/' className='hover:text-indigo-800'>
							Home
						</Link>
						<Link to='/about' className='hover:text-indigo-800'>
							About
						</Link>
						<Link to='/services' className='hover:text-indigo-800'>
							Services
						</Link>
						<Link to='/contact' className='hover:text-indigo-800'>
							Contact Us
						</Link>
						<Link to='/cart' className='hover:text-indigo-800'>
							Cart
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
