import React from "react";
import painting3 from "../assets/Image3.png";
import painting2 from "../assets/Image2.jpg";

function Editorial() {
	return (
		<div className='bg-gradient-to-b from-gray-100 px-4 md:px-20 py-12'>
			{/* Section Title */}
			<div className='text-center mb-8'>
				<h2 className='text-3xl md:text-5xl font-bold underline'>
					Discover Your Art
				</h2>
			</div>

			{/* Responsive Layout */}
			<div className='flex flex-wrap md:flex-wrap justify-center items-start md:space-x-8'>
				{/* Left Image */}
				<div className='w-full md:w-1/4 flex justify-center md:justify-end mb-8 md:mb-0'>
					<img
						src={painting3}
						alt='art-painting'
						className='w-3/4 md:w-full h-auto object-cover rounded-lg shadow-lg'
					/>
				</div>

				<div className='mt-8 w-200'>
					<img
						src='https://img.freepik.com/premium-photo/energetic-pop-art-painting-with-vibrant-celebrity-portraits_899449-22106.jpg'
						alt=' Painting'
						className='w-full h-auto object-cover'
					/>
				</div>
				<div className='mt-8 w-100'>
					<img
						src='https://cdn.supadupa.me/shop/1807/images/3476671/blue_trees_moon_shadows_surrealist_surreal_landscape_painting_large.jpg?1711485870'
						alt=' Paint'
						className='w-full h-auto object-cover'
					/>
				</div>

				{/* Center Image */}
				<div className='w-full md:w-2/5 flex justify-center mb-8 md:mb-0'>
					<img
						src={painting2}
						alt='art-painting'
						className='w-3/4 md:w-full h-auto object-cover rounded-lg shadow-lg'
					/>
				</div>
				{/* Additional Images */}
				{/* Image 1 */}
				<div className='w-400 md:w-1/4 mt-8 flex justify-center'>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2KQd3uJ8NirJkN74lmNJGNjmBpja83Mnqg&s'
						alt='Image 1'
						className='w-full h-auto object-cover rounded-lg shadow-lg'
					/>
				</div>

				{/* Image 2 */}
				<div className='w-300 md:w-1/4 mt-8 flex justify-center'>
					<img
						src='https://www.parkwestgallery.com/wp-content/uploads/2018/11/im349410.jpg'
						alt='Image 2'
						className='w-full h-auto object-cover rounded-lg shadow-lg'
					/>
				</div>

				{/* Text Section */}
				<div className='w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg'>
					<h3 className='font-semibold text-2xl mb-4 w-full'>
						Discover Your Art
					</h3>
					<p className='text-gray-500 text-base md:text-lg mb-6 leading-relaxed w-full'>
						We make it our mission to help you discover and buy from the best
						emerging artists around the world. Whether you’re looking to
						discover a new artist, add a statement piece to your home, or
						commemorate an important life event, Saatchi Art is your portal to
						thousands of original works by today’s top artists.
					</p>
					<div className='text-xl text-indigo-900 font-bold w-full'>
						Stephen
					</div>
				</div>
			</div>
		</div>
	);
}

export default Editorial;
