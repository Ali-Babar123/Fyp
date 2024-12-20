



import React, { useContext, useState, useEffect } from 'react'
import ProductContext from '../context/ProductContext';
import ProductItem from './ProductItem'
const LatestCollection = () => {
  const { products } = useContext(ProductContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [])
  console.log(products)
  return (

    <div className='my-10'>
      <div className='text-center py-8 text-3xl '>
        <div className='inline-flex gap-2 items-center mb-3'>
          <p className="text-gray-500">LATEST <span className='text-gray-700 font-medium'>COLLECTIONS</span></p>
          <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
        </div>
        <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laboriosam quaerat quo fuga et enim tempora magni.</p>
      </div>

      {/* Redering products */}
      <div className='px-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.length > 0 ? (
          latestProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  )
}

export default LatestCollection
