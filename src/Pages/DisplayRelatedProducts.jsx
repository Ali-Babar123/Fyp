

import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../context/ProductContext'
import ProductItem from './ProductItem';

const DisplayRelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ProductContext);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(()=>{
        if (products.length > 0) {
        let productCopy = products.slice();
        productCopy = productCopy.filter((item)=> category === item.category)
        productCopy = productCopy.filter((item)=> subCategory === item.subCategory)
        
        setRelatedProducts(productCopy.slice(0 ,5));
     }
    },[products]);

  return (
    <div className='mt-24'>
        <div className='text-center text-4xl py-2'>
        <div className='inline-flex gap-2 items-center mb-6'>
          <p className="text-gray-500">Related <span className='text-gray-700 font-medium'>Products</span></p>
          <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
        </div>
        </div>
        <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {relatedProducts.length > 0 ? (
          relatedProducts.map((item, index) => (
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

export default DisplayRelatedProducts
