

import React from 'react'
import ExchangeIcon from  '../assets/exchange_icon.png'
import QualityImage from '../assets/quality_icon.png'
import SupportImage from '../assets/support_img.png'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={ExchangeIcon}  className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-500'>We Offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={QualityImage}  className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-500'>We provide 7 days free return policy</p>
        </div>
        <div>
            <img src={SupportImage}  className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-500'>We provide 24/7 customer support</p>
        </div>



      
    </div>
  )
}

export default OurPolicy
