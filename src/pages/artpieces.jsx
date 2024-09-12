import React from 'react';
import ArtForm from '../components/artform';

const ArtPieces = () => {

  

  return (
    <div className='bg-gradient-to-l from-indigo-700 via-amber-500 to-lime-300 w-[100%] p-12 flex justify-center'>
    
 <header className="App-header py-8  w-2/5 bg-white shadow-xl rounded-2xl" >
        <h1 className="text-4xl font-bold mb-4 text-indigo-900 drop-shadow-lg">Art Submission Form</h1>
        <ArtForm />
      </header>
    </div>
   
  );
};

export default ArtPieces;
