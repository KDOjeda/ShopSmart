"use client"

import React, { useEffect, useRef, useState } from 'react'
import { BiUser } from 'react-icons/bi'
import ShowCart from './ShowCart'
import Link from 'next/link'
import { auth } from '@/app/firebase/config';
import { signOut } from "firebase/auth";
import { TbLogout } from "react-icons/tb";


const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const closeIconModal = useRef<HTMLDivElement>(null);

    const handleProfile = () => {
        setIsProfileOpen(prevState => !prevState )
    }

    // Close dropdown if user clicks outside of it
    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (closeIconModal.current && !closeIconModal.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
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
            <Link href="" className="block px-4 py-2 text-gray-700 hover:bg-green-300 text-base rounded-xl">Profile</Link>
            <div className='mt-2 cursor-pointer block px-4 py-2 text-gray-700 hover:bg-gray-200 text-base rounded-xl'>Settings</div>
            <div className='mt-2 cursor-pointer block px-4 py-2 text-gray-700 hover:bg-red-400 text-base rounded-xl '>
      <button
        onClick={() => {
          signOut(auth);
          sessionStorage.removeItem('user');
        }}
        className="flex items-center "
      >
        <TbLogout className='mr-2 text-red-500 ' />
        Logout
      </button>
    </div>
        </div>
      )}


      
      <div className="relative cursor-pointer ">
        <ShowCart/> 
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

export default NavIcons;