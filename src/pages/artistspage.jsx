// src/pages/ArtistsPage.js

import React from "react";
import { Link } from "react-router-dom";

const ArtistsPage = () => {
	// Example artist data; replace this with data from API or state
	const artists = [
		{
			id: 1,
			name: "Vincent van Gogh",
			bio: "Dutch Post-Impressionist painter...",
		},
		{
			id: 2,
			name: "Claude Monet",
			bio: "French painter and founder of Impressionism...",
		},
	];

	return (
		<div className='min-h-screen bg-gray-100 p-6'>
			<h1 className='text-3xl font-bold mb-6'>Artists</h1>
			<ul className='space-y-6'>
				{artists.map((artist) => (
					<li key={artist.id} className='bg-white p-6 rounded-lg shadow-md'>
						<h2 className='text-2xl font-semibold mb-2'>{artist.name}</h2>
						<p className='text-gray-700 mb-4'>{artist.bio}</p>
						<Link to={`/artists/${artist.id}`}>
							<button className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'>
								Learn More
							</button>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ArtistsPage;
