import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6'

const Footer = () => {
  return ( 
    <footer className=' mt-10 footer bg-gray-900 text-white py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Column 1: Branding */}
        <div className='branding'>
          <h2 className='text-2xl font-bold mb-2'>ShopSmart</h2>
          <p className='text-sm text-gray-400'>
            Your go-to destination for smart shopping. Discover products tailored to your needs and budget.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className='links'>
          <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2'>
            <li><a href='/' className='text-gray-400 hover:text-white transition'>Home</a></li>
            <li><a href='#' className='text-gray-400 hover:text-white transition'>About</a></li>
            <li><a href='/product_list' className='text-gray-400 hover:text-white transition'>Shop</a></li>
            <li><a href='#' className='text-gray-400 hover:text-white transition'>Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className='socials'>
          <h3 className='text-xl font-semibold mb-4'>Follow Us</h3>
          <div className='flex gap-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='text-2xl hover:text-blue-600 transition' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <FaXTwitter className='text-2xl hover:text-sky-500 transition' />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-2xl hover:text-pink-500 transition' />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-2xl hover:text-blue-700 transition' />
            </a>
            <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
              <FaYoutube className='text-2xl hover:text-red-600 transition' />
            </a>
          </div>
        </div>
      </div>

      <hr className='my-6 border-gray-700' />

      {/* Footer Bottom */}
      <div className='text-center text-gray-400 text-sm mt-4'>
        &copy; 2024 ShopSmart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
