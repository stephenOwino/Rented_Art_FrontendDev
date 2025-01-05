import React, { useState, useEffect } from "react";
import painting from "../assets/1st-headset.png";
import painting2 from "../assets/Image2.jpg";

function Featured() {
	const [activeIndex, setActiveIndex] = useState(0);
	const cartItems = [
		{
			id: 1,
			name: "Product 1",
			price: "$20",
			description: "Description for Product 1",
			Image: painting,
		},
		{
			id: 2,
			name: "Product 2",
			price: "$30",
			description: "Description for Product 2",
			Image: painting2,
		},
		{
			id: 3,
			name: "Product 3",
			price: "$40",
			description: "Description for Product 3",
			Image: painting,
		},
		{
			id: 4,
			name: "Product 4",
			price: "$50",
			description: "Description for Product 4",
			Image: painting2,
		},
		{
			id: 5,
			name: "Product 5",
			price: "$60",
			description: "Description for Product 5",
			Image: painting,
		},
		{
			id: 6,
			name: "Product 6",
			price: "$70",
			description: "Description for Product 6",
			Image: painting2,
		},
	];

	const getMaxItemsPerScreen = () => {
		if (window.innerWidth >= 768 && window.innerWidth < 1024) return 2; // Medium screens
		if (window.innerWidth >= 1024) return 3; // Large screens
		return 1; // Small screens
	};

	const [itemsPerScreen, setItemsPerScreen] = useState(getMaxItemsPerScreen);

	useEffect(() => {
		const handleResize = () => setItemsPerScreen(getMaxItemsPerScreen());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const maxIndex = Math.ceil(cartItems.length / itemsPerScreen);

	const handleNextClick = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % maxIndex);
	};

	const getVisibleItems = () => {
		const start = activeIndex * itemsPerScreen;
		return cartItems.slice(start, start + itemsPerScreen);
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			handleNextClick(); // Automatically go to the next set of items
		}, 3000); // Change every 3 seconds

		return () => clearInterval(intervalId); // Clean up the interval on component unmount
	}, [activeIndex]);

	return (
		<div className='w-full'>
			{/* Section Header */}
			<div className='text-center font-medium text-3xl md:text-4xl lg:text-5xl mb-8 underline'>
				Featured
			</div>

			{/* Large and Medium Screens */}
			<div className='hidden md:flex flex-col items-center justify-center px-4'>
				<div className='w-4/5 flex justify-center items-center overflow-hidden'>
					<div className='flex w-full h-full space-x-6 md:space-x-8 lg:space-x-12'>
						{getVisibleItems().map((item) => (
							<div
								key={item.id}
								className='w-1/3 bg-white p-4 md:p-6 lg:p-8 rounded shadow-lg text-center'
							>
								<img
									src={item.Image}
									alt={item.name}
									className='w-full h-40 md:h-48 object-cover mb-4'
								/>
								<h2 className='text-xl md:text-2xl font-bold mb-2'>
									{item.name}
								</h2>
								<p className='text-gray-600'>{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Small Screens */}
			<div className='md:hidden px-4 space-y-6'>
				{getVisibleItems().map((item) => (
					<div
						key={item.id}
						className='bg-white p-4 rounded shadow-lg text-center'
					>
						<img
							src={item.Image}
							alt={item.name}
							className='w-full h-40 object-cover mb-4'
						/>
						<h2 className='text-xl font-bold mb-2'>{item.name}</h2>
						<p className='text-gray-600'>{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Featured;
