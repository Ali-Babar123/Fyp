

import React from 'react'
import HeroImage from '../assets/hero_img.png'

const HeroSection = () => {
  return (
    <div className='px-16'>
    <div className='flex flex-col sm:flex-row border border-gray-400 '>

      <div className="left flex justify-center items-center w-full sm:w-1/2 py-10 sm:py-0 ">
      <div className='text-[#414141]'>
        <div className='flex items-center gap-2'>
          <p className='h-[2px] w-8 md:w-11 bg-[#414141] '></p>
          <p className='font-medium text-sm md:text-base'>Our BESTSELLERS</p>

        </div>
        <h1 className='prata-regular text-4xl sm:py-3 leading-relaxed lg:text-5xl'>Latest Arrivals</h1>
        <div className='flex items-center gap-2'>
          <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
          <p className='h-[2px] w-8 md:w-11 bg-[#414141]'></p>

        </div>
      </div>
      </div>
      
      {/* Right Side Section */}
        <img className='w-full sm:w-1/2' src={HeroImage} alt="" />
    </div>
    </div>
  )
}

export default HeroSection
