import React, { useContext } from 'react';
import { ProductContext } from '../components/productcontext';

const Main = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="p-8">
      <div className=" flex flex-col text-center">
     <div> Rented</div>
     <div> Art</div>
     <div>𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙</div>
     <div> 𝓡𝓮𝓷𝓽𝓮𝓭 𝓐𝓻𝓽</div>
     <div>𝑅𝑒𝓃𝓉𝑒𝒹 𝒜𝓇𝓉 </div>
     <div>ℜ𝔢𝔫𝔱𝔢𝔡 𝔄𝔯𝔱 </div>

      
    </div>
    </div>
  );
};

export default Main;
