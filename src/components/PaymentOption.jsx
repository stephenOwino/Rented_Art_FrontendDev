import React from "react";

const PaymentOption = ({ paymentMethod, setPaymentMethod }) => {
	return (
		<div className='flex flex-col sm:flex-row sm:justify-between mb-6 space-y-4 sm:space-y-0'>
			{["PayPal", "CreditCard", "Klarna"].map((method) => (
				<label
					key={method}
					className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors duration-300 ${
						paymentMethod === method
							? "border-blue-500 bg-blue-50"
							: "border-gray-300"
					}`}
				>
					<input
						type='radio'
						name='paymentMethod'
						value={method}
						className='mr-3'
						onChange={() => setPaymentMethod(method)}
						checked={paymentMethod === method}
					/>
					<span className='font-medium capitalize'>{method}</span>
				</label>
			))}
		</div>
	);
};

export default PaymentOption;
