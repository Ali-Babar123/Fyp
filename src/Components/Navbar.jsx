import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImage from "../assets/logo.png";
import CartImage from "../assets/cart_icon.png";
import SearchImage from "../assets/search_icon.png";
import ProfileImage from "../assets/profile_icon.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center font-medium py-5">
      {/* Logo */}
      <img src={LogoImage} className="w-36" alt="Logo" />

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-gray-700">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1"
          activeClassName="text-black"
        >
          <p>Home</p>
          <hr className="w-2/4 h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1"
          activeClassName="text-black"
        >
          <p>Collection</p>
          <hr className="w-2/4 h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1"
          activeClassName="text-black"
        >
          <p>About</p>
          <hr className="w-2/4 h-[1.5px] bg-gray-700" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1"
          activeClassName="text-black"
        >
          <p>Contact</p>
          <hr className="w-2/4 h-[1.5px] bg-gray-700" />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img src={SearchImage} alt="Search" className="w-5 cursor-pointer" />

        {/* Profile Dropdown */}
        <div className="group relative">
          <img src={ProfileImage} alt="Profile" className="w-5 cursor-pointer" />
          <div className="absolute hidden group-hover:block flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg right-0 mt-2">
            <p className="cursor-pointer hover:text-black">My Profile</p>
            <p className="cursor-pointer hover:text-black">Orders</p>
            <p className="cursor-pointer hover:text-black">Logout</p>
          </div>
        </div>

        {/* Cart Icon with Badge */}
        <Link to="/cart" className="relative">
          <img src={CartImage} alt="Cart" className="w-5 min-w-5 cursor-pointer" />
          <p className="absolute -right-1 -bottom-1 w-4 h-4 bg-black text-white text-center leading-4 rounded-full text-[8px]">
            3
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
