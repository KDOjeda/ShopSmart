  import Link from 'next/link';
import styles from '../syd/main.module.css';
import Image from 'next/image';
import { FaTruck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBox } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';

const OrderTracking = () => {
  const orders = [
    {
      id: '12345',
      status: 'In Transit',
      estimatedDelivery: 'Dec 5, 2024',
      imageUrl: '/images/jersey.png',
      description: 'Classic Fit Performance Jersey: Lightweight and breathable, this jersey is designed for ultimate comfort and performance on the field or court. (Good for general sports/fitness)',
      rating: 4, 
    },
    {
      id: '67890',
      status: 'In Transit',
      estimatedDelivery: 'Dec 7, 2024',
      imageUrl: '/images/jacket.png',
      description: 'Lightweight Packable Jacket: Wind and water-resistant, this jacket is perfect for on-the-go protection and easy storage.',
      rating: 5,
    },
    {
      id: '11223',
      status: 'In Transit',
      estimatedDelivery: 'Dec 1, 2024',
      imageUrl: '/images/shoes.png',
      description: 'Agility Training Shoes: Lightweight and responsive, these training shoes provide the support and flexibility you need for any workout. (Good for cross-training)',
      rating: 3,
    },
    {
      id: '44556',
      status: 'In Transit',
      estimatedDelivery: 'Dec 10, 2024',
      imageUrl: '/images/rushguard.png',
      description: 'Flexible Performance Rash Guard: Designed for unrestricted movement, this rash guard is perfect for surfing, swimming, or any watersport where flexibility is key.',
      rating:   null,
    },

    
  ];

  return (
    <div className={styles.container}>
      <div className={styles.stepstatus}>
        <ul className="steps">
          <li className="step step-primary">Ordered <FaCheckCircle className='text-[25px]' /></li>
          <li className="step step-primary">In Transit <FaTruck className='text-[25px]' /></li>
          <li className="step">Out For Delivery <TbTruckDelivery className='text-[25px]' /></li>
          <li className="step">Delivered <FaBox className='text-[25px]' /></li>
        </ul>
      </div>
      

      <div className={styles.order}>
           <h1>Your Order Details</h1>
      </div>


   

      <div className={styles.orderList}>
        {orders.map((order) => (
          <div key={order.id} className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <div className={styles.imageContainer}>
                  <Image
                    src={order.imageUrl}
                    alt={`Image of order ${order.id}`}
                    width={300}
                    height={300}
                    className={styles.orderImage}
                  />
                </div>
                <div className={styles.orderDetails}>
                  <h2 className={styles.orderId}>Tracking Number: {order.id}</h2>
                  <p className={styles.status}>
                    Status: <span className={styles[order.status.toLowerCase().replace(' ', '-')]}>{order.status}</span>
                  </p>
                  <p className={styles.estimatedDelivery}>
                    Estimated Delivery: {order.estimatedDelivery}
                  </p>
                  <div className={styles.rating}>
                    Rating: 
                    {order.rating !== null ? (
                      Array.from({ length: 5 }, (_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < order.rating ? styles.filledStar : styles.emptyStar} 
                        />
                      ))
                    ) : (
                         "  Not Rated Yet"
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.flipCardBack}>
                <h2 className={styles.orderId}>Product Description</h2>
                <p className={styles.description}>{order.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.checkout}>
      <h2>Summary:</h2>
  <p>Subtotal: $100.00</p>
  <p>Shipping: $10.00</p>
  <p>Total: $110.00</p>

  <Link  href="/pages/checkoutInfo">
  <button className={styles.checkoutButton}>Checkout</button>
  </Link>
     
      
      </div>


      
    </div>
  );
};

export default OrderTracking;