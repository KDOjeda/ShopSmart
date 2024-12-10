import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer self-end py-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative mt-20 border-t border-gray-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)] bg-green-400'>
        <div className='flex flex-col items-center justify-center'>
            <div>Copyright 2024 ShopSmart</div>
            <div className='socials mt-4'>
                <h3>Follow us on Social Media:</h3>
                <div className='socialIcons flex gap-4'>
                  <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook className='socialIcon text-2xl' /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter className='socialIcon text-2xl' /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className='socialIcon text-2xl' /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer