


import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const CartTotal = () => {

    const {getCartAmout, delivery_fee, currency } = useContext(ProductContext);
  return (
    <div className='w-full'>
        <div className='text-2xl'>
        <div className='inline-flex gap-2 items-center mb-3'>
          <p className="text-gray-600">CART <span className='text-gray-800 font-medium'>TOTALS</span></p>
          <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
        </div>
        <div className=' flex flex-col gap-2 mt-3 text-base'>
            <div className='flex justify-between text-gray-800'>
                <p>SubTotal</p>
                <p>{currency} {getCartAmout()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between text-gray-800'>
                <p>Delivery Fee</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between font-bold'>
                <p>Total</p>
                <p>{currency} {getCartAmout() === 0 ? 0 : getCartAmout() + delivery_fee}.00</p>
            </div>
        </div>

        </div>
      
    </div>
  )
}

export default CartTotal
