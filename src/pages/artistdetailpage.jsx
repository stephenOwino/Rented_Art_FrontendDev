// src/pages/ArtistDetailPage.js

import React from "react";
import { useParams } from "react-router-dom";

const ArtistDetailPage = () => {
	const { id } = useParams();

	// Example artist data; replace this with data from API or state
	const artist = {
		id: 1,
		name: "Vincent van Gogh",
		bio: "Vincent van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art.",
	};

	return (
		<div className='min-h-screen bg-gray-100 p-6'>
			<div className='max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg'>
				<h1 className='text-3xl font-bold mb-4'>{artist.name}</h1>
				<div className='flex flex-col md:flex-row'>
					<div className='md:w-1/3 mb-6 md:mb-0'>
						<img
							src={artist.image}
							alt={artist.name}
							className='w-full h-auto rounded-lg'
						/>
					</div>
					<div className='md:w-2/3 md:pl-6'>
						<p className='text-gray-700'>{artist.bio}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ArtistDetailPage;
