import React from "react";

function FollowLikeButtons({ followOnly }) {
	return (
		<div className='flex justify-center mt-4'>
			{followOnly ? (
				<button className='bg-blue-500 text-white py-2 px-4 rounded'>
					Follow
				</button>
			) : (
				<>
					<button className='bg-blue-500 text-white py-2 px-4 rounded mr-2'>
						Like
					</button>
					<button className='bg-gray-300 text-gray-700 py-2 px-4 rounded'>
						Save
					</button>
				</>
			)}
		</div>
	);
}

export default FollowLikeButtons;
