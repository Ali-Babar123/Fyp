import React, { useContext } from 'react';
import productContext from '../context/ProductContext';

const Order = () => {
  const { currency, products } = useContext(productContext);

  return (
    <div className="px-16 border-t py-16">
      <div className="text-3xl">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500">
            My <span className="text-gray-700 font-medium">Orders</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 grid grid-cols-1 sm:grid-cols-[4fr_2fr] lg:grid-cols-[4fr_3fr] items-center gap-4"
          >
            <div className="flex flex-row items-start gap-4">
              {/* Image */}
              <img
                src={item.image[0]} // Ensure item.image is an array, or adjust accordingly
                alt={item.name}
                className="w-16 sm:w-24 lg:w-32"
              />
              <div className="flex flex-col gap-1 mt-1">
                <p className="text-sm sm:text-base lg:text-lg font-medium">{item.name}</p>
                <p className="text-sm sm:text-base lg:text-lg">{currency}{item.price}</p>
                {/* Quantity and Size */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mt-1">
                  <p className="text-sm sm:text-base lg:text-lg">Quantity: 1</p>
                  <p className="text-sm sm:text-base lg:text-lg">Size: M</p>
                </div>
                <p className='mt-2'>Date: <span className="text-gray-500">1 Dec 2024</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <p className="w-2 h-2  rounded-full bg-green-500"></p>
                <p className="text-sm sm:text-base lg:text-lg">Ready to Ship</p>
                <button className="text-sm font-medium border  ml-52 rounded-sm px-4 py-1 ">
                  Track Order
                </button>

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Order;