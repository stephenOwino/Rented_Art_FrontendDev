import React from "react";
import painting3 from '../assets/Image3.png'
import painting4 from '../assets/Image4.png'
import painting2 from '../assets/Image2.jpg'

function Editorial() {
	return (
		<div className="">
		{/*Large screen*/}
<div className="from-gray-100 hidden md:flex h-[40rem] bg-gradient-to-b px-20 ">
	
	<div className="mt-56 flex flex-row px-12 relative">
		<div  className="w-1/4 mt-32  ">
		<img src= {painting3} />
	</div>
	<div className="w-2/5 ">
	<img src= {painting2} />
	</div>
	<div className="h-[20rem] bg-white p-2 w-1/4 shadow-lg mt-20 flex flex-col ">
	<div className="font-[600] text-xl"> DISCOVER YOUR ART</div>
	<div className="text-[16px] font-[400]">
	we make it our mission to help you discover and buy from the best emerging artists around the world. Whether you’re looking to discover a new artist, add a statement piece to your home, or commemorate an important life event, Saatchi Art is your portal to thousands of original works by today’s top artists.
	</div>
	<div className='text-xl mt-4  text-indigo-700'>
				𝕽ebecca
		</div>
	<div>

	</div>
    
	</div>
	</div>
	
</div>

		{/*mobile responsive screen*/}
<div className=" md:hidden from-gray-100 hidden md:flex h-[20rem] bg-gradient-to-t">

	
		</div>
		</div>
		
		
	);
}

export default Editorial;
