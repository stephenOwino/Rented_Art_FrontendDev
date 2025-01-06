const Contact = () => {
	return (
		<div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
			{/* Contact Section */}
			<section className='py-12 px-6 bg-white shadow-md rounded-lg max-w-4xl w-full mb-8'>
				<div className='text-center'>
					<h2 className='text-4xl font-semibold text-indigo-900 mb-4'>
						Contact Us
					</h2>
					<p className='text-lg text-gray-700 mb-6'>
						We’re here to help! Whether you have questions, need support, or
						just want to get in touch, feel free to contact us. Our team is
						ready to assist you in any way we can.
					</p>
				</div>

				<div className='space-y-6'>
					<div className='flex items-center justify-center bg-gray-50 p-6 rounded-lg shadow-md'>
						<div className='flex flex-col items-center'>
							<h3 className='text-xl font-semibold text-indigo-900 mb-2'>
								Email Us
							</h3>
							<p className='text-gray-700 text-lg'>
								For general inquiries, support, or feedback, reach us at:
							</p>
							<a
								href='mailto:stephenowin233@gmail.com'
								className='text-indigo-600 text-lg hover:text-indigo-900'
							>
								stephenowin233@gmail.com
							</a>
						</div>
					</div>

					<div className='flex items-center justify-center bg-gray-50 p-6 rounded-lg shadow-md'>
						<div className='flex flex-col items-center'>
							<h3 className='text-xl font-semibold text-indigo-900 mb-2'>
								Call Us
							</h3>
							<p className='text-gray-700 text-lg'>
								If you prefer speaking to someone directly, you can reach us by
								phone:
							</p>
							<a
								href='tel:+254114825652'
								className='text-indigo-600 text-lg hover:text-indigo-900'
							>
								+254 114 825 652
							</a>
						</div>
					</div>
				</div>

				<div className='mt-8 text-center'>
					<p className='text-lg text-gray-700'>
						Our team is available during regular business hours and will respond
						to your inquiry as soon as possible. Thank you for reaching out!
					</p>
				</div>
			</section>

			{/* Footer Section */}
			<footer className='bg-black text-white py-4 w-full'>
				<div className='text-center'>
					<p className='text-sm'>© 2025 Rented Art. All Rights Reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default Contact;
