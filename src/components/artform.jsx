import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from './productcontext';

const ArtForm = () => {
  const [artName, setArtName] = useState('');
  const [price, setPrice] = useState('');
  const [buy, setBuy] = useState('');
  const [rent, setRent] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [picture, setPicture] = useState(null);
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const imageUrl = URL.createObjectURL(picture);
    const newProduct = { 
      artname: artName,
      price: price, 
       imageUrl,
       buy: buy,
       rent: rent,
       width: width,
       height: height,
      };


      fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    
     
    addProduct(newProduct);
    navigate('/products');
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className=" ">
      
 <div className='max-w-md mx-auto p-4 space-y-4 text-left'>
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
          placeholder="Enter the price"
          required
        />
      </div>
   <div className='flex flex-row gap-x-2'>
   <div className="flex items-center gap-x-2">
            <input
              type="radio"
              id="rules"
              checked={buy}
              onChange={(e) => setBuy(e.target.checked)}
              className="h-6 w-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-700 bg-gray-500"
              required
            />
            <label htmlFor="rules" className="block text-sm font-medium text-gray-700">
           Buy
            </label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input
              type="radio"
              id="rules"
              checked={rent}
              onChange={(e) => setRent(e.target.checked)}
              className="h-6 w-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label htmlFor="rules" className="block text-sm font-medium text-gray-700">
            Rent
            </label>
          </div>
   </div>

   <div>
        <label className="block text-sm font-medium text-gray-700">Width</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter the width"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Height</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter the height"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Upload Image</label>
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
        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
      </div>
    </form>
  );
};

export default ArtForm;
