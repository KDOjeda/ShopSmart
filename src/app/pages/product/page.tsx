import HeaderMain from '@/components/HeaderMain'
import NavBar from '@/components/NavBar'
import ProductImages from '@/components/ProductImages'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function ProductList() {
  return (
    <main>

    <HeaderMain/>
    <NavBar/>



      <div>ProductList</div>
      {/* for testing linking product details lang ni */}
      <div className="mt-10 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        <Link href="/pages/product_details" className='w-full flex flex-col gap-4 sm:w-[20%]'>
          <div className='relative w-full h-80 ml-20'>
            <Image
              src="https://contents.mediadecathlon.com/p2158679/k$22367151ebd5ce6d1efd9f7d09b3cc92/ultimate-disc-original-175g-white-tribord-8590276.jpg?f=768x0&format=auto"
              alt=""
              fill
              sizes='30vw'
              className='absolute object-cover rounded-md'
            />
          </div>
          <div className='ml-20 flex justify-between'>
            <span className='font-medium'>Decathlon Ultimate Disc</span>
            <span className='font-semibold'>Php 150</span>
          </div>
          
        </Link>
        
      </div>

  </main>
  )
}

export default ProductList