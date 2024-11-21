import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImage from "../assets/logo.png";
import CartImage from "../assets/cart_icon.png";
import SearchImage from "../assets/search_icon.png";
import ProfileImage from "../assets/profile_icon.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center font-medium py-5 px-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src={LogoImage} className="w-36" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-6 text-gray-800">
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
      <div className="relative flex items-center gap-4 px-8">
        {/* Search Input with Icon */}
        <div className="relative w-full">
          <input
            type="text"
            className="w-full border border-gray-400 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-200"
          />
          <img
            src={SearchImage}
            alt="Search"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 text-gray-400 pointer-events-none"
          />
        </div>

        {/* Profile Dropdown */}
        <div className="group relative">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-6 cursor-pointer"
          />
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
            3
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
