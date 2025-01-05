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
			<div className='flex flex-wrap md:flex-nowrap justify-center items-start md:space-x-8'>
				{/* Left Image */}
				<div className='w-full md:w-1/4 flex justify-center md:justify-end mb-8 md:mb-0'>
					<img
						src={painting3}
						alt='art-painting'
						className='w-3/4 md:w-full h-auto object-cover rounded-lg shadow-lg'
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

				{/* Text Section */}
				<div className='w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg flex flex-col'>
					<h3 className='font-semibold text-2xl mb-4'>Discover Your Art</h3>
					<p className='text-gray-600 text-base md:text-lg mb-6 leading-relaxed'>
						We make it our mission to help you discover and buy from the best
						emerging artists around the world. Whether you’re looking to
						discover a new artist, add a statement piece to your home, or
						commemorate an important life event, Saatchi Art is your portal to
						thousands of original works by today’s top artists.
					</p>
					<div className='text-xl text-indigo-900 font-bold self-end'>
						𝕽ebecca
					</div>
				</div>
			</div>
		</div>
	);
}

export default Editorial;
