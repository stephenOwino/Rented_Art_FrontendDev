// src/components/ArtPiece.js

import React from "react";
import { Link } from "react-router-dom";

const ArtPiece = ({ art }) => {
	return (
		<div className='flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden'>
			{/* Art Image and Details */}
			<div className='md:w-2/3 p-6 flex flex-col items-center'>
				{/* Art Image */}
				<img
					src={art.image}
					alt={art.title}
					className='w-full h-60 object-cover mb-4 rounded-lg md:w-80'
				/>
				{/* Painting Description */}
				<p className='text-gray-700 mb-6 text-center max-w-xs md:max-w-md'>
					{art.description}
				</p>
				{/* About the Artist */}
				<div className='mb-6 text-center max-w-xs md:max-w-md mx-auto'>
					<h3 className='text-xl font-semibold mb-2'>About the Artist</h3>
					<p className='text-gray-600 mb-4'>{art.artistBio}</p>
					<Link
						to={`/artists/${art.artistId}`}
						className='text-blue-500 text-lg font-medium hover:underline flex items-center justify-center'
					>
						Learn More
						<span className='ml-2 text-lg'>...</span>
					</Link>
				</div>
			</div>

			{/* Divider Line */}
			<div className='hidden md:block w-px bg-gray-300 my-4 mx-6'></div>

			{/* Art Details */}
			<div className='md:w-1/3 p-6 flex flex-col items-center justify-center '>
				<div className='text-center mb-4 border rounded border-gray-200 p-4 shadow-md'>
					<h2 className='text-xl font-bold mb-4 uppercase'>{art.title}</h2>
					<div className='flex flex-col space-y-4 mb-4'>
						<div className='flex items-center justify-center space-x-4'>
							<button className='px-6 py-3 bg-white text-black border border-black rounded-lg hover:bg-green-500 hover:text-white transition'>
								Buy
							</button>
							<span className='text-lg font-bold'>${art.priceBuy}</span>
						</div>
						<div className='flex items-center justify-center space-x-4'>
							<button className='px-6 py-3 bg-white text-black border border-black rounded-lg hover:bg-yellow-500 hover:text-white transition'>
								Rent
							</button>
							<span className='text-lg font-bold'>${art.priceRent}</span>
						</div>
					</div>
					<button className='px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition'>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ArtPiece;
