import React, { useState } from "react";
import { useNavigate } from "react-router-dom";




function Recommendation() {
	
    const [error, setError] = useState(null);
	return (
		<div className='container mx-auto p-4 pt-12 md:p-12 lg:p-20'>

			<h1 className='text-4xl font-bold mb-4 text-indigo-700 drop-shadow-lg'>
				<div className='text-5xl drop-shadow-sm text-indigo-700'>
					𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-[70px]'>.</span>
				</div>
			</h1>

		
			{error && (
				<div className='max-w-md mx-auto mb-4 p-2 text-red-700 bg-red-100 border border-red-400 rounded'>
					{error}
				</div>
			)}
         
			
		</div>
	);
}

export default Recommendation;
