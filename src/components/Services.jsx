// src/components/Services.js
import React from "react";

const Services = () => {
	const services = [
		{
			title: "Rent Art Pieces",
			description: "Browse and rent unique art pieces for your space.",
			icon: "🎨",
		},
		{
			title: "Follow Artists",
			description: "Stay updated on your favorite artists' latest creations.",
			icon: "👩‍🎨",
		},
		{
			title: "Save Favorites",
			description: "Curate your own gallery of saved artworks.",
			icon: "❤️",
		},
		{
			title: "Order Originals",
			description: "Purchase original artworks directly from artists.",
			icon: "🖼️",
		},
	];

	return (
		<div className='services-section py-16 bg-gray-100'>
			<h2 className='text-3xl font-bold text-center mb-8'>Our Services</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8'>
				{services.map((service, index) => (
					<div
						key={index}
						className='service-card p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300'
					>
						<div className='text-5xl mb-4'>{service.icon}</div>
						<h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
						<p className='text-gray-600'>{service.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
