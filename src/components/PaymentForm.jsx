// Import necessary libraries
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLock, FaStar, FaSmile } from "react-icons/fa";

const PaymentForm = () => {
	const paypalRef = useRef(null);

	useEffect(() => {
		AOS.init({ duration: 1000, easing: "ease-out", once: true });

		if (paypalRef.current && !paypalRef.current.innerHTML) {
			window.paypal
				.Buttons({
					createOrder: (data, actions) => {
						return actions.order.create({
							purchase_units: [
								{
									description: "SewStyle Payment",
									amount: {
										currency_code: "USD",
										value: "10.00",
									},
								},
							],
						});
					},
					onApprove: async (data, actions) => {
						const order = await actions.order.capture();
						alert("Payment Successful!");
					},
					onError: (err) => {
						alert("Payment Failed");
					},
				})
				.render(paypalRef.current);
		}
	}, []);

	return (
		<div
			className='bg-white rounded-lg shadow-lg p-6 space-y-6'
			data-aos='fade-up'
		>
			<h3 className='text-2xl font-bold text-gray-800 text-center'>
				Complete Your Payment
			</h3>
			<div ref={paypalRef} className='text-center'></div>
		</div>
	);
};
