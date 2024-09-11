import React from "react";

function Addartbutton({ addbutton }) {
	return (
		<div className='flex justify-center mt-4'>
			{addbutton ? (
                <a href="/artpieces">
				<button className='bg-blue-500 text-white py-2 px-4 rounded'>
				 Upload Art
				</button>
                </a>
			) : (
			<></>
			)}
		</div>
	);
}

export default Addartbutton;
