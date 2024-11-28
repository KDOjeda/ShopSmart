import React from 'react'
import ProductImages from '../../../components/ProductImages'

const ProductDetail = () => {
  return (
    <div className='border-t border-gray-200 py-6 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max mt-10">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6 mt-10">
        <div className="container-description">
          <h1 className="text-3xl font-bold mb-4">Decathlon Tribord Ultimate Disc 175g</h1>
          <p className="text-lg">
            The Tribord Ultimate Disc is designed for ultimate performance in water sports. 
            Made from high-quality materials, this disc offers precision and durability.
            Perfect for water enthusiasts, it's lightweight yet robust.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
