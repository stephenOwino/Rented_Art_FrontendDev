import React, { useState } from "react";
import {
	MagnifyingGlassIcon,
	UserCircleIcon,
	ShoppingCartIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className='sticky top-0 w-full bg-white border-b border-gray-200 z-50'>
			{/* Large and Medium Screens */}
			<div className='hidden md:flex flex-col'>
				{/* Top Section */}
				<div className='flex items-center justify-between py-4 px-8 lg:px-16'>
					<Link
						to='/'
						className='text-3xl font-bold tracking-wide text-indigo-900 drop-shadow-md'
					>
						𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-5xl'>.</span>
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

					{/* Navigation & Icons */}
					<div className='flex items-center space-x-6'>
						<Link to='/login' className='hover:text-indigo-800 font-medium'>
							LOGIN
						</Link>
						<Link to='/signup' className='hover:text-indigo-800 font-medium'>
							SIGNUP
						</Link>
						<UserCircleIcon className='h-6 w-6 text-[#141718] hover:text-indigo-800' />
						<Link to='/cart'>
							<ShoppingCartIcon className='h-6 w-6 text-[#141718] hover:text-indigo-800' />
						</Link>
					</div>
				</div>

				{/* Bottom Section with new navigation links */}
				<div className='flex justify-center space-x-8 py-3 text-sm lg:text-base font-semibold text-gray-700'>
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
			</div>

			{/* Mobile Screens */}
			<div className='md:hidden flex items-center justify-between py-4 px-4'>
				{/* Left: Menu Icon & Logo */}
				<div className='flex items-center space-x-3'>
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
				</div>

				{/* Right: Cart Icon */}
				<Link to='/cart'>
					<ShoppingCartIcon className='h-6 w-6 text-gray-800' />
				</Link>
			</div>

			{/* Dropdown Menu */}
			{menuOpen && (
				<div className='md:hidden bg-white shadow-md py-4 px-6'>
					{/* Navigation Links */}
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
					</nav>

					{/* Action Links */}
					<div className='mt-6 flex flex-col space-y-3'>
						<Link to='/login' className='text-gray-800 hover:text-indigo-800'>
							LOGIN
						</Link>
						<Link to='/signup' className='text-gray-800 hover:text-indigo-800'>
							SIGNUP
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
