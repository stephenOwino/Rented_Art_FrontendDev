import React, { useEffect, useRef } from "react";

const PaymentForm = () => {
	const paypalRef = useRef();

	useEffect(() => {
		// Load PayPal Buttons
		window.paypal
			.Buttons({
				createOrder: (data, actions) => {
					return actions.order.create({
						purchase_units: [
							{
								description: "Test Payment", // Can be dynamic based on your form data
								amount: {
									currency_code: "USD", // Dynamic based on selected currency
									value: "10.00", // Dynamic based on selected total
								},
							},
						],
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					console.log("Payment Successful:", order);
					// Here, you can display a success message, or redirect the user.
					alert("Payment Successful!");
				},
				onError: (err) => {
					console.error("Error during payment:", err);
					alert("Payment Failed");
				},
			})
			.render(paypalRef.current); // Render PayPal button here
	}, []);

	return (
		<form className='space-y-4'>
			<h3 className='text-2xl font-bold'>Payment</h3>
			<label className='block'>Accepted Cards</label>
			<div className='flex space-x-4 mb-4 text-2xl'>
				<i className='fa fa-cc-visa text-blue-900'></i>
				<i className='fa fa-cc-amex text-blue-500'></i>
				<i className='fa fa-cc-mastercard text-red-500'></i>
				<i className='fa fa-cc-discover text-orange-500'></i>
			</div>

			<div className='mb-4'>
				<p className='font-bold'>Total: $10.00</p>
			</div>

			{/* PayPal Button will be rendered here */}
			<div ref={paypalRef}></div>
		</form>
	);
};

export default PaymentForm;
