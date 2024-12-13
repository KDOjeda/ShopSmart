import Container from '@/app/components/Container';
import React from 'react'
import ProductDetails from './ProductDetails';
import ListRating from './ListRating';
import { products } from '../../../../productdb/products';
import RelatedItems from '@/app/components/RelatedItems';

interface IPrams {
    productId?: string;
}

const Product = ({params} : {params: IPrams}) => {

    console.log("params", params);

    const product = products.find((item) => item.id === params.productId)

  return (
    <div className='mt-28'>
        <Container>
            <ProductDetails product={product}/>
            <div className='flex flex-col mt-20 gap-4'>
                <RelatedItems/>
                <ListRating product={product}/>
            </div>
        </Container>
    </div>
  )
}

export default Product

// {/* <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
          
//           {/* Image */}
//           <div className="w-full lg:w-1/2 lg:sticky top-20 h-max mt-10 border-r border-gray-300 pr-8">
//             <ProductImages />
//           </div>

//           {/* Text */}
//           <div className="w-full lg:w-1/2 flex flex-col gap-6 mt-10">
//             <h1 className="text-4xl font-bold mb-4 mt-7">Decathlon Tribord Ultimate Disc 175g</h1>
//             <h2 className='text-2xl font-bold'>₱150.00</h2>
//             <StarRating rating={rating} />
//             <p className="text-lg">
//               The Tribord Ultimate Disc is designed for ultimate performance in water sports. 
//               Made from high-quality materials, this disc offers precision and durability.
//               Perfect for water enthusiasts, it's lightweight yet robust.
//             </p>
//             <hr className='h-[2px] bg-gray-600'/>
//             <h4 className='font-medium'>Choose a Size</h4>
//             <ul className='flex items-center gap-3'>
//               <li className='ring-1 ring-green-600 text-white bg-green-600 rounded-md py-1 px-4 text-sm cursor-pointer'>
//                 Small
//               </li>
//               <li className='ring-1 ring-green-600 text-white bg-green-600 rounded-md py-1 px-4 text-sm cursor-pointer'>
//                 Medium
//               </li>
//               <li className='ring-1 ring-green-600 text-white bg-green-600 rounded-md py-1 px-4 text-sm cursor-not-allowed'>
//                 Large
//               </li>
//             </ul>
//             <AddSection />
//           </div>

//         </div> */}