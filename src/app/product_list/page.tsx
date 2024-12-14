"use client";

import { useSearchParams } from 'next/navigation';
import { products } from '../../../productdb/products';
import ProductCard from '../products/ProductCard';
import Link from 'next/link';

const ProductList = () => {
  const searchParams = useSearchParams();
  const category = searchParams?.get('category');
  const searchQuery = searchParams?.get('search')?.toLowerCase();

  const categories = [
    "All", "Apparel", "Footwear", "Accessories", "Wearables", "Equipment", "Bags & Storage", "Facilities & Setup"
  ];

  // Filter products by category
  const filteredByCategory = category && category !== "All"
    ? products.filter((product) => product.category === category)
    : products;

  // Further filter by search query (if any)
  const filteredProducts = searchQuery
    ? filteredByCategory.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      )
    : filteredByCategory;

  return (
    <div className="mt-24 p-8">
      {/* Header with title */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Product Mall</h1>
        <h2>
        {category
          ? `Category: ${category}`
          : searchQuery
          ? `Search Results for: ${searchQuery}`
          : 'All Products'}
      </h2>
      </header>

      {/* Category Filter Section */}
      <section className="flex flex-wrap p-1 rounded-lg mt-1 sticky top-0 z-10 justify-center border-t border-gray-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] bg-green-400">
      <ul className="flex flex-wrap justify-center space-x-6">
        {categories.map((category, index) => (
          <li key={index} className="text-gray-700 py-2">
            <Link
              href={`/product_list?category=${category.replace(/\s+/g, '')}`} // Remove spaces for the URL
              className={`text-black hover:text-teal-800 ${category === category ? 'font-bold' : ''}`}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </section>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mt-4">
        {filteredProducts.length > 0 ? (
            filteredProducts.map((product: any) => (
              <ProductCard key={product.id} data={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-xl text-gray-500">No products found.</div>
          )}
      </div>
    </div>
  );
};

export default ProductList;


















      {/* <div className="mt-10 flex flex-row justify-center gap-10 flex-wrap">
        <Link href="/pages/product_details" className=' flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80 '>
            <Image
              src="https://contents.mediadecathlon.com/p2158679/k$22367151ebd5ce6d1efd9f7d09b3cc92/ultimate-disc-original-175g-white-tribord-8590276.jpg?f=768x0&format=auto"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md bg-transparent'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link>

        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://i5.walmartimages.com/seo/Wilson-Tour-Slam-Lite-Adult-Tennis-Racket-Grip-Size-3-Blue-9-7oz-113-Square-Inch-Head_97600f2e-818f-4720-ad22-8cb915580a62_1.da3c710586195854920e7a5520e0cc7e.jpeg"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>₱5,799</span>
            <span className='font-medium'>Tennis Racket || A premium Tennis Racket.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.7</span>
              <span className='text-gray-600'>(2,668 sold)</span>
            </div>
          </div>
        </Link>

        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://vader-prod.s3.amazonaws.com/1691599553-specialized-echelon-2-64d3c2bcb614a.jpg"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>₱5,799</span>
            <span className='font-medium'>Cycling Helmet || A premium Cycling Helmet.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.7</span>
              <span className='text-gray-600'>(2,668 sold)</span>
            </div>
          </div>
        </Link>

        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://img.drz.lazcdn.com/static/pk/p/f83d646ed8b48d5648e6457de2667d91.jpg_720x720q80.jpg"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>₱6,999</span>
            <span className='font-medium'>Smart Watch || A premium Smart Watch.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.9</span>
              <span className='text-gray-600'>(56,459 sold)</span>
            </div>
          </div>
        </Link>

        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://img.freepik.com/premium-photo/pile-sports-equipment-including-tennis-racket-ball-basketball_1026943-749.jpg"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>₱6,999</span>
            <span className='font-medium'>Portable Basketball Hoop || A premium Portable Basketball Hoop.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.0</span>
              <span className='text-gray-600'>(54,465 sold)</span>
            </div>
          </div>
        </Link>

        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlag6Iw1ZbzYzAlzhky4XUKr1AINvi862XqA&s"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>₱1,499</span>
            <span className='font-medium'>Sports Jacket || A premium quality Sports Jacket.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(543 sold)</span>
            </div>
          </div>
        </Link>

        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://underarmour.scene7.com/is/image/Underarmour/PS1376759-001_HF?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>₱699</span>
            <span className='font-medium'>Running Shorts || A premium Running Shorts.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.9</span>
              <span className='text-gray-600'>(45,567 sold)</span>
            </div>
          </div>
        </Link>

        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://i5.walmartimages.com/asr/01d2211a-f67e-486a-a5eb-579d3f581053.e1210cfbaffb3b783ded147a8c87d812.jpeg"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link>

        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://contents.mediadecathlon.com/p2579430/k$765fde523b951660b1af44df05b14ff6/men-s-waterproof-mountain-walking-shoes-mh500-mid-brown-quechua-8618767.jpg?f=1920x0&format=auto"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link>
        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://images-na.ssl-images-amazon.com/images/I/41CGqywZ8FL.jpg"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link>
        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxNbEuv3_Dide9PBZmW4DUMTsV4nuTC0_s1Iou5V6EvyoVi15_Fb5NVKIIcwZa8jAaL7V3X1jBsjGxiJyDoLD5urYa8YFpAZHK7qrxZrec7lQSDH5_ECTq&usqp=CAE"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link>
        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://static.wixstatic.com/media/2f0d26_ba4defcd2b734f34ab2351465c7026b7~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2f0d26_ba4defcd2b734f34ab2351465c7026b7~mv2.jpg"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link>
        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,g_auto,q_auto,f_auto,h_460,w_695/dtxd3bnk1ogxlzsfkqmu"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link>
        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJwCAWlqGYN5n5VtKB9Ho7Pwar7Pq4efivQI91oNsMSfNU7l9k1SDc6SYnYPK7jnzng91LCFf3fPL-IIuQt0KFIa8ZpHnyJ-ghGSYwHAGOKZZMCoGbbgAi&usqp=CAE"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link>
        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6B0xLSGZ6bW1_mPNGeUKFlfVoWZhTzXSC70zcqyQYa24XbwRrndegKwGoGoTE5YWwEg7fwCAqDHtGNZsGoeZcodnhgKJ4W9MV8FVO4nOt_-ko74NuTPUfMA"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link>
        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_VBavVf5msVPJlLkrNmRBndTIcab-Xaez8SK1RqgxFUtpk2_gEWTCrLzVv34V7AK337WmwZX5bYEUeMuyzKg0E8_g1B3_3zQxtFQ-98y45_CBZawaUcGL&usqp=CAE"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link>
        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTTV0gwlQrQE-kjq5f0cisndX4wZaMsSGA-_oJjVeuW8HtwEeMt4yT9xjGtRmu4vUQDhqzHeGDlzjIZXExNVdymH0kGvDQf9yPOOsIWnQN-q7F6FIUlLiVtbQ&usqp=CAE"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link>
        <Link href="#" className='flex flex-col gap-4 sm:w-[20%] w-full'>
          <div className='relative w-full h-80'>
            <Image
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqIQbOg5WALxqHT7daLWnAKPhCozuTMrNN7Sk75NiDShn1T71GFcrpnQRz3271nJAa8xsSCzQLfqAok7md6dy76GcHfdxxouwdS-fTjwOR&usqp=CAE"
              alt="Product Image"
              layout='fill'
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-extrabold text-gray-300 text-xl'>Php 150</span>
            <span className='font-medium'>Decathlon Ultimate Disc || A premium quality flying disc.</span>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-500'>⭐ 4.5</span>
              <span className='text-gray-600'>(123 sold)</span>
            </div>
          </div>
        </Link> */}
