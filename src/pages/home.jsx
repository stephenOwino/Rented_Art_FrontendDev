import React, { useState } from "react";
import axios from "axios";

function Home() {
	return (
		<div className=' flex flex-col text-left m-4 '>
			<div className='text-3xl drop-shadow-lg text-indigo-700'>
				𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-[70px]'>.</span>
			</div>
			<div className='text-3xl drop-shadow-lg text-indigo-700 mt-2'>
				{" "}
				𝓡𝓮𝓷𝓽𝓮𝓭 𝓐𝓻𝓽{" "}
			</div>
			<div className='text-3xl drop-shadow-lg text-indigo-700'>
				ℜ𝔢𝔫𝔱𝔢𝔡 𝔄𝔯𝔱 <span className='text-red-600 text-[70px]'>.</span>
			</div>
		</div>
	);
}

export default Home;
