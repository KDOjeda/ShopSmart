"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./mainpage.module.css";

const MainPage = () => {
  const products = [
    { id: 1, name: "Sports Shirt", price: "₱999", mainImage: "https://transferit.com.ph/pcimages/8064101/176819771/12/1/EFEFEF/prod.png?b=11429348&v=1720481852", category: "Apparel" },
    { id: 2, name: "Tennis Racket", price: "₱1,299", mainImage: "https://i5.walmartimages.com/seo/Wilson-Tour-Slam-Lite-Adult-Tennis-Racket-Grip-Size-3-Blue-9-7oz-113-Square-Inch-Head_97600f2e-818f-4720-ad22-8cb915580a62_1.da3c710586195854920e7a5520e0cc7e.jpeg", category: "Equipment" },
    { id: 3, name: "Running Shoes", price: "₱799", mainImage: "https://m.media-amazon.com/images/I/613uwSK20XL._AC_SL1002_.jpg", category: "Footwear" },
    { id: 4, name: "Cycling Helmet", price: "₱899", mainImage: "https://vader-prod.s3.amazonaws.com/1691599553-specialized-echelon-2-64d3c2bcb614a.jpg", category: "Equipment" },
    { id: 5, name: "Smart Watch", price: "₱3,499", mainImage: "https://img.drz.lazcdn.com/static/pk/p/f83d646ed8b48d5648e6457de2667d91.jpg_720x720q80.jpg", category: "Wearables" },
    { id: 6, name: "Sports Bag", price: "₱1,099", mainImage: "https://img.freepik.com/premium-photo/pile-sports-equipment-including-tennis-racket-ball-basketball_1026943-749.jpg", category: "Bags" },
    { id: 7, name: "Portable Basketball Hoop", price: "₱2,500", mainImage: "https://img.freepik.com/premium-photo/pile-sports-equipment-including-tennis-racket-ball-basketball_1026943-749.jpg", category: "Facilities & Setup" },
    { id: 8, name: "Sports Jacket", price: "₱1,499", mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlag6Iw1ZbzYzAlzhky4XUKr1AINvi862XqA&s", category: "Apparel" },
    { id: 9, name: "Running Shorts", price: "₱699", mainImage: "https://underarmour.scene7.com/is/image/Underarmour/PS1376759-001_HF?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500", category: "Apparel" },
    { id: 10, name: "Cleats", price: "₱800", mainImage: "https://i5.walmartimages.com/asr/01d2211a-f67e-486a-a5eb-579d3f581053.e1210cfbaffb3b783ded147a8c87d812.jpeg", category: "Footwear" },
    { id: 11, name: "Hiking Shoes", price: "₱800", mainImage: "https://contents.mediadecathlon.com/p2579430/k$765fde523b951660b1af44df05b14ff6/men-s-waterproof-mountain-walking-shoes-mh500-mid-brown-quechua-8618767.jpg?f=1920x0&format=auto", category: "Footwear" },
    { id: 12, name: "Sports Headband", price: "₱800", mainImage: "https://images-na.ssl-images-amazon.com/images/I/41CGqywZ8FL.jpg", category: "Accessories" },
    { id: 13, name: "Frisbee Gloves", price: "₱800", mainImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxNbEuv3_Dide9PBZmW4DUMTsV4nuTC0_s1Iou5V6EvyoVi15_Fb5NVKIIcwZa8jAaL7V3X1jBsjGxiJyDoLD5urYa8YFpAZHK7qrxZrec7lQSDH5_ECTq&usqp=CAE", category: "Accessories" },
    { id: 14, name: "Cap", price: "₱800", mainImage: "https://images-na.ssl-images-amazon.com/images/I/31RMx1LhG2L.jpg", category: "Accessories" },
    { id: 15, name: "Heart Rate Monitor", price: "₱800", mainImage: "https://static.wixstatic.com/media/2f0d26_ba4defcd2b734f34ab2351465c7026b7~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2f0d26_ba4defcd2b734f34ab2351465c7026b7~mv2.jpg", category: "Wearables" },
    { id: 16, name: "XMetrics Pro Swim Tracker", price: "₱800", mainImage: "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,g_auto,q_auto,f_auto,h_460,w_695/dtxd3bnk1ogxlzsfkqmu", category: "Wearables" },
    { id: 17, name: "Golf Club", price: "₱800", mainImage: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJwCAWlqGYN5n5VtKB9Ho7Pwar7Pq4efivQI91oNsMSfNU7l9k1SDc6SYnYPK7jnzng91LCFf3fPL-IIuQt0KFIa8ZpHnyJ-ghGSYwHAGOKZZMCoGbbgAi&usqp=CAE", category: "Equipment" },
    { id: 18, name: "Sports Bag", price: "₱800", mainImage: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6B0xLSGZ6bW1_mPNGeUKFlfVoWZhTzXSC70zcqyQYa24XbwRrndegKwGoGoTE5YWwEg7fwCAqDHtGNZsGoeZcodnhgKJ4W9MV8FVO4nOt_-ko74NuTPUfMA", category: "Bags & Storage" },
    { id: 19, name: "Ball Stand", price: "₱800", mainImage: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_VBavVf5msVPJlLkrNmRBndTIcab-Xaez8SK1RqgxFUtpk2_gEWTCrLzVv34V7AK337WmwZX5bYEUeMuyzKg0E8_g1B3_3zQxtFQ-98y45_CBZawaUcGL&usqp=CAE", category: "Bags & Storage" },
    { id: 20, name: "Disk Station", price: "₱800", mainImage: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTTV0gwlQrQE-kjq5f0cisndX4wZaMsSGA-_oJjVeuW8HtwEeMt4yT9xjGtRmu4vUQDhqzHeGDlzjIZXExNVdymH0kGvDQf9yPOOsIWnQN-q7F6FIUlLiVtbQ&usqp=CAE", category: "Bags & Storage" },
    { id: 21, name: "Kicking Net", price: "₱800", mainImage: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqIQbOg5WALxqHT7daLWnAKPhCozuTMrNN7Sk75NiDShn1T71GFcrpnQRz3271nJAa8xsSCzQLfqAok7md6dy76GcHfdxxouwdS-fTjwOR&usqp=CAE", category: "Facilities & Setup" },
    { id: 22, name: "Portable Basketball Net", price: "₱800", mainImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROZp2YLXcCZJ_8dyXgl5iDS0I6xUpJX7aDhg8tqdxdKHYwBNZWvaTUwY2bOasTIz3eTl6XldrWAGtGWpP9rdP9sU0Se2fKhRhW7ayawtdbPwQEpnbPD4Mx&usqp=CAE", category: "Facilities & Setup" },


  ];

  const categories = [
    "Apparel", "Footwear", "Accessories", "Wearables", "Equipment", "Bags & Storage", "Facilities & Setup"
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[currentProductIndex] || {};


  return (
    <>
 <main className='flex flex-col mt-20 '>
  <section className={`text-white text-center py-5 ${styles.hero}`}>
    <h1 className="text-4xl font-bold mb-2  ">Welcome to Our Sports Store!</h1>
    <p className="text-lg pt-9">Your one-stop destination for all your sporting needs.</p>
  </section>

  {/* Center Section - Categories */}
  <section className="flex flex-wrap  p-1 shadow-md rounded-lg mt-1 sticky top-0 z-10 justify-center">
    <ul className="flex flex-wrap justify-center space-x-6">
      {categories.map((category, index) => (
        <li key={index} className="text-gray-700 py-2">
          <Link href={`/pages/${category.replace(/\s+/g, '')}`} className="text-green-500 hover:text-teal-800">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  </section>
</main>

 {/* Floating Chat Icon */}
 <div
        className=" z-10 fixed bottom-5 right-5 bg-green-400 text-white rounded-full p-4 shadow-xl cursor-pointer hover:bg-teal-800 position-sticky"
        onClick={() => alert("Chat with us!") /* Replace with chat functionality */}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h8m-8 4h6m-7.5-8h10a2.5 2.5 0 012.5 2.5v10a2.5 2.5 0 01-2.5 2.5h-7l-4 4V6.5A2.5 2.5 0 016.5 4h.5z"
          />
        </svg>
      </div>
 
<main className={`flex min-h-screen bg-gray-100 relative overflow-hidden ${styles.background}`}>
      
        {/* Middle Section - Popular Categories */}
        <section className={`  flex-1 mx-4 p-6 shadow-md rounded-lg m-5 ${styles.middle}`}>
          <h2 className="text-2xl font-bold mb-4 text-white">Popular Categories</h2>
          <div className={styles.categoryContainer}>
            {categories.map((category, index) => (
              <div key={index} className={styles.categoryCard}>
                <h3 className="text-xl text-white font-semibold mb-4">{category}</h3>
                <div>
                  {category === "Apparel" || category === "Footwear" || category === "Accessories" 
                  || category === "Wearables" || category === "Equipment" || category === "Bags & Storage" || category === "Facilities & Setup"? (
                    <div className={styles.productGrid}>
                      {products.filter(product => product.category === category).map((product) => (
                                <Link key={product.id} href={`/pages/${category.replace(/\s+/g, '')}/${product.id}`} passHref>
                                <div className={`${styles.productCard} ${styles.animateFadeIn}`}>
                                  <img  
                                    src={product.mainImage}
                                    alt={product.name}
                                    className={`${styles.productImage} ${styles.image}`}
                                  />
                                  <p className="text-start text-black mt-2">{product.name}</p>
                                  <p className="text-start text-black">{product.price}</p>
                                </div>
                              </Link>
                      ))}
                    </div>
                  ) : (
                    products.filter(product => product.category === category).map((product) => (
                      <div key={product.id} className={`${styles.productCard} ${styles.animateFadeIn}`}>
                        <img
                          src={product.mainImage}
                          alt={product.name}
                          className={styles.productImage}
                        />
                        <p className="text-start mt-2">{product.name}</p>
                        <p className="text-start text-gray-600">{product.price}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Section - Featured Product */}
        <section className={`w-1/4 bg-white p-6 shadow-md rounded-lg relative m-5  ${styles.right}`}>
          <h2 className="text-2xl font-bold mb-4">Featured Product</h2>
          <div className="relative w-full h-80 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
            {currentProduct.mainImage ? (
              <img
                src={currentProduct.mainImage}
                alt={currentProduct.name}
                className="w-full h-2/3 object-contain rounded-t-lg"
              />
            ) : (
              <div className="w-full h-2/3 bg-gray-300 rounded-t-lg"></div>
            )}
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{currentProduct.name || "Product Name Unavailable"}</h3>
              <p className="text-gray-600">{currentProduct.price || "Price Unavailable"}</p>
            </div>
          </div>

          <ul className="list-none space-y-4 text-md mt-3">
            <li className="flex items-center">
              <img src="images\checkicon.png" alt="check" className="w-6 h-6 mr-2" />
              High-quality products tailored for athletes.
            </li>
            <li className="flex items-center">
              <img src="images\checkicon.png" alt="check" className="w-6 h-6 mr-2" />
              Affordable prices without compromising performance.
            </li>
            <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-red-600">
              <Link href="/pages/product">Shop Now</Link>
            </button>
          </ul>

          <div className="bg-white p-6 mt-6 rounded-lg shadow-xl testimonials">
            <h3 className="text-2xl font-bold mb-4">What Our Customers Say</h3>
            <div className="testimonials-container">
              <div className="testimonial-card">
                <p className="italic">"The best sports store I've ever shopped at! Great quality and amazing customer service."</p>
                <p className="text-sm text-gray-600">- Jane D.</p>
              </div>
              <div className="testimonial-card">
                <p className="italic">"Absolutely love their collection! The products are durable and worth the price."</p>
                <p className="text-sm text-gray-600">- Mark P.</p>
              </div>
              <div className="testimonial-card">
                <p className="italic">"Fast delivery and top-notch products. Highly recommended!"</p>
                <p className="text-sm text-gray-600">- Lucy K.</p>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions Section */}
          <div className="bg-white p-6 mt-6 rounded-lg shadow-xl text-gray-800 faqs">
            <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="faq-item">
              <h4 className="font-semibold text-lg mb-2">Q: Do you ship internationally?</h4>
              <p className="text-gray-700">A: Currently, we only ship within the Philippines. Stay tuned for future updates!</p>
            </div>
            <div className="faq-item">
              <h4 className="font-semibold text-lg mb-2">Q: Can I return or exchange an item?</h4>
              <p className="text-gray-700">A: Yes, we have a 30-day return policy for unused items in their original packaging.</p>
            </div>
            <div className="faq-item">
              <h4 className="font-semibold text-lg mb-2">Q: Are your products covered by warranty?</h4>
              <p className="text-gray-700">A: Many of our products include a 1-year warranty. Check the product page for details.</p>
            </div>
            <div className="faq-item">
              <h4 className="font-semibold text-lg mb-2">Q: How can I contact customer support?</h4>
              <p className="text-gray-700">A: You can reach us via email or phone, available 24/7 for your convenience.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainPage;
