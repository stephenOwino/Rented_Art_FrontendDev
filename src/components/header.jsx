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
	const [hoverPaintings, setHoverPaintings] = useState(false);
	const [hoverPhotography, setHoverPhotography] = useState(false);
	const [hoverDrawings, setHoverDrawings] = useState(false);
	const [hoverPrints, setHoverPrints] = useState(false);

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

					{/* Paintings Dropdown */}
					<div
						className='relative'
						onMouseEnter={() => setHoverPaintings(true)}
						onMouseLeave={() => setHoverPaintings(false)}
					>
						<Link to='/paintings' className='hover:text-indigo-800 font-medium'>
							Paintings
						</Link>
						{hoverPaintings && (
							<div className='absolute top-full left-0 mt-2 w-max bg-white shadow-lg rounded-md'>
								{/* Content for Paintings */}
							</div>
						)}
					</div>

					{/* Photography Dropdown */}
					<div
						className='relative'
						onMouseEnter={() => setHoverPhotography(true)}
						onMouseLeave={() => setHoverPhotography(false)}
					>
						<Link
							to='/photography'
							className='hover:text-indigo-800 font-medium'
						>
							Photography
						</Link>
						{hoverPhotography && (
							<div className='absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-md'>
								{/* Content for Photography */}
								{/* Photography Dropdown */}
								<div
									className='relative'
									onMouseEnter={() => setHoverPhotography(true)}
									onMouseLeave={() => setHoverPhotography(false)}
								>
									<Link
										to='/photography'
										className='hover:text-indigo-800 font-medium'
									></Link>
									{hoverPhotography && (
										<div className='absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-md'>
											<div className='grid grid-cols-4 gap-4 p-4'>
												<div>
													<h4 className='font-semibold text-indigo-800'>
														Style
													</h4>
													<ul className='space-y-2 text-sm text-gray-700'>
														<li>Fine Art</li>
														<li>Portraiture</li>
														<li>Abstract</li>
														<li>Documentary</li>
														<li>Conceptual</li>
													</ul>
												</div>
												<div>
													<h4 className='font-semibold text-indigo-800'>
														Subject
													</h4>
													<ul className='space-y-2 text-sm text-gray-700'>
														<li>Landscape</li>
														<li>Portrait</li>
														<li>Nature</li>
														<li>Still Life</li>
														<li>Nude</li>
													</ul>
												</div>
												<div>
													<h4 className='font-semibold text-indigo-800'>
														Medium
													</h4>
													<ul className='space-y-2 text-sm text-gray-700'>
														<li>Digital</li>
														<li>Black and White</li>
														<li>Color</li>
														<li>C-type</li>
														<li>Digital</li>
													</ul>
												</div>
											</div>
											<div className='border-t border-gray-200 p-4 text-center'>
												<Link
													to='/featured-photography'
													className='text-indigo-800 hover:underline'
												>
													FEATURED PHOTOGRAPHY
												</Link>
											</div>
										</div>
									)}
								</div>
							</div>
						)}
					</div>

					{/* Drawings Dropdown */}
					<div
						className='relative'
						onMouseEnter={() => setHoverDrawings(true)}
						onMouseLeave={() => setHoverDrawings(false)}
					>
						<Link to='/drawings' className='hover:text-indigo-800 font-medium'>
							Drawings
						</Link>
						{hoverDrawings && (
							<div className='absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md'>
								<div className='grid grid-cols-3 gap-4 p-4'>
									<div>
										<h4 className='font-semibold text-indigo-800'>Style</h4>
										<ul className='space-y-2 text-sm text-gray-700'>
											<li>Graffiti</li>
											<li>Abstract</li>
											<li>Fine Art</li>
											<li>Pop Art</li>
											<li>Surrealism</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold text-indigo-800'>Subject</h4>
										<ul className='space-y-2 text-sm text-gray-700'>
											<li>Nature</li>
											<li>Portrait</li>
											<li>Animal</li>
											<li>Love</li>
											<li>Cartoon</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold text-indigo-800'>Medium</h4>
										<ul className='space-y-2 text-sm text-gray-700'>
											<li>Pencil</li>
											<li>Charcoal</li>
											<li>Digital</li>
											<li>Ink</li>
											<li>Pastel</li>
										</ul>
									</div>
								</div>
								<div className='border-t border-gray-200 p-4 text-center'>
									<Link
										to='/featured-drawings'
										className='text-indigo-800 hover:underline'
									>
										FEATURED DRAWINGS
									</Link>
								</div>
							</div>
						)}
					</div>

					{/* Prints Dropdown */}
					<div
						className='relative'
						onMouseEnter={() => setHoverPrints(true)}
						onMouseLeave={() => setHoverPrints(false)}
					>
						<Link to='/prints' className='hover:text-indigo-800 font-medium'>
							Prints
						</Link>
						{hoverPrints && (
							<div className='absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md'>
								<div className='grid grid-cols-3 gap-4 p-4'>
									<div>
										<h4 className='font-semibold text-indigo-800'>Style</h4>
										<ul className='space-y-2 text-sm text-gray-700'>
											<li>Fine Art</li>
											<li>Abstract</li>
											<li>Art Deco</li>
											<li>Pop Art</li>
											<li>Folk Art</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold text-indigo-800'>Subject</h4>
										<ul className='space-y-2 text-sm text-gray-700'>
											<li>Floral</li>
											<li>Animal</li>
											<li>Fashion</li>
											<li>Beach</li>
											<li>Geometric</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold text-indigo-800'>Material</h4>
										<ul className='space-y-2 text-sm text-gray-700'>
											<li>Fine Art Paper</li>
											<li>Photo Paper</li>
											<li>Canvas</li>
											<li>Metal</li>
											<li>Acrylic</li>
										</ul>
									</div>
								</div>
								<div className='border-t border-gray-200 p-4 text-center'>
									<Link
										to='/featured-prints'
										className='text-indigo-800 hover:underline'
									>
										FEATURED PRINTS
									</Link>
								</div>
							</div>
						)}
					</div>
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
						<Link to='/paintings' className='hover:text-indigo-800'>
							Paintings
						</Link>
						<Link to='/photography' className='hover:text-indigo-800'>
							Photography
						</Link>
						<Link to='/drawings' className='hover:text-indigo-800'>
							Drawings
						</Link>
						<Link to='/prints' className='hover:text-indigo-800'>
							Prints
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
