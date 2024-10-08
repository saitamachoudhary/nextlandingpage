"use client";
import React, { useState } from 'react';

const Navbar = ({OpenLoginmodal}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-400 via-white to-white px-4 py-2">
      <div className="container mx-auto flex justify-between items-center md:gap-5">
        <div className="font-bold text-2xl">
          <span className="text-black">BOOM events</span> 
        </div>

        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="text-black hover:text-gray-400">Home</a></li>
          <li><a href="#pricing" className="text-black hover:text-gray-400">Pricing</a></li>
          <li><a href="#contact" className="text-black hover:text-gray-400">Contact</a></li>
          <li><a href="#blog" className="text-black hover:text-gray-400">Blog</a></li>
          <li><a href="#marketing" className="text-black hover:text-gray-400">Marketing</a></li>
        </ul>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center text-black">
            <span>EN</span>
            <span className="ml-1">▼</span>
          </div>
          <a href="#login" className="text-black" onClick={OpenLoginmodal}>Log in</a>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">Start for FREE</button>
        </div>

        <div className="md:hidden flex items-center">
          <button className='text-black' onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4">
            <li><a href="#home" className="block text-black hover:text-white">Home</a></li>
            <li><a href="#pricing" className="block text-black hover:text-white">Pricing</a></li>
            <li><a href="#contact" className="block text-black hover:text-white">Contact</a></li>
            <li><a href="#blog" className="block text-black hover:text-white">Blog</a></li>
            <li><a href="#marketing" className="block text-black hover:text-white">Marketing</a></li>
          </ul>

          <div className="flex flex-col space-y-4 mt-4 items-start">
            <div className="flex items-center text-black">
              <span>EN</span>
              <span className="ml-1">▼</span>
            </div>
            <a href="#login" className="text-black">Log in</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg w-full">Start for FREE</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
