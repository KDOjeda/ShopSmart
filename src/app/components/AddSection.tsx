"use client"
import React, { useState } from 'react'

const AddSection = () => {
    const [quantity, setQuantity] = useState(1)

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1)
    }

    const decreaseQuantity = () => {
        // Prevent quantity from going below 1
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    return (
        <div className='flex flex-col gap-4'>
            <h4 className='font-medium'>Quantity</h4>
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-200 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        {/* Decrease button */}
                        <button 
                            className='cursor-pointer text-xl' 
                            onClick={decreaseQuantity}
                        >
                            -
                        </button>
                        {/* Display quantity */}
                        <span>{quantity}</span>
                        {/* Increase button */}
                        <button 
                            className='cursor-pointer text-xl' 
                            onClick={increaseQuantity}
                        >
                            +
                        </button>
                    </div>
                </div>
                <button className='w-36 text-sm rounded-3xl ring-1 ring-emerald-600 text-emerald-600 py-2 px-4 hover:bg-emerald-600 hover:text-white disabled:cursor-not-allowed disabled:bg-emerald-600 disabled:text-white disabled:ring-none'>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default AddSection
