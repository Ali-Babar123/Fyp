import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai"; // Importing the close icon
import LogoImage from "../assets/logo.png";
import CartImage from "../assets/cart_icon.png";
import SearchImage from "../assets/search_icon.png";
import ProfileImage from "../assets/profile_icon.png";
import MenuImage from "../assets/menu_icon.png";
import productContext from "../context/ProductContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {setShowSearch, getCartCount} = useContext(productContext);

  return (
    <div className="flex justify-between items-center font-medium shadow-md py-5 px-8">
      {/* Logo */}
      <div className="flex items-center">
        <Link to='/'>
        <img src={LogoImage} className="w-36" alt="Logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-6 lg:gap-8 text-gray-800">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 text-lg"
          activeClassName="text-black"
        >
          <p>Home</p>
          <hr className="w-2/4 h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 text-lg"
          activeClassName="text-black"
        >
          <p>Collection</p>
          <hr className="w-2/4 h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 text-lg"
          activeClassName="text-black"
        >
          <p>About</p>
          <hr className="w-2/4 h-[1.5px] bg-black hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 text-lg"
          activeClassName="text-black"
        >
          <p>Contact</p>
          <hr className="w-2/4 h-[1.5px] bg-black hidden" />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="relative flex items-center gap-2 sm:gap-4 lg:gap-4 px-4 sm:px-8">
        {/* Search Input with Icon */}
        <div className="relative w-full hidden sm:block">
          <input
            type="text"
            className="w-full border  border-gray-400 rounded-full py-2 pl-10 pr-4 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-200"
          onClick={()=>setShowSearch(true)}
          />
          <img
            src={SearchImage}
            onClick={() =>setShowSearch(true)}
            alt="Search"
            className="absolute top-1/2 cursor-pointer left-3 transform -translate-y-1/2 w-5 text-gray-400 pointer-events-none"
          />
        </div>

        {/* Profile Dropdown */}
        <div className="group relative">
          <Link to='/login'>
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-6 cursor-pointer"
          />
          </Link>
          <div className="absolute hidden group-hover:block dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        {/* Cart Icon with Badge */}
        <Link to="/cart" className="relative">
          <img
            src={CartImage}
            alt="Cart"
            className="w-5 min-w-5 cursor-pointer"
          />
          <p className="absolute -right-1 -bottom-1 w-4 h-4 bg-black text-white text-center leading-4 rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setIsOpen(true)}
          src={MenuImage}
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 bg-white shadow-md transition-transform ${
          isOpen ? "w-full sm:w-1/2 transform translate-x-0" : "w-0 transform translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full text-gray-700">
          <div
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between p-3"
          >
            <p className="font-medium text-lg ml-3">Menu</p>
            <AiOutlineClose className="w-6 h-6 cursor-pointer" /> {/* Close Icon */}
          </div>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="py-2 pl-6 border"
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            onClick={() => setIsOpen(false)}
            className="py-2 pl-6 border"
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="py-2 pl-6 border"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="py-2 pl-6 border"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
