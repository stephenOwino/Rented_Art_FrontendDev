import React from "react";

const PaymentOption = ({ paymentMethod, setPaymentMethod }) => {
	return (
		<div className='flex flex-col sm:flex-row sm:justify-around mb-6 space-y-4 sm:space-y-0'>
			<label
				className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
					paymentMethod === "PayPal"
						? "border-blue-500 bg-blue-50"
						: "border-gray-300"
				}`}
			>
				<input
					type='radio'
					name='paymentMethod'
					value='PayPal'
					className='mr-2'
					onChange={() => setPaymentMethod("PayPal")}
					checked={paymentMethod === "PayPal"}
				/>
				PayPal
			</label>
			<label
				className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
					paymentMethod === "CreditCard"
						? "border-blue-500 bg-blue-50"
						: "border-gray-300"
				}`}
			>
				<input
					type='radio'
					name='paymentMethod'
					value='CreditCard'
					className='mr-2'
					onChange={() => setPaymentMethod("CreditCard")}
					checked={paymentMethod === "CreditCard"}
				/>
				Credit/Debit Card
			</label>
			<label
				className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
					paymentMethod === "Klarna"
						? "border-blue-500 bg-blue-50"
						: "border-gray-300"
				}`}
			>
				<input
					type='radio'
					name='paymentMethod'
					value='Klarna'
					className='mr-2'
					onChange={() => setPaymentMethod("Klarna")}
					checked={paymentMethod === "Klarna"}
				/>
				Klarna
			</label>
		</div>
	);
};

export default PaymentOption;
