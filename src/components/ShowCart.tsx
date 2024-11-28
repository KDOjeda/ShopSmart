"use client"
import React from 'react'
import Image from 'next/image'

const ShowCart = () => {
  
    const cartItems = true
    return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 text-sm font-bold'>
        {!cartItems ? (
            <div className=''>
                Cart is Empty
            </div>
        ): (
            <>
                <h2 className='text-emerald-800 text-xl'>Shop Cart</h2>
                <div className='flex flex-col gap-8'>
                    <div className='flex gap-4'>
                        <Image
                        src = "https://contents.mediadecathlon.com/p2158679/k$22367151ebd5ce6d1efd9f7d09b3cc92/ultimate-disc-original-175g-white-tribord-8590276.jpg?f=768x0&format=auto"
                        alt = ""
                        width={72}
                        height={96}
                        className='object-cover rounded-md'
                        />
                        <div className='flex flex-col justify-between w-full'>
                            {/* Top */}
                            <div className='flex items-center justify-between gap-8'>
                                <h3 className='font-semibold text-black'>Decathlon Ultimate Disc</h3>
                                <div className='p-1 bg-gray-50 rounded-sm text-black'>Php150</div>
                            </div>
                            <div className='text-sm text-gray-500'>Available</div>
                            {/* Bottom */}
                            <div className='flex justify-between text-sm'>
                                <span className='text-gray-500'>Qty. 1</span>
                                <span className='text-blue-500 cursor-pointer'>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between text-sm'>
                    <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
                    <button className='rounded-md py-3 px-4 bg-green-600 text-white'>Checkout</button>
                </div>
            </>
        )}
    </div>
)
}

export default ShowCart