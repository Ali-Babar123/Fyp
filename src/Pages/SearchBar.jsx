

import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../context/ProductContext'
import SearchImage from '../assets/search_icon.png'
import CrossImage from '../assets/cross_icon.png'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ProductContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
      if(location.pathname.includes('collection')){
        setVisible(true);
      
      }
      else{
        setVisible(false)
      }
    },[location])

  return showSearch && visible ?   (
    <div className='border-t border-b bg-gray-100 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
        <input className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e)=> setSearch(e.target.value)} type='text' placeholder='Search'/>
        <img className='w-4' src={SearchImage}/>
            </div>
        <img src={CrossImage} onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer'/>
      
    </div>
  ) : null
}

export default SearchBar
