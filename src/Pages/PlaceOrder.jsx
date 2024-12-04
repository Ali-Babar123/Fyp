



import React, { useContext, useState } from 'react'
import CartTotal from './CartTotal'
import StripImage from '../assets/stripe_logo.png'
import RazorPayImage from '../assets/razorpay_logo.png'
import { useNavigate } from 'react-router-dom'
import ProductContext from '../context/ProductContext'
const PlaceOrder = () => {

    const [method, setMethod] = useState('cod');
    const {navigate} = useContext(ProductContext);
 
    return (
        <div className='px-24 flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t '>

            {/* left side */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3 '>
                    <div className='inline-flex gap-2 items-center mb-3'>
                        <p className="text-gray-500">DELIVERY <span className='text-gray-700 font-medium'>INFORMATION</span></p>
                        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <input type="text" placeholder='First Name' className='border border-gray-300 rounded w-full py-1.5 px-3.5' />
                    <input type="text" placeholder='Last Name' className='border border-gray-300 rounded w-full py-1.5 px-3.5' />
                </div>
                <input type="email" placeholder='Email' className='border border-gray-300 rounded w-full py-1.5 px-3.5' />
                <input type="text" placeholder='Street' className='border border-gray-300 rounded w-full py-1.5 px-3.5' />
                <div className='flex gap-3'>
                    <input type="text" placeholder='City' className='border border-gray-300 rounded w-full py-1.5 px-3.5' />
                    <input type="text" placeholder='State' className='border border-gray-300 rounded w-full py-1.5 px-3.5' />
                </div>
                <div className='flex gap-3'>
                    <input type="number" placeholder='Zip Code' className='border border-gray-300 rounded w-full py-1.5 px-3.5' />
                    <input type="text" placeholder='Country' className='border border-gray-300 rounded w-full py-1.5 px-3.5' />
                </div>
                <input type="number" placeholder='Phone' className='border border-gray-300 rounded w-full py-1.5 px-3.5' />

            </div>

            {/* Right Side */}
            <div className='mt-8'>
                <div className='mt-8  min-w-80'>
                    <CartTotal/>
                </div>
                <div className='mt-10'>
                <div className='inline-flex gap-2 items-center mb-4'>
                        <p className="text-gray-600">PAYMENT <span className='text-gray-800 font-medium'>METHOD</span></p>
                        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
                    </div>
                    {/* Payment Method selection */}
                    <div className='flex gap-3 flex-col lg:flex-row'>
                        <div onClick={()=> setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
                                <img src={StripImage} alt="" className='h-4 max-4' />
                            

                        </div>
                        <div onClick={()=> setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-500' : ''}`}></p>
                                <img src={RazorPayImage} alt="" className='h-4 max-4' />
                            

                        </div>
                        <div onClick={()=> setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full  ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
                            <p className='text-gray-600 text-base font-medium mx-4'>CASH ON DELIVERY</p>

                        </div>



                    </div>
                    <div className='w-full text-end mt-8'>
                        <button onClick={()=> navigate('/orders')} className='bg-black text-white px-16 py-3 text-base'>PLACE ORDER</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PlaceOrder
