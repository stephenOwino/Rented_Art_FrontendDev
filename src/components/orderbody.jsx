import React from 'react';


import { GrPrevious } from "react-icons/gr";




const Orderbody = () => {
 

   
     
        
  
  return (
  <>
  
  {  /* large screen */  }
    <div className="hidden md:flex flex-col mt-12 justify-center items-center  text-[#141718]">

    <div className='font poppins text-[54px] text-center  font-[500] text-indigo-800 text-center'>Complete!</div>

 
  <div className="px-[95px] py-[80px] rounded-[1px] h-[738px] space-y-[40px] w-[730px] shadow-xl justify-center items-center  mb-[50px]">
<div className='w-full h-[138px]'>
    <div className='text-[28px] font-poppins text-[6C7275] text-center '>Thank You!</div>
    <div className='text-center text-[40px] font-poppins font-[23262F] '>Your order has been received</div>
</div>

<div className='w-full h-1[148px] flex flex-row px-[155px] space-x-[32px]'>
<div className='space-y-[20px] font-inter text-[14px] font-semibold text-[#6C7275] '>
    <div className=''>Order Code:</div>
    <div className=''>Date:</div>
    <div className=''>Total:</div>
    <div className=''>PaymentMethod:</div>
</div>
<div className='space-y-[20px] font-inter text-[14px] font-semibold text-[#141718]'>
    <div className=''>#ACEICYNXRF​</div>
    <div className=''>July 8, 2024</div>
    <div className=''>$1,684.00</div>
    <div className=''>Paypal</div>
</div>
</div>
<div className='  px-[175px] justify-center items-center gap-y-2 flex flex-col justify-between'>
<a href='/track-order'>
<button className="text-white bg-indigo-800  border border-white hover:text-gray-700 focus:outline-none   px-4 py-2 rounded-md font-medium">
      Track Order
    </button>
    </a>
    <a href='/'>
<button className="text-white hover:text-gray-700 focus:outline-none bg-indigo-800 border border-white px-4 py-2 rounded-md font-medium">
      Back to Homepage
    </button>
    </a>
</div>
  </div>
       </div>
     

     
      

      


   { /* mobile screen */  }
   <div className=" md:hidden flex flex-col  flex justify-center items-center text-[#141718]">
   <div className='text-[#605F5F] text-[500] font-inter just-between -ml-[250px] flex flex-row my-8'> 
   <a  href="/" className='flex flex-row justify-left'>
   <GrPrevious className='mt-[3px]' />
   <div className='w'>Back to home</div>
   </a>
   </div>
 
 
   <div className='font poppins text-[40px] text-center font-[500] text-[#000000] mb-16 text-indigo-800'>Complete!</div>

  
   <div className='justify-center items-center text-center space-y-[40px] flex flex-col shadow-xl h-auto w-4/5 p-[16px] -mt-[80px] mb-16'>
   <div className='w-full h-[138px]'>
    <div className='text-left text-[34px] font-poppins font-[#23262F] font-medium w-3/4 '>Your order has been received</div>
</div>

<div className='space-y-[16px] text-[14px] font-semibold font-inter text-left'>
<div className='h-[68px] p-[8px] border-b-[1px] border-[#E8ECEF]'>
    <div className=' text-[#6C7275]'>
 Order code:
    </div>
    <div className='text-[141718]'>
    #ACEICYNXRF ​
    </div>
</div>
<div className='h-[68px] p-[8px] border-b-[1px] border-[#E8ECEF]'>
    <div className=' text-[#6C7275]'>
  Date:
    </div>
    <div className='text-[141718]'>
July 08, 2024
    </div>
</div>
<div className='h-[68px] p-[8px] border-b-[1px] border-[#E8ECEF]'>
    <div className=' text-[#6C7275]'>
Total
    </div>
    <div className='text-[141718]'>
$1684.99
    </div>
</div>
<div className='h-[68px] p-[8px] border-b-[1px] border-[#E8ECEF]'>
    <div className=' text-[#6C7275]'>
Payment Method
    </div>
    <div className='text-[141718]'>
Paypal
    </div>
</div>
</div>
<div className='  px-[17px]] justify-center items-center flex flex-col justify-between'>
    <a href="/track-order">
<button className="text-white bg-indigo-800  border border-white hover:text-[20px]  w-full text-[16px] focus:outline-none  px-4 py-2 rounded-md font-medium">
      Track Order
    </button>
    </a>
    <a href="/">
<button className="text-white bg-indigo-800  border border-white hover:text-[20px]  w-full text-[16px] focus:outline-none  px-4 py-2 rounded-md font-medium">
      Back to Homepage
    </button>
    </a>
</div>
   </div>
   
    </div>


  </>
  
  );
};

export default Orderbody;