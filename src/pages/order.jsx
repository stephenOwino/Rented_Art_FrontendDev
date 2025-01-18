import React from "react";
import Orderbody from "../components/orderbody";
import Footer from "../components/footer";

const Order = () => {
	return (
		<div className='gap-2 flex flex-col'>
			<div>
				<div className='md:hidden'></div>
				<Orderbody />
				<Footer />
			</div>
		</div>
	);
};

export default Order;
