import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import painting from '../assets/1st-headset.png';

import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';


const ProductGrid = () => {
  const [gridSize, setGridSize] = useState(3); // Initial grid size (3x3)

  const toggleGrid = () => {
    // Ensure gridSize remains 2 or 3
    setGridSize((prevGridSize) => (prevGridSize === 3 ? 2 : 3));
  };

  const gridClassName = `products grid grid-cols-${gridSize}-gap-1 `;
  const [rating, setRating] = useState(0);

console.log( gridSize);
console.log (gridClassName);

const paintingImages = [painting, painting, // Include all image paths here
  // ..., more image paths
  ];
  const paintings = [
    { img: painting, name: 'michellango', price: '$549.00' },
    { img: painting, name: 'michellango', price: '$549.00' },
    { img: painting, name: 'michellango', price: '$549.00' },
    { img: painting, name: 'michellango', price: '$549.00' },
    { img: painting, name: 'michellango', price: '$549.00' },
    { img: painting, name: 'michellango', price: '$549.00' },
   
  ];

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  const [anchor, setAnchor] = React.useState(null);

  const navigate = useNavigate();

  const handlePopupClick = () => {
    navigate('/cart');
  };


  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;

  const PopupBody = styled('div')(
    ({ theme }) => `
    
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid black;
    background-color: black ;
    box-shadow:
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    z-index: 0;
  `,
  );
  


  return (
    

    <div className='flex flex-col'>
    

    <button onClick={toggleGrid}>
        {gridSize === 3 ? '' : ''}
      </button>

      <div className={`products grid grid-cols-2 justify-space-around`}>
        {paintings.map((painting, index) => (
          <div key={index} className="w-[222px] h-[433px] flex flex-col">
            <div className="h-4/5">
     
                <BasePopup className=" " id={id} open={open} anchor={anchor}>
                  <PopupBody className='text-white w-full ' onClick={handlePopupClick}>Add to Cart</PopupBody>
                </BasePopup>
        
              <img className='w-[25rem] h-[18rem]' src={painting.img} onClick={handleClick}  onMouseEnter={handleClick}  alt={painting.name} />
            </div>
            <div className="h-1/5 bg-white flex flex-col text-left -mt-12 mb-4">
              <div className="h-1/3">
              Like
              </div>
              <div className="h-1/3 bg-white font-inter  text-[16px]  font-[600]">{painting.name}</div>
              <div className="h-1/3 bg-white font-inter  text-[16px]  font-[600]">{painting.price}</div>
            </div>
           
          </div>
        ))}
      </div>

      <div className='justify-center items-center my-8 px-[250px]'>
        <button className="w-[163px] h-[40px] border-[#141718] border-[1px] font-[500] text-inter text-[16px] rounded-[8px] text-[#141718] text-center">
          Show more
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
