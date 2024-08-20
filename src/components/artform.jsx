import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './productcontext';

const ArtForm = () => {
  const [artName, setArtName] = useState('');
  const [price, setPrice] = useState('');
  const [picture, setPicture] = useState(null);
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const imageUrl = URL.createObjectURL(picture);
    const newProduct = { artName, price, imageUrl };

    addProduct(newProduct);
    navigate('/products');
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Art Name</label>
        <input
          type="text"
          value={artName}
          onChange={(e) => setArtName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter the name of the art"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter the price of the art"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Picture</label>
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
  );
};

export default ArtForm;
