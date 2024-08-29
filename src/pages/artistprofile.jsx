import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArtistProfile() {
  const { id } = useParams(); // Get the artist ID from the URL
  const [artist, setArtist] = useState({});
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
   
    fetch(`https://api.example.com/artist/${id}`)
      .then(response => response.json())
      .then(data => {
        setArtist(data.artist);
        setArtworks(data.artworks);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:w-1/3 p-4">
        <ArtistDetails artist={artist} />
      </div>
      <div className="md:w-2/3 p-4">
        <ArtworkGrid artworks={artworks} />
      </div>
    </div>
  );
}

function ArtistDetails({ artist }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{artist.name}</h2>
      <p className="text-gray-600">{artist.bio}</p>
      {/* Add more artist details here */}
    </div>
  );
}

function ArtworkGrid({ artworks }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-48 object-cover rounded-md" />
          <h3 className="text-lg font-bold mt-2">{artwork.title}</h3>
          <p className="text-gray-600">${artwork.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ArtistProfile;
