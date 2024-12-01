import React from 'react'
import Image from 'next/image'

const ProductImages = () => {
  return (
    <div className=''>
        <div className="h-[500px] relative">
            <Image 
            src="https://contents.mediadecathlon.com/p2158679/k$22367151ebd5ce6d1efd9f7d09b3cc92/ultimate-disc-original-175g-white-tribord-8590276.jpg?f=768x0&format=auto"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-50 transition-opacity easy duration-500"
            />
        </div>
    </div>
  )
}

export default ProductImages