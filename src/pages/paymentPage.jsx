import React from "react";
import PaymentForm from "../components/PaymentForm";

const PaymentPage = () => {
	return (
		<div className='flex flex-wrap p-8 bg-gray-100'>
			<div className='w-full md:w-3/4 p-4'>
				<div className='bg-white p-6 rounded shadow-md'>
					<PaymentForm />
				</div>
			</div>
			<div className='w-full md:w-1/4 p-4'>
				<div className='bg-white p-6 rounded shadow-md'>
					<h4 className='text-xl font-semibold mb-4'>
						Cart{" "}
						<span className='float-right text-black'>
							<i className='fa fa-shopping-cart'></i> <b>4</b>
						</span>
					</h4>
					<p>
						<a href='#' className='text-blue-500'>
							Product 1
						</a>
						<span className='float-right text-gray-600'>$1</span>
					</p>
					<p>
						<a href='#' className='text-blue-500'>
							Product 2
						</a>
						<span className='float-right text-gray-600'>$4</span>
					</p>
					<p>
						<a href='#' className='text-blue-500'>
							Product 3
						</a>
						<span className='float-right text-gray-600'>$3</span>
					</p>
					<p>
						<a href='#' className='text-blue-500'>
							Product 4
						</a>
						<span className='float-right text-gray-600'>$2</span>
					</p>
					<hr className='my-4' />
					<p className='font-bold'>
						Total{" "}
						<span className='float-right text-black'>
							<b>$10</b>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentPage;
