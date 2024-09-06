import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom"; // Make sure NavLink is imported
import ArtworkGrid from "../components/ArtworkGrid";
import ArtistDetails from "../components/ArtistDetails";
import art1 from "../assets/art2.jpg";
import art2 from "../assets/art3.jpg";
import art3 from "../assets/art4.jpg";
// Dummy data with additional art pieces for scrolling
const dummyArtist = {
	name: "Stephen Otieno",
	profilePicture: "https://via.placeholder.com/150",
	followers: 500, // Example number of followers
	description:
		"Stephen Otieno is a visionary artist with a passion for capturing the beauty of nature and urban landscapes. His work blends vibrant colors with intricate details, aiming to evoke deep emotions and inspire a sense of wonder. With years of experience and numerous exhibitions, Stephen's art has captivated audiences and collectors alike.",
};

const dummyArtworks = [
	{
		id: 1,
		imageUrl: art1,
		title: "Sunset Over Mountains",
		price: "500",
	},
	{
		id: 2,
		imageUrl: art2,
		title: "Abstract Waves",
		price: "350",
	},
	{
		id: 3,
		imageUrl: art3,
		title: "Cityscape",
		price: "600",
	},
	{
		id: 4,
		imageUrl: art1,
		title: "Portrait of a Lady",
		price: "700",
	},
	{
		id: 5,
		imageUrl: art2,
		title: "Autumn Forest",
		price: "450",
	},
	{
		id: 6,
		imageUrl: art3,
		title: "Ocean Breeze",
		price: "550",
	},
	{
		id: 7,
		imageUrl: art1,
		title: "Mountain Lake",
		price: "500",
	},
	{
		id: 8,
		imageUrl: art2,
		title: "Urban Night",
		price: "650",
	},
	// Additional artworks to make it scrollable
	{
		id: 9,
		imageUrl: art3,
		title: "Serene Landscape",
		price: "600",
	},
	{
		id: 10,
		imageUrl: art1,
		title: "Dramatic Sky",
		price: "700",
	},
	{
		id: 11,
		imageUrl: art2,
		title: "Winter Wonderland",
		price: "750",
	},
	{
		id: 12,
		imageUrl: art3,
		title: "Sunrise Over Ocean",
		price: "800",
	},
	{
		id: 13,
		imageUrl: art1,
		title: "Urban Sunset",
		price: "500",
	},
	{
		id: 14,
		imageUrl: "https://via.placeholder.com/300",
		title: "Desert Dunes",
		price: "550",
	},
	{
		id: 15,
		imageUrl: "https://via.placeholder.com/300",
		title: "Golden Hour",
		price: "600",
	},
	{
		id: 16,
		imageUrl: "https://via.placeholder.com/300",
		title: "Evening Glow",
		price: "650",
	},
	{
		id: 17,
		imageUrl: "https://via.placeholder.com/300",
		title: "Abstract Reflection",
		price: "700",
	},
	{
		id: 18,
		imageUrl: "https://via.placeholder.com/300",
		title: "Mountain Vista",
		price: "550",
	},
	{
		id: 19,
		imageUrl: "https://via.placeholder.com/300",
		title: "Calm Waters",
		price: "600",
	},
	{
		id: 20,
		imageUrl: "https://via.placeholder.com/300",
		title: "Starry Night",
		price: "750",
	},
];

function ArtistProfile() {
	const { id } = useParams(); // Get the artist ID from the URL
	const [artist, setArtist] = useState({});
	const [artworks, setArtworks] = useState(dummyArtworks); // Use dummy data for artworks

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`https://api.example.com/artist/${id}`);
				const data = await response.json();
				setArtist(data.artist);
				setArtworks(data.artworks);
			} catch (error) {
				console.error("Error fetching data:", error);
				setArtist(dummyArtist);
				setArtworks(dummyArtworks);
			}
		};
		fetchData();
	}, [id]);

	return (
		<div className='relative'>
			{/* Navbar Section */}
			<nav className='fixed top-0 left-0 right-0 bg-white shadow-md z-50'>
				<div className='container mx-auto flex flex-col p-4'>
					{/* Navigation Links */}
					<div className='flex justify-between items-center'>
						<div className='flex-1 flex justify-around space-x-4'>
							<NavLink
								to='/about'
								className='text-gray-700 hover:text-blue-500 text-xs'
							>
								About
							</NavLink>
							<NavLink
								to='/photos'
								className='text-gray-700 hover:text-blue-500 text-xs'
							>
								Photos
							</NavLink>
							<NavLink
								to='/followers'
								className='text-gray-700 hover:text-blue-500 text-xs'
							>
								Followers
							</NavLink>
							<NavLink
								to='/saved'
								className='text-gray-700 hover:text-blue-500 text-xs'
							>
								Saved
							</NavLink>
						</div>
					</div>
				</div>
			</nav>

			{/* Body Section */}
			<div className='pt-[80px] max-w-6xl mx-auto'>
				{/* Artist Details */}
				<ArtistDetails artist={artist} />

				{/* Artworks Section */}
				<h2 className='text-2xl font-semibold mt-6 mb-5 text-center'>
					Artworks
				</h2>
				<ArtworkGrid artworks={artworks} />
			</div>
		</div>
	);
}

export default ArtistProfile;
