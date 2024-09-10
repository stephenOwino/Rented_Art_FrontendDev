import React from 'react';
import painting2 from '../assets/Image2.jpg'






const Cartbody = () => {
 

   
     
        
  
  return (
  <>
  
  {  /* large screen */  }
    <div className="hidden md:flex flex-col px-32 ">
        <div className='flex flex-row'>
            <div className='w-2/3'>
            <img src={painting2} className='blur-[5px] w-[30rem] h-[30rem]' />
            </div>
            <div className='w-1/3 flex flex-col text-center p-8'>
            <div className='flex flex-row space-x-4'>
            <button className=''>Piece</button>
            <div className=''>info</div>
            </div>
            <div className='flex flex-row space-x-4'>
            <div className=''>Piece</div>
            <div className=''>info</div>
            </div>
            <div className=''></div>
            </div>
        </div>

   
       </div>
     

     
      

      


   { /* mobile screen */  }
   <div className=" md:hidden flex flex-col  ">
  
   
    </div>


  </>
  
  );
};

export default Cartbody;