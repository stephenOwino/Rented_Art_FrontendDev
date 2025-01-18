import React from "react";
import Footer from "../components/footer";
import Cartbody from "../components/cartbody";

function Cart() {
	return (
		<div className=' flex flex-col '>
			<div className='bg-gray-100 '>
				<Cartbody />
			</div>
			<Footer />
		</div>
	);
}

export default Cart;
