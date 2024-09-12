import React from "react";
import FollowLikeButtons from "./FollowLikeButtons";
import Addartbutton from "./addartbutton";

function ArtistDetails({ artist }) {
	return (
		<div className='bg-white shadow-md p-6 '>
			<div className='flex flex-col items-center'>
				<img
					src={artist.profilePicture || "https://via.placeholder.com/150"}
					alt={artist.name}
					className='w-60 h-60 object-cover rounded-full border-4 border-gray-200 mb-4'
				/>
				<div className='text-center flex flex-col'>
					<h1 className='text-3xl font-bold mb-2'>{artist.name}</h1>
					<p className='text-gray-700 mb-4  text-center'>
						{artist.description || "No description available."}
					</p>
					<div className=' flex flex-row justify-between'>
						<FollowLikeButtons followOnly={true} />
						<Addartbutton addbutton={true} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ArtistDetails;
