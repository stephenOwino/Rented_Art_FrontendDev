import React, { useState } from 'react';
import ArtForm from '../components/artform';

const ArtPieces = () => {

  

  return (
    <div>
 <header className="App-header py-24" >
        <h1 className="text-4xl font-bold mb-4 text-indigo-700 drop-shadow-lg">Art Submission Form</h1>
        <ArtForm />
      </header>
    </div>
   
  );
};

export default ArtPieces;
