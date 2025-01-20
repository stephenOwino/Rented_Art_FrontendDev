import React, { useState, useRef, useEffect } from "react";

function CheckoutForm() {
	const paypal = useRef();
	const [cartItems, setCartItems] = useState([
		{
			id: 1,
			image: "https://via.placeholder.com/100",
			title: "One night in Mong Kok #8",
			artist: "Cody Choi",
			category: "Photography",
			price: 975.0,
			customs: 564.22,
			shipping: "Included",
		},
	]);

	const [showPaypal, setShowPaypal] = useState(false);

	const removeItem = (id) => {
		const updatedItems = cartItems.filter((item) => item.id !== id);
		setCartItems(updatedItems);
	};

	const totalPrice = cartItems.reduce(
		(total, item) => total + item.price + item.customs,
		0
	);

	useEffect(() => {
		if (showPaypal) {
			window.paypal
				.Buttons({
					createOrder: (data, actions, err) => {
						return actions.order.create({
							intent: "CAPTURE",
							purchase_units: [
								{
									description: "Your Art Purchase",
									amount: {
										currency_code: "USD", // Adjust currency as needed
										value: totalPrice.toFixed(2), // Use dynamic value from cart
									},
								},
							],
						});
					},
					onApprove: async (data, actions) => {
						const order = await actions.order.capture();
						console.log("Order successfully captured:", order);
					},
					onError: (err) => {
						console.log("PayPal Checkout Error:", err);
					},
				})
				.render(paypal.current);
		}
	}, [showPaypal, totalPrice]);

	return (
		<div className='flex flex-col lg:flex-row justify-between p-6 bg-gray-50'>
			{/* Left Section: Cart Details */}
			<div className='w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-md'>
				<h2 className='text-lg font-bold mb-4'>In Your Cart</h2>
				{cartItems.length > 0 ? (
					cartItems.map((item) => (
						<div
							key={item.id}
							className='flex items-start justify-between border-b pb-4 mb-4'
						>
							<div className='flex items-start'>
								<img
									src={item.image}
									alt={item.title}
									className='w-20 h-20 rounded-md mr-4'
								/>
								<div>
									<h3 className='font-semibold'>{item.title}</h3>
									<p className='text-sm text-gray-500'>{item.artist}</p>
									<p className='text-sm text-gray-500'>{item.category}</p>
									<p className='text-sm font-bold'>${item.price.toFixed(2)}</p>
									<p className='text-sm text-gray-500'>
										Customs Duties and Fees: ${item.customs.toFixed(2)}
									</p>
									<p className='text-sm text-gray-500'>
										Shipping: {item.shipping}
									</p>
								</div>
							</div>
							<button
								onClick={() => removeItem(item.id)}
								className='text-red-500 hover:underline'
							>
								X
							</button>
						</div>
					))
				) : (
					<p className='text-gray-500'>Your cart is empty.</p>
				)}

				<div className='mt-4'>
					<label
						htmlFor='shipping'
						className='block text-sm font-medium text-gray-700'
					>
						Shipping Address
					</label>
					<select
						id='shipping'
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
					>
						<option>Nairobi, Nairobi County 00100, KE</option>
						<option>Mombasa, Mombasa County 00200, KE</option>
						<option>Kisumu, Kisumu County 00300, KE</option>
					</select>
				</div>

				<div className='mt-4'>
					<label
						htmlFor='payment'
						className='block text-sm font-medium text-gray-700'
					>
						Payment Method
					</label>
					<select
						id='payment'
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
					>
						<option>PayPal</option>
						<option>Debit Card</option>
						<option>Credit Card</option>
					</select>
				</div>
			</div>

			{/* Right Section: Summary */}
			<div className='w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md mt-6 lg:mt-0'>
				<h2 className='text-lg font-bold mb-4'>Order Summary</h2>
				{cartItems.length > 0 ? (
					<>
						{cartItems.map((item) => (
							<div key={item.id} className='flex items-center mb-4'>
								<img
									src={item.image}
									alt={item.title}
									className='w-12 h-12 rounded-md mr-4'
								/>
								<div>
									<h3 className='font-semibold text-sm'>{item.title}</h3>
									<p className='text-sm text-gray-500'>
										Artwork Total: ${item.price + item.customs}
									</p>
								</div>
							</div>
						))}
						<div className='border-t pt-4'>
							<p className='flex justify-between text-sm text-gray-700'>
								Subtotal <span>${totalPrice.toFixed(2)}</span>
							</p>
							<p className='flex justify-between text-sm text-gray-700'>
								Shipping <span>Included</span>
							</p>
							<p className='flex justify-between text-sm text-gray-700'>
								Customs Duties and Fees{" "}
								<span>
									$
									{cartItems
										.reduce((total, item) => total + item.customs, 0)
										.toFixed(2)}
								</span>
							</p>
							<p className='flex justify-between font-semibold text-gray-900'>
								Estimated Total <span>${totalPrice.toFixed(2)}</span>
							</p>
						</div>
					</>
				) : (
					<p className='text-gray-500'>No items in cart.</p>
				)}

				{showPaypal ? (
					<div ref={paypal}></div>
				) : (
					<button
						onClick={() => setShowPaypal(true)}
						className='mt-4 w-full bg-blue-600 text-white py-2 rounded-md shadow-md hover:bg-blue-700'
					>
						Proceed to Payment
					</button>
				)}
			</div>
		</div>
	);
}

export default CheckoutForm;
