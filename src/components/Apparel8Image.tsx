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
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlag6Iw1ZbzYzAlzhky4XUKr1AINvi862XqA&s" 
  },
  
 
]

const Apparel8Image = () => {
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

export default Apparel8Image
