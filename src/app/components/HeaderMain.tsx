"use client"; 

import React, { useState, useRef, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import { BiUser } from 'react-icons/bi';
import { RiArrowDownSLine } from 'react-icons/ri';  // Import the arrow icon
import { TiShoppingCart } from 'react-icons/ti';
import Link from 'next/link';
import ShowCart from './ShowCart';

const HeaderMain = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container hidden md:flex justify-between items-center gap-8 h-full">
        <div className='w-1/3 xl:w-1/2'>
          <div className="font-bold text-4xl text-center pb-4 pl-10 sm:pb-0 text-emerald-600">
            <Link href="/">
            ShopSmart
            </Link>
            
          </div>
        </div>
        <div className='w-2/3 flex items-center justify-between gap-8'>
          <div className="w-full sm:w-[300px] md:w-[50%] relative">
            <input
              className='border-gray-200 border p-2 px-4 rounded-lg w-full'
              type="text"
              placeholder='Search product...'
            />
            <BsSearch
              className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
              size={20}
            />
          </div>

          <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
            <div className="relative cursor-pointer">
              <TiShoppingCart onClick={() => setIsCartOpen((prev) => !prev)} />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px]
                  text-white grid place-items-center translate-x-1 -translate-y-1">0</div>
              {isCartOpen && <ShowCart/>}
            </div>

            {/* User Icon with Down Arrow and Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div 
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <BiUser size={30} />
                <RiArrowDownSLine 
                  size={20} 
                  className={`ml-1 transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                />
              </div>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200">
                  <ul>
                    <li>
                      <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-base">Profile</a>
                    </li>
                    <li>
                      <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-base">Settings</a>
                    </li>
                    <li>
                      <a href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-base">Logout</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
