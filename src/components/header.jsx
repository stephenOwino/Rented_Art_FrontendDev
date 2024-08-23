
import React from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';




 
   


const Header = () => {
 

  
  return (
    <>
    {  /* large screen */  }
    <div className="hidden md:flex flex-row  py-[16px] justify-between   px-[60px] text-[#141718]">
     
      
			<div className='text-3xl drop-shadow-lg -mt-4 text-indigo-700'>
				𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-[70px]'>.</span>

		</div>


     


      <div className="flex flex-row justify-between w-[130px] h-[28px] gap-[16px]">
        <MagnifyingGlassIcon className="h-[24px] w-[24px] text-[#141718]" />
        <UserCircleIcon className="h-[20px] w-[24spx] text-[#141718]" />
        <a className=' h-[28px]' href='/cart'>
        <ShoppingCartIcon className="h-[24px] w-[24px] text-[#141718]"  />
        </a>
      </div>
      
      </div>

     
      

      


   { /* mobile screen */  }
   <div className=" md:hidden flex flex-row px-[24px] py-[16px] flex justify-between text-[#141718]">
   
    <div className=" w-[102px] h-[24px] flex flex-row ">
      <div className='w-[24px] h-[24px] '>
        <Bars3Icon className="h-[20px] w-[20px] p-[1.5px] mt-[2px] text-[#141718]" />
      </div>
    <div className='w-[120px] text-[15px] font-medium font-poppins -mt-2 drop-shadow-lg  text-indigo-700 '>
    𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-[20px]'>.</span>
    </div>
    
    </div>

    <a className='w-[50px] h-[28px]' href='/cart'>
        <ShoppingCartIcon className="h-[20px] w-[20px] text-[#141718]" />
        </a>
    </div>

   
   </>
  );
};

export default Header;