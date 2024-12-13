"use client"

import React, { useEffect, useRef, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import ShowCart from './ShowCart'
import { TiShoppingCart } from 'react-icons/ti'
import Link from 'next/link'
import { auth } from '@/app/firebase/config';
import { signOut } from "firebase/auth";
import { TbLogout } from "react-icons/tb";


const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)
    const closeIconModal = useRef<HTMLDivElement>(null);

    const handleProfile = () => {
        setIsProfileOpen(prevState => !prevState )
    }

    // Close dropdown if user clicks outside of it
    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (closeIconModal.current && !closeIconModal.current.contains(event.target as Node)) {
        setIsProfileOpen(false), setIsCartOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative text-[25px]' ref={closeIconModal}>
      <BiUser className="cursor-pointer" onClick={handleProfile}/>
      {isProfileOpen && (
        <div className='bg-white absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10'>
            <Link href="" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-base">Profile</Link>
            <div className='mt-2 cursor-pointer block px-4 py-2 text-gray-700 hover:bg-gray-100 text-base'>Settings</div>
            <div className='mt-2 cursor-pointer block px-4 py-2 text-gray-700 hover:bg-gray-100 text-base'>Logout</div>
        </div>
      )}
      <div className="relative cursor-pointer" ref={closeIconModal}>
        <TiShoppingCart onClick={() => setIsCartOpen((prev) => !prev)} />
        <div className="bg-white rounded-full absolute top-0 right-0 w-[16px] h-[16px] text-[11px] text-emerald-600 font-extrabold grid place-items-center translate-x-1 -translate-y-1">0</div>
        {isCartOpen && <ShowCart/>}
        
        

        </div>  

        <button  onClick={() => 
         {
          signOut(auth)
          sessionStorage.removeItem('user')
        
         } }> <TbLogout className='ml-10 text-red-500' />
               </button>
    </div>
  )
}

export default NavIcons