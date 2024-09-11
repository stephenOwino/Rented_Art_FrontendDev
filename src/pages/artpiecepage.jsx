// src/pages/ArtPiecePage.js

import React from "react";
import ArtPiece from "../components/ArtPiece";
import Art3 from "../assets/art3.jpg";

const ArtPiecePage = () => {
	// Example art piece data; replace this with data from API or state
	const art = {
		title: "Starry Night",
		image: Art3,
		description:
			"A beautiful painting by Vincent van Gogh depicting a night sky.",
		artistBio:
			"Vincent van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art.",
		priceBuy: 200,
		priceRent: 20,
	};

	return (
		<div className='min-h-screen flex flex-col bg-gray-100'>
			{/* Header */}
			<header className='bg-blue-900 text-white py-4'>
				<div className='container mx-auto px-6 flex justify-between items-center'>
					<h1 className='text-2xl font-bold'>Art Gallery</h1>
					<nav>
						<a href='/' className='mr-4 hover:underline'>
							Home
						</a>
						<a href='/artists' className='hover:underline'>
							Artists
						</a>
					</nav>
				</div>
			</header>

			{/* Main Content */}
			<main className='flex-grow py-6'>
				<div className='container mx-auto px-4 md:px-6'>
					<ArtPiece art={art} />
				</div>
			</main>

			{/* Footer */}
			<footer className='bg-gray-800 text-white py-4 mt-6'>
				<div className='container mx-auto px-6 text-center'>
					<p>&copy; 2024 Art Gallery. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default ArtPiecePage;
