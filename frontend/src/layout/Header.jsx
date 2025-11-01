import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-400 font-semibold"
      : "text-lg hover:text-orange-400 transition-colors";

  return (
    <header className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white shadow-lg relative z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-orange-400 hover:text-orange-300"
        >
          DineTime
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
        </div>

        {/* Desktop Login Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/user/login"
            className="px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-md"
          >
            User Login
          </NavLink>

          <NavLink
            to="/partner/login"
            className="px-5 py-2 rounded-lg border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md"
          >
            Food Partner Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <XMarkIcon className="h-8 w-8 text-orange-400" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black pb-4 border-t border-gray-700">
          <div className="flex flex-col items-center space-y-4 py-4">

            <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={() => setIsOpen(false)}>
              Services
            </NavLink>

            {/* Buttons */}
            <NavLink
              to="/user/login"
              className="w-4/5 text-center px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all shadow-md"
              onClick={() => setIsOpen(false)}
            >
              User Login
            </NavLink>

            <NavLink
              to="/partner/login"
              className="w-4/5 text-center px-5 py-2 rounded-lg border-2 border-orange-500 text-orange-400 font-semibold hover:bg-orange-500 hover:text-white transition-all shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Food Partner Login
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
