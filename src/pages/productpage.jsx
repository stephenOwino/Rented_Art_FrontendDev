import React, { useContext } from 'react';
import { ProductContext } from '../components/productcontext';

const ProductPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Art Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-lg">
            <img
              src={product.imageUrl}
              alt={product.artName}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">{product.artName}</h3>
            <p className="text-sm text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
