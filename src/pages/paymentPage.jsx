import { FaLock, FaSmile, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
	const navigate = useNavigate();
	return (
		<div className='bg-gray-100 min-h-screen p-6 flex flex-col lg:flex-row gap-8'>
			{/* Left Section: Cart Summary */}
			<div
				className='bg-white flex-1 rounded-lg shadow-lg p-6'
				data-aos='fade-right'
			>
				<h2 className='text-2xl font-semibold text-gray-800'>Cart</h2>
				<div className='mt-4 flex items-start gap-4'>
					<img
						src='https://via.placeholder.com/100'
						alt='Product'
						className='w-24 h-24 rounded-md object-cover'
					/>
					<div className='flex-1'>
						<h3 className='text-lg font-bold text-gray-800'>
							One night in Mong Kok #8
						</h3>
						<p className='text-gray-600'>Cody Choi</p>
						<p className='text-gray-600'>Photography</p>
						<p className='text-gray-800 font-semibold'>$975.00</p>
					</div>
					<button className='text-red-500 text-sm font-bold'>Remove</button>
				</div>
				<div className='mt-6'>
					<button className='text-blue-600 underline text-sm'>
						Apply Promo / Gift Card Code
					</button>
				</div>
			</div>

			{/* Right Section: Summary and Checkout */}
			<div
				className='bg-white flex-1 rounded-lg shadow-lg p-6'
				data-aos='fade-left'
			>
				<h2 className='text-2xl font-semibold text-gray-800'>
					Estimated Total
				</h2>
				<p className='text-gray-600 text-sm mt-2'>
					The purchase of photography and limited edition artworks as shipped by
					the artist is final sale.
				</p>
				<div className='flex justify-between items-center text-lg font-bold text-gray-900 mt-4'>
					<span>Total</span>
					<span>$975.00</span>
				</div>
				<button
					className='w-full bg-green-500 text-white py-2 mt-4 rounded-md text-lg hover:bg-green-600'
					onClick={() => navigate("/checkout")} // Redirect to "/checkout"
				>
					Checkout
				</button>

				<div className='mt-8 space-y-4'>
					<div className='flex items-start gap-4'>
						<FaStar className='text-yellow-500 text-xl' />
						<p className='text-gray-700'>
							<span className='font-bold'>Thousands Of Five-Star Reviews</span>{" "}
							- We deliver world-class customer service to all of our art
							buyers.
						</p>
					</div>
					<div className='flex items-start gap-4'>
						<FaLock className='text-gray-500 text-xl' />
						<p className='text-gray-700'>
							<span className='font-bold'>Safe & Secure Shopping</span> - All
							payments and transactions are secure and encrypted.
						</p>
					</div>
					<div className='flex items-start gap-4'>
						<FaSmile className='text-green-500 text-xl' />
						<p className='text-gray-700'>
							<span className='font-bold'>
								Support An Artist With Every Purchase
							</span>{" "}
							- We pay our artists more on every sale than other galleries.
						</p>
					</div>
				</div>

				<div className='mt-6 border-t pt-4 text-center space-y-2'>
					<p className='text-gray-500'>Need More Help?</p>
					<div className='flex justify-center gap-4'>
						<button className='text-sm bg-gray-200 py-1 px-4 rounded hover:bg-gray-300'>
							Enjoy Complimentary Art Advisory
						</button>
						<button className='text-sm bg-gray-200 py-1 px-4 rounded hover:bg-gray-300'>
							Contact Customer Support
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentPage;
