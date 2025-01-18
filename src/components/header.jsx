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
import {
	FaUser,
	FaSignOutAlt,
	FaSignInAlt,
	FaHome,
	FaSearch,
	FaUpload,
	FaBox,
	FaStar,
	FaArtstation,
	FaBoxOpen,
	FaBookmark, // Import the Orders icon
} from "react-icons/fa";

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

	// const handleNavigation = () => {
	// 	navigate("/order");
	// };

	const handleMenuClose = () => {
		setTimeout(() => {
			setMenuOpen(false);
		}, 3000); // Close menu after 3 seconds
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
				<div className='flex items-center space-x-4'>
					<input
						type='text'
						className='px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
						placeholder='Search art...'
					/>
					<button type='submit' className='text-gray-500 hover:text-indigo-600'>
						<MagnifyingGlassIcon className='h-5 w-5' />
					</button>
				</div>

				{/* Navigation Links (Common) */}
				<div className='flex items-center space-x-8 text-sm font-semibold text-gray-700'>
					<Link
						to='/'
						className='hover:text-indigo-800 flex items-center space-x-2'
					>
						<FaHome />
						<span>Home</span>
					</Link>
					<Link
						to='/browse-art'
						className='hover:text-indigo-800 flex items-center space-x-2'
					>
						<FaSearch />
						<span>Browse Art</span>
					</Link>

					{/* Paintings Link */}
					<Link
						to='/paintings'
						className='hover:text-indigo-800 flex items-center space-x-2'
					>
						<FaArtstation />
						<span>Paintings</span>
					</Link>

					{/* Orders Link */}
					<Link
						to='/order'
						className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
						onClick={handleMenuClose}
					>
						<FaBox />
						<span>Orders</span>
					</Link>

					{/* Recommendations Link */}
					<Link
						to='/recommendations'
						className='hover:text-indigo-800 flex items-center space-x-2'
					>
						<FaStar />
						<span>Recommendations</span>
					</Link>

					{/* Products Link */}
					<Link
						to='/products'
						className='hover:text-indigo-800 flex items-center space-x-2'
					>
						<FaBoxOpen />
						<span>Products</span>
					</Link>
				</div>

				{/* User Links & Cart Icon */}
				<div className='flex items-center space-x-6'>
					{user ? (
						<div className='flex items-center space-x-4'>
							{/* Renters Only Links */}
							{user.role === "RENTAL" && (
								<>
									<Link
										to='/my-rentals'
										className='hover:text-indigo-800 flex items-center space-x-2'
									>
										<FaBookmark />
										<span>My Rentals</span>
									</Link>
									<Link
										to='/rent-art'
										className='hover:text-indigo-800 flex items-center space-x-2'
									>
										<FaArtstation />
										<span>Rent Art</span>
									</Link>
								</>
							)}

							{/* Artists Only Links */}
							{user.role === "ARTIST" && (
								<>
									<Link
										to='/my-art'
										className='hover:text-indigo-800 flex items-center space-x-2'
									>
										<FaArtstation />
										<span>My Art</span>
									</Link>
									<Link
										to='/upload-art'
										className='hover:text-indigo-800 flex items-center space-x-2'
									>
										<FaUpload />
										<span>Upload Art</span>
									</Link>
								</>
							)}

							<Link
								to='/profile'
								className='hover:text-indigo-800 flex items-center space-x-2'
							>
								<FaUser />
								<span>Profile</span>
							</Link>
							<button
								onClick={onLogout}
								className='flex items-center space-x-2 text-gray-800 hover:text-indigo-600'
							>
								<FaSignOutAlt />
								<span>Logout</span>
							</button>
						</div>
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

				{/* Mobile Sidebar Menu */}
				{menuOpen && (
					<div className='absolute top-0 left-0 w-full h-screen bg-white shadow-lg p-6 z-40'>
						<div className='flex flex-col space-y-4'>
							<Link
								to='/'
								className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
								onClick={handleMenuClose}
							>
								<FaHome />
								<span>Home</span>
							</Link>
							<Link
								to='/browse-art'
								className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
								onClick={handleMenuClose}
							>
								<FaSearch />
								<span>Browse Art</span>
							</Link>

							{/* Paintings Link for Mobile */}
							<Link
								to='/paintings'
								className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
								onClick={handleMenuClose}
							>
								<FaArtstation />
								<span>Paintings</span>
							</Link>

							<Link
								to='/order'
								className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
								onClick={handleMenuClose}
							>
								<FaBox />
								<span>Orders</span>
							</Link>

							{/* Recommendations Link */}
							<Link
								to='/recommendations'
								className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
								onClick={handleMenuClose}
							>
								<FaStar />
								<span>Recommendations</span>
							</Link>

							{/* Products Link */}
							<Link
								to='/products'
								className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
								onClick={handleMenuClose}
							>
								<FaBoxOpen />
								<span>Products</span>
							</Link>

							{/* Renters Links */}
							{user && user.role === "RENTAL" && (
								<>
									<Link
										to='/my-rentals'
										className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
										onClick={handleMenuClose}
									>
										<FaBookmark />
										<span>My Rentals</span>
									</Link>
									<Link
										to='/rent-art'
										className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
										onClick={handleMenuClose}
									>
										<FaArtstation />
										<span>Rent Art</span>
									</Link>
								</>
							)}

							{/* Artists Links */}
							{user && user.role === "ARTIST" && (
								<>
									<Link
										to='/my-art'
										className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
										onClick={handleMenuClose}
									>
										<FaArtstation />
										<span>My Art</span>
									</Link>
									<Link
										to='/upload-art'
										className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
										onClick={handleMenuClose}
									>
										<FaUpload />
										<span>Upload Art</span>
									</Link>
								</>
							)}

							<Link
								to='/profile'
								className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
								onClick={handleMenuClose}
							>
								<FaUser />
								<span>Profile</span>
							</Link>

							{/* Show logout button only if user is logged in */}
							{user && (
								<button
									onClick={onLogout}
									className='flex items-center text-lg text-gray-800 hover:text-indigo-600 space-x-2'
								>
									<FaSignOutAlt />
									<span>Logout</span>
								</button>
							)}

							{/* Show login and register links if the user is not logged in */}
							{!user && (
								<>
									<Link
										to='/login'
										className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
										onClick={handleMenuClose}
									>
										<FaSignInAlt className='inline-block' />
										<span>Login</span>
									</Link>
									<Link
										to='/signup'
										className='text-lg text-indigo-800 hover:text-indigo-600 flex items-center space-x-2'
										onClick={handleMenuClose}
									>
										<FaUser className='inline-block' />
										<span>Register</span>
									</Link>
								</>
							)}
						</div>
					</div>
				)}

				{/* Search Bar (Mobile) */}
				<div className='relative w-full mt-4'>
					<input
						type='text'
						className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
						placeholder='Search art...'
					/>
					<button
						type='submit'
						className='absolute right-2 top-2 text-gray-500 hover:text-indigo-600'
					>
						<MagnifyingGlassIcon className='h-5 w-5' />
					</button>
				</div>
			</div>
		</header>
	);
};
export default Header;
