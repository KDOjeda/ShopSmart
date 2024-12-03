// Import React from 'react';
import styles from '../syd/main.module.css';
import Image from 'next/image';
import { FaTruck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBox } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const OrderTracking = () => {
  const orders = [
    {
      id: '12345',
      status: 'Shipped',
      estimatedDelivery: 'Dec 5, 2024',
      imageUrl: '/images/jersey.png',
      description: 'This is a description for order 12345',
      rating: 4, 
    },
    {
      id: '67890',
      status: 'In Transit',
      estimatedDelivery: 'Dec 7, 2024',
      imageUrl: '/images/jacket.png',
      description: 'This is a description for order 67890',
      rating: 5,
    },
    {
      id: '11223',
      status: 'Delivered',
      estimatedDelivery: 'Dec 1, 2024',
      imageUrl: '/images/shoes.png',
      description: 'This is a description for order 11223',
      rating: 3,
    },
    {
      id: '44556',
      status: 'Processing',
      estimatedDelivery: 'Dec 10, 2024',
      imageUrl: '/images/tshirt.png',
      description: 'This is a description for order 44556',
      rating: null, // No rating yet
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
                      "Not Rated Yet"
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.flipCardBack}>
                <h2 className={styles.orderId}>Order Description</h2>
                <p className={styles.description}>{order.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
{/* //oikjuhygtfrdsa */}
      <div className={styles.socials}>
        <h3>Follow us on Social Media:</h3>
        <div className={styles.socialIcons}>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook className={styles.socialIcon} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter className={styles.socialIcon} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.socialIcon} /></a>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;