import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			{/* Footer for all screen sizes */}
			<div className='flex flex-col px-4 sm:px-8 md:px-[60px] pb-8 pt-16 bg-gray-800 text-white w-full'>
				<div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-16 border-t border-gray-600 pt-8 pb-4'>
					{/* Left side: Copyright & Links */}
					<div className='flex flex-col items-center md:items-start text-center md:text-left gap-4'>
						<div className='text-sm font-medium text-gray-400'>
							Copyright © 2024 All rights reserved
						</div>
						<div className='text-md font-semibold text-gray-400 hover:text-white cursor-pointer'>
							OUR POLICIES
						</div>
						<div className='text-md font-semibold text-gray-400 hover:text-white cursor-pointer'>
							TERMS OF USE
						</div>
					</div>

					{/* Right side: Social Media Icons with Links */}
					<div className='flex justify-center md:justify-start gap-6 text-xl'>
						<a
							href='https://www.instagram.com/otiengele/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-gray-400 cursor-pointer'
						>
							<FaInstagram />
						</a>
						<a
							href='https://www.facebook.com/facebook.com.stev'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-gray-400 cursor-pointer'
						>
							<FaFacebook />
						</a>
						<a
							href='https://www.youtube.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:text-gray-400 cursor-pointer'
						>
							<FaYoutube />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
