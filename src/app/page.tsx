"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./mainpage.module.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from "next/navigation";

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
    { id: 22, name: "Portable Basketball Net", price: "₱800", mainImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdyfO-1yJhBa7g1PTaeovGm0Kwr6hMJt0HJWeMi_m9qgyijArS19kb_RrG4H6wbqVhZpMl57R1vf8cZdfTxhbBQgzkqvBi2tiA6k_QmMVEu-FRE5Vn5sZOq&usqp=CAE", category: "Facilities & Setup" },
  ];

  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (categoryFilter === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === categoryFilter));
    }
  }, [categoryFilter]);

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user, loading, router]);

  return (
    <div>
      <h1>Welcome to the Sports Store</h1>
      <div>
        <button onClick={() => setCategoryFilter("All")}>All</button>
        <button onClick={() => setCategoryFilter("Apparel")}>Apparel</button>
        <button onClick={() => setCategoryFilter("Footwear")}>Footwear</button>
        <button onClick={() => setCategoryFilter("Equipment")}>Equipment</button>
        <button onClick={() => setCategoryFilter("Bags & Storage")}>Bags & Storage</button>
        <button onClick={() => setCategoryFilter("Facilities & Setup")}>Facilities & Setup</button>
        <button onClick={() => setCategoryFilter("Wearables")}>Wearables</button>
        <button onClick={() => setCategoryFilter("Accessories")}>Accessories</button>
      </div>

      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.mainImage} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link href={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
