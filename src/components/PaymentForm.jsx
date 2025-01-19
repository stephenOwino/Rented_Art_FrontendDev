import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
	const [orderDetails, setOrderDetails] = useState({
		price: "10",
		currency: "USD",
		method: "paypal",
		intent: "sale",
		description: "Test Payment",
	});

	const [paymentStatus, setPaymentStatus] = useState(null); // For tracking payment status

	const handlePayment = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"https://rented-art-server.onrender.com/pay", // Backend URL for payment initiation
				orderDetails
			);

			if (response.data.redirectUrl) {
				window.location.href = response.data.redirectUrl; // Redirect to PayPal approval page
			} else {
				setPaymentStatus("failure"); // In case there's no redirect URL
			}
		} catch (error) {
			console.error("Error initiating payment:", error);
			setPaymentStatus("failure");
		}
	};

	return (
		<div>
			{/* Display payment status */}
			{paymentStatus === "success" && (
				<div className='bg-green-100 p-4 mb-4 text-green-700'>
					Payment was successful!
				</div>
			)}
			{paymentStatus === "failure" && (
				<div className='bg-red-100 p-4 mb-4 text-red-700'>
					Payment failed. Please try again.
				</div>
			)}

			<form onSubmit={handlePayment} className='space-y-4'>
				<h3 className='text-2xl font-bold'>Payment</h3>
				<label className='block'>Accepted Cards</label>
				<div className='flex space-x-4 mb-4 text-2xl'>
					<i className='fa fa-cc-visa text-blue-900'></i>
					<i className='fa fa-cc-amex text-blue-500'></i>
					<i className='fa fa-cc-mastercard text-red-500'></i>
					<i className='fa fa-cc-discover text-orange-500'></i>
				</div>

				<div>
					<label htmlFor='price' className='block mb-1'>
						Total
					</label>
					<input
						type='text'
						id='price'
						name='price'
						value={orderDetails.price}
						onChange={(e) =>
							setOrderDetails({ ...orderDetails, price: e.target.value })
						}
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>
				<div>
					<label htmlFor='currency' className='block mb-1'>
						Currency
					</label>
					<input
						type='text'
						id='currency'
						name='currency'
						value={orderDetails.currency}
						onChange={(e) =>
							setOrderDetails({ ...orderDetails, currency: e.target.value })
						}
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>
				<div>
					<label htmlFor='method' className='block mb-1'>
						Payment Method
					</label>
					<input
						type='text'
						id='method'
						name='method'
						value={orderDetails.method}
						onChange={(e) =>
							setOrderDetails({ ...orderDetails, method: e.target.value })
						}
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>
				<div>
					<label htmlFor='intent' className='block mb-1'>
						Intent
					</label>
					<input
						type='text'
						id='intent'
						name='intent'
						value={orderDetails.intent}
						onChange={(e) =>
							setOrderDetails({ ...orderDetails, intent: e.target.value })
						}
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>
				<div>
					<label htmlFor='description' className='block mb-1'>
						Payment Description
					</label>
					<input
						type='text'
						id='description'
						name='description'
						value={orderDetails.description}
						onChange={(e) =>
							setOrderDetails({ ...orderDetails, description: e.target.value })
						}
						className='w-full p-2 border border-gray-300 rounded'
					/>
				</div>
				<button
					type='submit'
					className='bg-green-500 text-white w-full p-2 rounded hover:bg-green-600'
				>
					Continue to checkout
				</button>
			</form>
		</div>
	);
};

export default PaymentForm;
