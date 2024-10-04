// src/api.js
export const createPayPalOrder = () => {
	return new Promise((resolve, reject) => {
		window.paypal
			.Buttons({
				createOrder: (data, actions) => {
					return actions.order
						.create({
							purchase_units: [
								{
									amount: {
										value: "100.00", // Set the amount dynamically as needed
									},
								},
							],
						})
						.then((order) => resolve(order.id));
				},
				onError: (err) => reject(err),
			})
			.render("body");
	});
};

export const capturePayPalOrder = (orderId) => {
	return new Promise((resolve, reject) => {
		window.paypal
			.Buttons({
				onApprove: (data, actions) => {
					return actions.order.capture().then((details) => resolve(details));
				},
				onError: (err) => reject(err),
			})
			.render("body");
	});
};
