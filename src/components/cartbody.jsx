import React from "react";
import painting2 from "../assets/Image2.jpg";
import { useNavigate } from "react-router-dom";

const Cartbody = () => {
	// Sample cart items
	const cartItems = [
		{
			id: 1,
			image: painting2,
			title: "Art Piece 1",
			price: 50,
			quantity: 1,
		},
		{
			id: 2,
			image: painting2,
			title: "Art Piece 2",
			price: 30,
			quantity: 2,
		},
	];

	const navigate = useNavigate(); // Initialize navigate

	const handleCheckout = () => {
		navigate("/payment/page"); // Navigate to the payment page
	};

	return (
		<>
			{/* Large screen */}
			<div className='hidden md:flex flex-col px-32'>
				<div className='flex flex-row space-x-8'>
					{cartItems.map((item) => (
						<div
							key={item.id}
							className='flex flex-row w-full bg-white p-4 rounded-lg shadow-md mb-6'
						>
							<div className='w-1/3'>
								<img
									src={item.image}
									alt={item.title}
									className='blur-[5px] w-[20rem] h-[20rem] object-cover rounded-lg'
								/>
							</div>
							<div className='w-2/3 flex flex-col justify-between px-6'>
								<div className='flex justify-between items-center mb-4'>
									<h2 className='text-xl font-semibold'>{item.title}</h2>
									<p className='text-lg'>${item.price}</p>
								</div>
								<div className='flex justify-between items-center'>
									<div className='flex items-center space-x-2'>
										<span>Quantity: </span>
										<button className='bg-gray-200 p-1 rounded-full'>-</button>
										<span>{item.quantity}</span>
										<button className='bg-gray-200 p-1 rounded-full'>+</button>
									</div>
									<button className='bg-red-500 text-white px-4 py-2 rounded-md'>
										Remove
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='flex justify-between items-center mt-6'>
					<p className='text-xl font-semibold'>
						Total: $
						{cartItems.reduce(
							(total, item) => total + item.price * item.quantity,
							0
						)}
					</p>
					<button
						onClick={handleCheckout} // Add onClick handler
						className='bg-blue-500 text-white py-2 px-6 rounded-md'
					>
						Proceed to Checkout
					</button>
				</div>
			</div>

			{/* Mobile screen */}
			<div className='md:hidden flex flex-col px-6 py-4'>
				{cartItems.map((item) => (
					<div
						key={item.id}
						className='flex flex-row bg-white p-4 rounded-lg shadow-md mb-4'
					>
						<div className='w-1/3'>
							<img
								src={item.image}
								alt={item.title}
								className='blur-[5px] w-[8rem] h-[8rem] object-cover rounded-lg'
							/>
						</div>
						<div className='w-2/3 flex flex-col justify-between pl-4'>
							<div className='flex justify-between items-center mb-2'>
								<h2 className='text-lg font-semibold'>{item.title}</h2>
								<p className='text-lg'>${item.price}</p>
							</div>
							<div className='flex justify-between items-center'>
								<div className='flex items-center space-x-2'>
									<span>Qty: </span>
									<button className='bg-gray-200 p-1 rounded-full'>-</button>
									<span>{item.quantity}</span>
									<button className='bg-gray-200 p-1 rounded-full'>+</button>
								</div>
								<button className='bg-red-500 text-white px-4 py-1 rounded-md'>
									Remove
								</button>
							</div>
						</div>
					</div>
				))}

				<div className='flex justify-between items-center mt-4'>
					<p className='text-lg font-semibold'>
						Total: $
						{cartItems.reduce(
							(total, item) => total + item.price * item.quantity,
							0
						)}
					</p>
					<button
						onClick={handleCheckout} // Add onClick handler
						className='bg-blue-500 text-white py-2 px-6 rounded-md'
					>
						Proceed to Checkout
					</button>
				</div>
			</div>
		</>
	);
};

export default Cartbody;
