import React, { useState } from 'react';
import painting from '../assets/1st-headset.png';
import { useNavigate } from 'react-router-dom';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';


const Mobileproduct = () => {
 

   
  
    const gridClassName = `products grid grid-cols-2  `;
  
  
  
   
      const paintings = [
        { img: painting, name: 'michellango', price: '$549.00' },
        { img: painting, name: 'michellango', price: '$549.00' },
        { img: painting, name: 'michellango', price: '$549.00' },
        { img: painting, name: 'michellango', price: '$549.00' },
      
      ];
    

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
      
  
      <div className='flex flex-col '>
       
      <div className={gridClassName}>
         
        {paintings.map((painting, index) => ( // Render 12 product items
          <div key={index} className="w-[152px] h-[320px] flex flex-col ">
            <div className="h-4/5">
            <BasePopup className=" " id={id} open={open} anchor={anchor}>
                  <PopupBody className='text-white w-full ' onClick={handlePopupClick}>Add to Cart</PopupBody>
                </BasePopup>
        
              <img className='w-full h-full'src={painting.img} onClick={handleClick} onMouseEnter={handleClick} alt={painting.name} />
            </div>
        <div className="h-1/5 bg-white flex flex-col mb-4">
              <div className="h-1/3 text-left">
                {/* Your StarRating component here */}
                Like
              </div>
              <div className="h-1/3 bg-white font-inter text-left text-[16px] font-[600]">{painting.name}</div>
              <div className="h-1/3 bg-white font-inter text-left text-[16px] font-[600]">{painting.price}</div>
            </div>
           
          </div>
        ))}
        
      </div>
      <div className='justify-center items-center my-8 mx-24'>
      <button
        className=" w-[163px] h-[40px] border-[#141718] border-[1px] rounded-[8px] text-[#141718] text-center "
      >
        Show more
      </button>
      </div>
      </div>
    );
  };  

export default Mobileproduct;
