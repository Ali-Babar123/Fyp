


import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductContext from '../context/ProductContext';
import StarImage from '../assets/star_icon.png'
// import StarImageDull from '../assets/star_dull_icon.png'
import DisplayRelatedProducts from './DisplayRelatedProducts';


const SingleProduct = () => {
    const { id } = useParams();
    const { products, currency, addToCart } = useContext(ProductContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('')
    const [size, setSize] = useState()

    const fetchProductData = async () => {

        products.map((item) => {
            if (item._id === id) {
                setProductData(item);
                setImage(item.image[0])
                console.log(item)
                return null;
            }
        })

    }


    useEffect(() => {
        fetchProductData()
    }, [products, id])

    return productData ? (
        <div className='px-8 border-t-2 pt-10  transition-opacity ease-in duration-500 opacity-100'>
            {/* Product Data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

            </div>

            {/* Image */}
            <div className='flex-1 flex-col-reverse flex gap-3 sm:flex-row'>
            <div className='small-image-container flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-center sm:justify-normal sm:w-[18.7%] w-full '>
    {
        productData.image.map((item, index) => (
            <img
                src={item}
                key={index}
                className="small-image w-[24%] ml-10 sm:w-10/12 sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
            />
        ))
    }
</div>

                <div className='w-full sm:w-[40%] mr-4'>
                    <img src={image} className='w-full h-auto' />
                </div>

                {/* Product Info */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={StarImage} alt="" className='w-4 5' />
                        <img src={StarImage} alt="" className='w-4 5'/>
                        <img src={StarImage} alt="" className='w-4 5'/>
                        <img src={StarImage} alt="" className='w-4 5'/>
                        {/* <img src={StarImageDull} alt="" className='w-4 5'/> */}
                        <p className='pl-2 font-medium'>(122)</p>
                    </div>
                    <p className='font-medium text-3xl mt-5'>{currency} {productData.price}</p>
                    <p className='mt-5 text-gray-600 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index)=>(
                                <button onClick={()=> setSize(item)} key={index} className={`border py-2 px-4 bg-gray-200 cursor-pointer ${item === size ?  'bg-orange-600' : ''}`}>{item}</button>
                            ))}

                        </div>
                    </div>
                    <button onClick={()=> addToCart(productData._id, size)} className='bg-black text-white  px-8 py-3 text-base active:bg-gray-700'>Add to Cart</button>
                    <hr className='mt-8 sm:w-4/5'/>
                    <div className='flex flex-col text-base text-gray-600 mt-7 gap-1'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy with in 7 days.</p>
                        </div>                
                </div>
                </div>
                {/*   Description and Review Section  */}
                <div className='mt-20'>
                <div className='flex'>
                <p className='border px-5 py-3 font-bold text-sm'>Description</p>
                <p className='border px-5 py-3 text-sm'>Review (122)</p>                
                </div>
                <div className='flex flex-col border gap-4 px-6 py-6 text-sm text-gray-500 font-semibold'>
                <p className=''>An ecommerce website is an online store that allows businesses to sell products or services over the internet to customers.
                Explore ecommerce’s definition, types, and trends for selling online.
                Customers pay using methods like credit cards or digital wallets at checkout.</p>
                <p>An ecommerce website is an online store that allows businesses to sell products or services over the internet to customers.
                Explore ecommerce’s definition, types, and trends for selling online.
                Customers pay using methods like credit cards or digital wallets at checkout.</p>
                </div>
                
                {/* Display related products */}
                <DisplayRelatedProducts category={productData.category} subCategory={productData.subCategory}/>
                </div>
        </div>
    ) : <div className='opacity-0'></div>
}

export default SingleProduct
