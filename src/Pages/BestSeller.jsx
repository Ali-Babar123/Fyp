


import React, { useContext, useEffect, useState } from 'react'
import productContext from '../context/ProductContext'
import ProductItem from './ProductItem'
const BestSeller = () => {
    const {products} = useContext(productContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        const bestProduct = products.filter((item)=> (item.bestseller))
        setBestSeller(bestProduct.slice(0, 5))
    }, [])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
      <div className='text-center py-8 text-3xl '>
        <div className='inline-flex gap-2 items-center mb-3'>
          <p className="text-gray-500">BEST <span className='text-gray-700 font-medium'>SELLERS</span></p>
          <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
        </div>
        <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laboriosam quaerat quo fuga et enim tempora magni.</p>
      </div>
      </div>

      {/* Redendering Products */}
      <div className='px-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {bestSeller.length > 0 ? (
          bestSeller.map((item, index) => (
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

export default BestSeller
