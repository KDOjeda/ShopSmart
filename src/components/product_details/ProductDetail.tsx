import React from 'react'

const ProductDetail = () => {
  return (
    <div className='border-t border-gray-200 py-6 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        Image
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">DESCRIPTION</div>

    </div>
  )
}

export default ProductDetail