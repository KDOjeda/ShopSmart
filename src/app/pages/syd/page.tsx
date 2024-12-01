import React from 'react';
import styles from '../syd/main.module.css';
import Image from 'next/image';
import { FaTruck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBox } from "react-icons/fa";

const OrderTracking = () => {
  const orders = [
    {
      id: '12345',
      status: 'Shipped',
      estimatedDelivery: 'Dec 5, 2024',
      imageUrl: '/images/jersey.png',
      description: 'This is a description for order 12345',
    },
    {
      id: '67890',
      status: 'In Transit',
      estimatedDelivery: 'Dec 7, 2024',
      imageUrl: '/images/jacket.png',
      description: 'This is a description for order 67890',
    },
    {
      id: '11223',
      status: 'Delivered',
      estimatedDelivery: 'Dec 1, 2024',
      imageUrl: '/images/shoes.png',
      description: 'This is a description for order 11223',
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
    </div>
  );
};

export default OrderTracking;