"use client"

import React, { useState } from 'react'
import Image from 'next/image'

// Define type for images
interface ImageData {
  id: number;
  url: string;
}

// Define images array with explicit types
const images: ImageData[] = [
  {
    id: 1,
    url: "https://contents.mediadecathlon.com/p2158679/k$22367151ebd5ce6d1efd9f7d09b3cc92/ultimate-disc-original-175g-white-tribord-8590276.jpg?f=768x0&format=auto" 
  },
  {
    id: 2,
    url: "https://contents.mediadecathlon.com/p2158677/k$72b5aae77ce0029735a6d4b1c657decd/ultimate-disc-original-175g-white-tribord-8590276.jpg?f=1920x0&format=auto"
  },
  {
    id: 3,
    url: "https://contents.mediadecathlon.com/p2158674/k$38b224fd7700b17102af3dd40525ae4b/ultimate-disc-original-175g-white-tribord-8590276.jpg?f=1920x0&format=auto"
  },
  {
    id: 4,
    url: "https://contents.mediadecathlon.com/p2158676/k$c840ba1b90c7f508f7f16a8997cb3466/ultimate-disc-original-175g-white-tribord-8590276.jpg?f=1920x0&format=auto"
  }
]

const ProductImages = () => {
  const [index, setIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // Track the clicked image

  const handleImageClick = (i: number) => {
    setIndex(i)
    setActiveIndex(i) // Set the clicked image as active
  }

  return (
    <div className=''>
      {/* Main Image */}
      <div className='h-[400px] relative mt-7'>
        <Image 
          className="object-cover rounded-md" 
          src={images[index].url} 
          fill
          sizes='50vw' 
          alt="Product Image"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img: ImageData, i: number) => (
          <div
            key={img.id}
            className={`relative w-1/4 h-32 ${activeIndex === i ? 'border-4 border-green-500 scale-105' : ''} transition-all duration-300`}
            onClick={() => handleImageClick(i)}
          >
            <Image 
              className="object-cover rounded-md" 
              src={img.url}
              fill
              sizes='30vw'
              alt="Thumbnail Image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
