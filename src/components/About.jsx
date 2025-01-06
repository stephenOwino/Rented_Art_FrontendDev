import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
	const navigate = useNavigate();
	return (
		<div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
			{/* About Section */}
			<section className='py-12 px-6 bg-white shadow-md rounded-lg max-w-4xl w-full mb-8'>
				<div className='text-center'>
					<h2 className='text-4xl font-semibold text-indigo-900 mb-4'>
						About Rented Art
					</h2>
					<p className='text-lg text-gray-700 mb-8'>
						Rented Art is an innovative platform connecting talented artists
						with businesses, event organizers, and art enthusiasts. We provide a
						seamless way to showcase and rent exceptional artwork on a temporary
						basis. Whether you're looking to enhance your office ambiance, event
						space, or home decor, Rented Art offers a diverse selection of art
						for rent, catering to all tastes and environments.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{/* Artists Upload Artwork */}
					<div className='flex flex-col items-center'>
						<h3 className='text-2xl font-medium text-indigo-900 mb-4'>
							For Artists
						</h3>
						<p className='text-gray-700 mb-4'>
							As an artist, you can easily showcase your work and make it
							available for rent to a wide audience, including businesses and
							art lovers. Whether you specialize in painting, photography, or
							digital art, our platform offers an effortless way to generate
							income from your creations while reaching new markets.
						</p>
						<button
							onClick={() => navigate("/register")}
							className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'
						>
							Join as an Artist
						</button>
					</div>

					{/* Businesses Renting Art */}
					<div className='flex flex-col items-center'>
						<h3 className='text-2xl font-medium text-indigo-900 mb-4'>
							For Businesses
						</h3>
						<p className='text-gray-700 mb-4'>
							Rented Art enables businesses to rent high-quality, carefully
							curated artwork that complements their branding, office design, or
							event theme. Renting artwork offers a cost-effective way to create
							a dynamic, inspiring atmosphere, without the commitment of
							permanent installations.
						</p>
						<a
							href='/contact'
							className='px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700'
						>
							Rent Artwork Today
						</a>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className='py-12 px-6 bg-indigo-600 text-white shadow-md rounded-lg max-w-4xl w-full'>
				<div className='text-center'>
					<h2 className='text-4xl font-semibold mb-6'>Get In Touch</h2>
					<p className='text-lg mb-8'>
						Have questions? Need help with renting artwork or uploading your
						own? Contact us today!
					</p>
					<a
						href='/contact'
						className='px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700'
					>
						Contact Us
					</a>
				</div>
			</section>
		</div>
	);
};

export default About;
