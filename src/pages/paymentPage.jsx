import React, { useState } from "react";
import PaymentOption from "../components/PaymentOption";

const PaymentPage = () => {
	const [paymentMethod, setPaymentMethod] = useState("");

	return (
		<div className='max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-xl mt-8'>
			<h2 className='text-3xl font-semibold text-center mb-6'>
				Choose Your Payment Method
			</h2>

			{/* Payment Options Component */}
			<PaymentOption
				paymentMethod={paymentMethod}
				setPaymentMethod={setPaymentMethod}
			/>

			{/* Conditional rendering of payment method forms */}
			{paymentMethod === "PayPal" && (
				<div className='mb-6'>
					<label className='block text-gray-700 font-medium mb-2'>
						PayPal Email
					</label>
					<input
						type='email'
						className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
						placeholder='Enter your PayPal email'
						required
					/>
				</div>
			)}

			{paymentMethod === "CreditCard" && (
				<div className='mb-6'>
					<label className='block text-gray-700 font-medium mb-2'>
						Card Number
					</label>
					<input
						type='text'
						className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
						placeholder='Card Number'
						required
					/>
					<div className='flex space-x-4 mt-4'>
						<div className='w-1/2'>
							<label className='block text-gray-700 font-medium mb-2'>
								MM / YY
							</label>
							<input
								type='text'
								className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
								placeholder='MM / YY'
								required
							/>
						</div>
						<div className='w-1/2'>
							<label className='block text-gray-700 font-medium mb-2'>
								CVC
							</label>
							<input
								type='text'
								className='w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
								placeholder='CVC'
								required
							/>
						</div>
					</div>
				</div>
			)}

			{paymentMethod === "Klarna" && (
				<div className='mb-6'>
					<p className='text-gray-700'>
						Klarna allows you to pay in 4 interest-free payments. Proceed to
						Klarna to complete your purchase.
					</p>
				</div>
			)}

			{/* Billing Address Section */}
			<div className='mb-6'>
				<label className='block text-gray-700 font-medium mb-2'>
					Billing Address
				</label>
				<div className='mt-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-4'>
					<label className='inline-flex items-center'>
						<input
							type='checkbox'
							className='form-checkbox h-5 w-5 text-blue-600'
						/>
						<span className='ml-2 text-gray-600'>Use my shipping address</span>
					</label>
					<label className='inline-flex items-center'>
						<input
							type='checkbox'
							className='form-checkbox h-5 w-5 text-blue-600'
						/>
						<span className='ml-2 text-gray-600'>Use a different address</span>
					</label>
				</div>
			</div>

			{/* Submit Button */}
			<button className='bg-blue-600 text-white py-3 px-6 rounded-lg w-full font-medium hover:bg-blue-700 transition duration-300'>
				Submit Payment
			</button>

			{/* Order Summary */}
			<div className='mt-8 border-t pt-6'>
				<h3 className='text-xl font-bold mb-4'>Order Summary</h3>
				<div className='flex justify-between mb-2'>
					<span>Subtotal</span>
					<span>$36.00</span>
				</div>
				<div className='flex justify-between mb-2'>
					<span>Tax</span>
					<span>$3.00</span>
				</div>
				<div className='flex justify-between font-bold text-lg'>
					<span>Total</span>
					<span>$39.00</span>
				</div>
			</div>
		</div>
	);
};

export default PaymentPage;
