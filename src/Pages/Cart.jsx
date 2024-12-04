



import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import DeleteIcon from '../assets/bin_icon.png'
import CartTotal from './CartTotal'

const Cart = () => {
    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ProductContext);
    const [cartData, setCartData] = useState([]);


    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push(
                        {
                            _id: items,
                            size: item,
                            quantity: cartItems[items][item],
                        }
                    )

                }
            }
        }
        setCartData(tempData)
    }, [cartItems])

    return (
        <div className='border-t pt-14'>
            <div className='px-16 text-3xl mb-3'>
                <div className='inline-flex gap-2 items-center mb-4'>
                    <p className="text-gray-600">YOUR<span className='text-gray-800 font-medium'> CART</span></p>
                    <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-800'></p>
                </div>
                <div>
                    {
                        cartData.map((item, index) => {

                            const productData = products.find((product) => product._id === item._id);

                            return (
                               
                               
                              <div
                              key={index}
                              className="py-4 border-t border-b text-gray-700 grid grid-cols-1 sm:grid-cols-[4fr_1fr] lg:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                            >
                              <div className="flex flex-row items-start gap-4">
                                {/* Product Image */}
                                <img
                                  src={productData.image[0]}
                                  alt=""
                                  className="w-16 sm:w-24 lg:w-32"
                                />
                                {/* Product Details */}
                                <div className="flex flex-col gap-1">
                                  <p className="text-sm sm:text-base lg:text-lg font-medium">
                                    {productData.name}
                                  </p>
                                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mt-1">
                                    
                                    <p className="text-sm sm:text-base lg:text-lg">
                                      {currency}{productData.price}
                                    </p>
                                    <p className="px-2 text-sm sm:text-base lg:text-lg border bg-slate-100">
                                      {item.size}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              {/* Quantity Input */}
                              <input
                                type="number"
                                className="border border-b-gray-400 border-t-gray-400 border-r-gray-400 border-l-gray-400 text-sm sm:text-base px-1 sm:px-2 py-1 sm:py-2 max-w-[80px] sm:max-w-[100px] lg:max-w-[120px]"
                                min={1}
                                defaultValue={item.quantity}
                                onChange={(e) =>
                                  e.target.value === "" || e.target.value === "0"
                                    ? null
                                    : updateQuantity(item._id, item.size, Number(e.target.value))
                                }
                              />
                              {/* Delete Icon */}
                              <img
                                src={DeleteIcon}
                                onClick={() => updateQuantity(item._id, item.size, 0)}
                                alt=""
                                className="w-4 sm:w-5 mr-4 cursor-pointer"
                              />
                            </div>
                            
                              
                            )

                        })
                    }
                </div>
                <div className='flex justify-end my-24'>
                  <div className='w-full sm:w-[450px]'>
                    <CartTotal/>
                    <div className='w-full text-end'>
                      <button onClick={()=> navigate('/place-order')} className='bg-black text-white text-base my-8 px-8 py-3 cursor-pointer'>PROCEED TO CHECKOUT</button>
                    </div>

                  </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
