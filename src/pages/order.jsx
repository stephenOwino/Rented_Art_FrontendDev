import React from 'react';
import Orderbody from '../components/orderbody';
import Header from '../components/header';
import Footer from '../components/footer';



const Order = () => {
  return (
    
   <div className="  gap-2 flex flex-col  ">
   <div className="">
   <div className='md:hidden'>
    <Header />
    </div>
  <Orderbody />
 
<Footer />
   </div>



   </div>
  );
};

export default Order;