



import React from 'react'
import ContactImage from '../assets/contact_img.png'
import NewsLetterBox from './NewsLetterBox'

const Contact = () => {
  return (
    <>
    <div className='text-center text-3xl pt-10 border-t'>
      <div className='inline-flex gap-2 items-center mb-3'>
          <p className="text-gray-600">CONTACT <span className='text-gray-800 font-medium'>US</span></p>
          <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img src={ContactImage} alt=""  className='w-full md:w-[480px]' />
          <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500 text-left text-lg'>54709 Willms Station <br/>Suite 350, Washington, USA</p>
          <p className='text-gray-500 text-left text-lg'>Tel: (+92) 3334895899 <br/> Email: admin@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-lg text-left text-gray-600'>Learn more about our team and job openings.</p>
          <button className='border border-black px-8 py-4 text-base hover:bg-black hover:text-white transition-all duration-500 '>Explore Jobs</button>

        </div>
        </div>
     
    </div>
       <NewsLetterBox/>
       </>
  )
}

export default Contact
