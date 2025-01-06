import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
	const navigate = useNavigate();
	const [activeIndex, setActiveIndex] = useState(null); // Tracks the active question
	const toggleAnswer = (index) => {
		// Toggle the visibility of the answer by setting the active index
		setActiveIndex(activeIndex === index ? null : index);
	};

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
							onClick={() => navigate("/signup")}
							className='px-4 py-2 bg-gray-900 text-white rounded hover:bg-slate-500'
						>
							Join As Artist
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
							className='px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-500'
						>
							Rent Artwork Today
						</a>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-12 px-6 bg-gray-100 shadow-md rounded-lg max-w-4xl w-full mb-8'>
				<div className='text-center'>
					<h2 className='text-4xl font-semibold mb-6'>
						Frequently Asked Questions
					</h2>
					<p className='text-lg mb-8'>
						Here are some of the most common questions our users ask about
						renting artwork and uploading your own pieces.
					</p>
				</div>

				{/* FAQ Items */}
				<div className='space-y-4'>
					{/* Question 1 */}
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h3
							className='text-xl font-semibold mb-2 cursor-pointer'
							onClick={() => toggleAnswer(0)}
						>
							How do I rent artwork?
						</h3>
						{activeIndex === 0 && (
							<p>
								To rent artwork, browse through our collection, choose your
								favorite pieces, and add them to your cart. Proceed to checkout
								to complete your rental process. We offer flexible rental terms
								to suit your needs.
							</p>
						)}
					</div>

					{/* Question 2 */}
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h3
							className='text-xl font-semibold mb-2 cursor-pointer'
							onClick={() => toggleAnswer(1)}
						>
							Can I upload my own artwork to rent out?
						</h3>
						{activeIndex === 1 && (
							<p>
								Yes! If you're an artist, you can create an account and upload
								your artwork. We’ll review your submission and make it available
								for rent on our platform.
							</p>
						)}
					</div>

					{/* Question 3 */}
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h3
							className='text-xl font-semibold mb-2 cursor-pointer'
							onClick={() => toggleAnswer(2)}
						>
							What happens if the artwork is damaged?
						</h3>
						{activeIndex === 2 && (
							<p>
								If the artwork is damaged during your rental period, please
								notify us immediately. Depending on the severity, you may be
								liable for repair or replacement costs. We encourage careful
								handling of all artwork.
							</p>
						)}
					</div>

					{/* Question 4 */}
					<div className='bg-white p-6 rounded-lg shadow-md'>
						<h3
							className='text-xl font-semibold mb-2 cursor-pointer'
							onClick={() => toggleAnswer(3)}
						>
							How do I return rented artwork?
						</h3>
						{activeIndex === 3 && (
							<p>
								At the end of your rental period, you can schedule a return
								through your account page. We will arrange for a pickup or
								provide instructions for shipping the artwork back to us.
							</p>
						)}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className='py-12 px-6 bg-black text-white shadow-md rounded-lg max-w-4xl w-full'>
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
