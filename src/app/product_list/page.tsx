"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "../../../productdb/products";
import ProductCard from "../products/ProductCard";
import Link from "next/link";
import styles from './mall.module.css'

const ProductList = () => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category");
  const searchQuery = searchParams?.get("search")?.toLowerCase();

  const categories = [
    "All",
    "Apparel",
    "Footwear",
    "Accessories",
    "Wearables",
    "Equipment",
    "Bags & Storage",
    "Facilities & Setup",
  ];

  // Filter products by category
  const filteredByCategory =
    category && category !== "All"
      ? products.filter((product) => product.category === category)
      : products;

  // Further filter by search query (if any)
  const filteredProducts = searchQuery
    ? filteredByCategory.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      )
    : filteredByCategory;

  return (
    <div className={` ${styles.background} `}>
      
      {/* Header with title */}
      <section className={`${styles.hero}`}>
      {/* <header className={`text-center mb-8  `}>
        
        
      </header> */}
      <h1 className={`text-4xl font-bold text-gray-800 ${styles.productMall} pt-4  `}>Product Mall</h1>
      <h2 className="text-black pb-4">
          {category
            ? `Category: ${category}`
            : searchQuery
            ? `Search Results for: ${searchQuery}`
            : "All Products"}
        </h2>
      </section>
      

      {/* Category Filter Section */}
      <section className="flex flex-wrap p-1 rounded-lg mt-1 sticky top-0 z-10 justify-center border-t border-gray-300 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] bg-white ">
        <ul className="flex flex-wrap justify-center space-x-6">
          {categories.map((category, index) => (
            <li key={index} className="text-gray-700 py-2">
              <Link
                href={`/product_list?category=${category.replace(/\s+/g, "")}`} // Remove spaces for the URL
                className={`text-black hover:text-teal-800 ${
                  category === category ? "font-bold" : ""
                }`}
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
          <div className="col-span-full text-center text-xl text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ProductList />
  </Suspense>
);

export default Page;
