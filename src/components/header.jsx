
import React from 'react';
import { MagnifyingGlassIcon, UserCircleIcon, ShoppingCartIcon, Bars3Icon } from '@heroicons/react/24/outline';




 
   


const Header = () => {
 

  
  return (
    <>
    {  /* large screen */  }
    <div className=''>
    <div className="hidden md:flex flex-row  py-[16px] justify-between px-[60px] text-[#141718] ">
      
			<a href='/' className='text-3xl drop-shadow-lg -mt-4 text-indigo-900'>
				𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-[70px]'>.</span>
		</a>
    <div className="relative">
    <input type="text" className="w-[22rem] px-4 py-2 border rounded-md" placeholder="Search" />
    <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
        <MagnifyingGlassIcon className="h-[24px] w-[24px] text-[#141718] text-gray-500" />
    </button>
</div>

  <div className='text-lg font-[500] flex flex-row justify-between gap-x-2 mt-1 '>
    <a href='/login'className="hover:text-indigo-800">LOGIN</a>
    <div className=""> | </div>
    <a href='/signup' className="hover:text-indigo-800">SIGNUP</a>
  </div>
      <div className="flex flex-row justify-between w-[80px] h-[28px] gap-[16px]">
      
        <UserCircleIcon className="h-[20px] w-[24spx] text-[#141718] hover:text-indigo-800" />
        <a className=' h-[28px]' href='/cart'>
        <ShoppingCartIcon className="h-[24px] w-[24px] text-[#141718] hover:text-indigo-800"  />
        </a>
      </div>
      
      </div>
      <div className="border-t-[2px] border-gray-100 hidden md:flex flex-row py-[16px] gap-x-24 text-xl font-[600] justify-center items-center px-[60px] text-[#141718] mx-auto ">
    <div className="hover:text-indigo-800">Photo</div>
    <a href='/paintings' className="hover:text-indigo-800">Painting</a>
    <div className="hover:text-indigo-800">Drawings</div>
    <div className="hover:text-indigo-800">Artists</div>
</div>
      </div>

     
      

      


   { /* mobile screen */  }
   <div className=" md:hidden flex flex-row px-[24px] py-[16px] flex justify-between text-[#141718]">
   
    <div className=" w-[102px] h-[24px] flex flex-row ">
      <div className='w-[24px] h-[24px] '>
        <Bars3Icon className="h-[20px] w-[20px] p-[1.5px] mt-[2px] text-[#141718]" />
      </div>
    <div className='w-[120px] text-[15px] font-medium font-poppins -mt-2 drop-shadow-lg  text-indigo-800 '>
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