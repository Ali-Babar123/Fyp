



import React from 'react'
import LogoImage from '../assets/logo.png'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='px-16 flex flex-wrap sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>
  <div>
    <img src={LogoImage} alt="" className='mb-5 w-32' />
    <p className='w-full md:w-2/3'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam in officia fuga veritatis saepe reprehenderit qui fugit vero deserunt corporis aut nihil, sequi autem, nesciunt nisi nobis quisquam. Laboriosam, praesentium.
    </p>
  </div>

  <div>
    <p className='text-xl font-medium mb-5'>COMPANY</p>
    <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer '>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About us</Link></li>
      <li><Link to='#'>Delivery</Link></li>
      <li><Link to='#'>Privacy Policy</Link></li>
    </ul>
  </div>

  <div>
    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
      <li>143-256-789</li>
      <li>example@gmail.com</li>
    </ul>
  </div>
</div>

    <div>
    <hr />
    <p className='text-sm py-4 text-center'>Copyright 2024@ forever.com - All Rights Reserved</p>
  </div>
  </>
  )
}

export default Footer
