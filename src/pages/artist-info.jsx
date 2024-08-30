import React, { useState } from "react";






function ArtistInfo() {
   
    const [bio, setBio] = useState('');
const [profilepic, setProfilepic] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
    
        const imageUrl = URL.createObjectURL(profilepic);
       // const newProduct = { bio,  imageUrl };
    
      
      };
    
      const handlePictureChange = (e) => {
        setProfilepic(e.target.files[0]);
      };

	return (
		<div className='container mx-auto p-4 pt-12 md:p-12 lg:p-20'>

			<h1 className='text-4xl font-bold mb-4 text-indigo-700 drop-shadow-lg'>
				<div className='text-5xl drop-shadow-sm text-indigo-700'>
					𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-[70px]'>.</span>
				</div>
			</h1>

		
		

<form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
<div>
  <label className="block text-sm font-medium text-gray-700">Bio</label>
  <textarea
    value={bio}
    onChange={(e) => {
      const inputText = e.target.value;
      const wordCount = inputText.trim().split(/\s+/).length;
      if (wordCount <= 200) {
        setBio(inputText);
      }
    }}
    className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    placeholder="Enter your bio (up to 200 words)"
    rows="6"
    maxLength={2000} // Approximate character limit to ensure 200 words
    required
  />
</div>


      <div>
        <label className="block text-sm font-medium text-gray-700"> Profile Picture</label>
        <input
          type="file"
          onChange={handlePictureChange}
          className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer text-gray-700 focus:outline-none"
          accept="image/*"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
         
			
		</div>
	);
}

export default ArtistInfo;

