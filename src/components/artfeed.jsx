
import React, { useState, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import ProductGrid from '../components/productGrid';
import Mobileproduct from './mobileproduct';
import { MdNavigateNext } from "react-icons/md";
import { BrowserRouter as Router } from 'react-router-dom';





const Artfeed = () => {
   const [rating, setRating] = useState(0);

   const handleRatingChange = (newRating) => {
     setRating(newRating);
   };

   
   const [clickedItem, setClickedItem] = useState(null);

   const handleItemClick = (item) => {
     setClickedItem(item);
   };
 

  return (
   <div className="flex flex-col ">



  {/*  Product page*/}
{   /* large screen */          }
<div className="hidden md:flex px-12   pb-[100px] bg-white flex flex-col">
  <div className='flex flex-row w-[125px] h-[60px] pt-[40px] justify-between'>
  <div className=' font-inter font-[500] text-[14px] w-[40px] text-[#6C7275]'>
      Home
   </div>
   <MdNavigateNext className='mt-[3px] mr-[20px] text-[#6C7275]'/>
   <div className=' font-inter font-[600] text-[14px] w-[40px]'>
      Paintings
   </div>
  </div>

  
  <div className="flex flex-row gap-4 mt-2">
  <div className="w-1/4 bg-white flex flex-col m ">
 <div className='filter flex flex-row mb-8'>
 <TbAdjustmentsHorizontal className="text-[#121212] h-8 p-[4px] w-8 " />
 <div className=' font-inter text-[20px] text-[#121212] px-[4px] font-[600]'>Filter</div>
    </div>

 <div className='Category '>
 <div className='my-2 text-left font-inter font-[600] text-[16px] pl-2'>CATEGORIES</div>
 <div class="max-h-20 overflow-y-auto font-inter text-[14px] font-semibold text-[#807E7E] pr-4 pl-2 text-left">
 
 <ul>
      {['Fine Art', 'Conceptual Art', 'Figurative', 'Documentary', 'Modern', 'Contemporary'].map((item, index) => (
        <li
          key={index}
          onClick={() => handleItemClick(item)}
          style={{
            color: clickedItem === item ? '#000' : '#807E7E',
            textDecoration: clickedItem === item ? 'underline' : 'none',
            cursor: 'pointer'
          }}
        >
          {item}
        </li>
      ))}
    </ul>
</div>
 </div>
 <div className='price my-2 mx-1'>
   <div className='my-2 text-left font-inter font-[600] text-[16px]'>PRICE</div>
   <div className=''>   
   <ul className="w-full px-1">
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="react-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">All Price</label>
        <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="vue-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$100.00 - 200.00</label>
        <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="angular-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$200.00 - 300.00</label>
        <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="laravel-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$300.00 - 400.00</label>
        <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="angular-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$400.00 - 500.00</label>
        <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="laravel-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$500.00 - 600.00</label>
        <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="laravel-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">$600+</label>
        <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
    </ul>
   </div>
 </div>
 <div className='price my-2 mx-1'>
   <div className='my-2 text-left font-inter font-[600] text-[16px]'>Size</div>
   <div className=''>   
   <ul className="w-full px-1">
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="react-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">All Sizes</label>
        <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="vue-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">Small</label>
        <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="angular-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">Medium</label>
        <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="laravel-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">Large</label>
        <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
      <li className="flex flex-row justify-between w-full  h-[24px]">
        <label htmlFor="angular-checkbox" className="w-full text-left text-[14px] font-[600] font-inter text-[#6C7275]">Oversized</label>
        <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-0" style={{ accentColor: 'black' }} />
      </li>
    </ul>
   </div>
 </div>
</div>


<div className="w-3/4 bg-white  flex flex-col ">

 <div className='products   '>
<ProductGrid />
 </div>

</div>

  </div>

</div>  



{   /*small screen */}
<div className=" md:hidden flex flex-col bg-white pb-[80px] pl-8">
  <div className='flex flex-col pr-[40px]'>
 <div className='py-[1px] h-[56px] border-b-t-[1px] border-[#EAEAEA] justify-between flex flex-row'>
   <div className='flex flex-row'>
   <TbAdjustmentsHorizontal className="text-[#121212] h-8 p-[4px] w-8 " />
   <span className='text-[16px] font-inter font-semibold ml-[2px]'>Filter</span>
   </div>
  
 </div>
 <div className='py-[1px] flex flex-row justify-between mb-12'>
   <div className='text-[16px] font-inter font-semibold ml-[2px]'> Paintings</div>
    <div className='text-[16px] font-inter font-semibold ml-[2px] flex flex-row'>
 
    </div>
 </div>
  </div>
  <div className=''>
  <Mobileproduct />
  </div>

</div>





{  /* Newsletter*/}
{   /* large screen */          }



   </div>
  );
};

export default Artfeed;