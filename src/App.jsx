import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Collection from './Pages/Collection';
import SearchBar from './Pages/SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductState from './context/ProductState.jsx';
import Footer from './Components/Footer.jsx';
import SingleProduct from './Pages/SingleProduct.jsx';
import Cart from './Pages/Cart.jsx';
import Order from './Pages/Order.jsx';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlaceOrder from './Pages/PlaceOrder.jsx';
import Login from './Components/Login.jsx';
const App = () => {
  return (
    <>
      <ProductState>
        <ToastContainer/>
        <Navbar />
        <SearchBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/product/:id' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/orders' element={<Order/>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
        <Footer/>
      </ProductState>
    </>
  );
};

export default App;
