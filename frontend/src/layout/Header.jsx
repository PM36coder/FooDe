import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // For responsive menu icon
import { NavLink } from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close

  return (
    // Main header container with your desired background gradient
    <header className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white shadow-lg relative z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <NavLink
            to='/'
            className="text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors"
          >
            {/* Replace with your actual logo image if you have one */}
            {/* <img src="/your-logo.png" alt="Logo" className="h-10 w-auto mr-2" /> */}
            DineTime
          </NavLink>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/about"
            className="text-lg hover:text-orange-400 transition-colors"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg hover:text-orange-400 transition-colors"
          >
            Contact
          </NavLink>
          <NavLink
            href="/services"
            className="text-lg hover:text-orange-400 transition-colors"
          >
            Services
          </NavLink>
        </div>

        {/* Desktop Login Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-md">
            User Login
          </button>
          <button className="px-5 py-2 rounded-lg border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md">
            Food Partner Login
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-orange-400" /> // Close icon when menu is open
            ) : (
              <Bars3Icon className="h-8 w-8 text-white" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Conditionally rendered based on isOpen state) */}
      {isOpen && (
        <div className="md:hidden bg-linear-to-br from-gray-900 via-black to-gray-800 pb-4">
          <div className="flex flex-col items-center space-y-4 bg-linear-to-br from-gray-900 via-black to-gray-800 text-gray-300 shadow-inner border-t border-gray-700">
            <a
              href="/about"
              className="text-lg hover:text-orange-400 transition-colors w-full text-center py-2"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              About
            </a>
            <a
              href="/contact"
              className="text-lg hover:text-orange-400 transition-colors w-full text-center py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="/services"
              className="text-lg hover:text-orange-400 transition-colors w-full text-center py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            {/* Mobile Login Buttons */}
            <div className="flex flex-col space-y-3 w-4/5 mx-auto pt-4 border-t border-gray-700">
              <button
                className="px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-md w-full"
                onClick={() => setIsOpen(false)}
              >
                User Login
              </button>
              <button
                className="px-5 py-2 rounded-lg border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md w-full"
                onClick={() => setIsOpen(false)}
              >
                Food Partner Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
