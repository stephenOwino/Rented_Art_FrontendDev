import React, { useState } from "react";
import { HeartIcon, BookmarkIcon } from "@heroicons/react/20/solid";

const ArtworkGrid = ({ artworks }) => {
	const [hoveredArtworkId, setHoveredArtworkId] = useState(null);

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5'>
			{artworks.map((artwork) => (
				<div
					key={artwork.id}
					className='relative bg-white p-4 rounded-lg shadow-md overflow-hidden group'
					onMouseEnter={() => setHoveredArtworkId(artwork.id)}
					onMouseLeave={() => setHoveredArtworkId(null)}
				>
					<img
						src={artwork.imageUrl}
						alt={artwork.title}
						className='w-full h-64 object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105'
					/>
					<div
						className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
							hoveredArtworkId === artwork.id ? "opacity-100" : "opacity-0"
						}`}
					>
						<div className='flex flex-col items-center space-y-2'>
							<div className='flex items-center space-x-2'>
								<button className='bg-white p-2 rounded-full flex items-center'>
									<HeartIcon className='w-6 h-6 text-red-500' />
								</button>
								<span className='text-white text-sm'>Like</span>
							</div>
							<div className='flex items-center space-x-2'>
								<button className='bg-white p-2 rounded-full flex items-center'>
									<BookmarkIcon className='w-6 h-6 text-blue-500' />
								</button>
								<span className='text-white text-sm'>Save</span>
							</div>
						</div>
					</div>
					<div className='mt-2 text-center'>
						<h3 className='text-lg font-semibold'>{artwork.title}</h3>
						<p className='text-gray-600'>${artwork.price}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ArtworkGrid;
