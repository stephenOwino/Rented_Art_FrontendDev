import React, { useState, useEffect } from 'react';
import painting from '../assets/1st-headset.png';
import painting2 from '../assets/Image2.jpg'



function Featured() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cartItems = [
    { id: 1, name: 'Product 1', price: '$20', description: 'Description for Product 1', Image: painting },
    { id: 2, name: 'Product 2', price: '$30', description: 'Description for Product 2', Image: painting2 },
    { id: 3, name: 'Product 3', price: '$40', description: 'Description for Product 3', Image: painting },
    { id: 4, name: 'Product 4', price: '$50', description: 'Description for Product 4', Image: painting2 },
    { id: 5, name: 'Product 5', price: '$60', description: 'Description for Product 5', Image: painting },
    { id: 6, name: 'Product 6', price: '$70', description: 'Description for Product 6', Image: painting2 },
  ];

  const maxIndex = Math.ceil(cartItems.length / 3);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + maxIndex) % maxIndex);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % maxIndex);
  };

  const getVisibleItems = () => {
    const start = activeIndex * 3;
    return cartItems.slice(start, start + 3);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();  // Automatically go to the next set of items
    }, 2000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [activeIndex]); // Dependency on activeIndex to reset the interval on change

  return (
    <div className=''>
      
		{/*Large screen*/}
    <div className="w-full hidden md:flex h-64 flex flex-col items-center justify-center relative px-4 ">
      <div className="w-full flex items-center justify-center flex-col">
        <div className='font-[500] text-5xl mb-12 underline'>Featured</div>
      
        <div className="w-4/5 flex justify-center items-center overflow-hidden">
          <div className="flex w-full h-full space-x-12">
            {getVisibleItems().map((item) => (
              <div
                key={item.id}
                className="w-1/3 bg-white p-8 rounded shadow-lg text-center"
              >
                 <img src={item.Image} alt={item.name} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
       
      </div>
    </div>


              {/*mobile responsive screen*/}
    <div className='md:hidden'>

    </div>
    </div>
  );
}

export default Featured;
