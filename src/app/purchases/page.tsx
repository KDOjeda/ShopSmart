"use client"

import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from '../purchases/main.module.css';
import Image from 'next/image';
import { FaTruck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaBox } from "react-icons/fa";
import { FaStar } from 'react-icons/fa';

const OrderTracking = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(storedOrders);
  }, []);

  if (orders.length === 0) {
    return <p>No orders found.</p>; // Show a message if no orders are found
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.orderDetails2}>Your Order Details</h1>

      <div className={styles.Placed}>
        <h2 className={styles.orderStatus2}>Order Status Updates</h2>
        <p className={styles.orderStatus}>
          Sign Up for text messages, we'll send your order updates.
        </p>
        <Link className={styles.SignUp} href="/signup">Sign Up</Link>
      </div>

      <div className={styles.stepstatus}>
        <ul className="steps">
          <li className="step step-primary">Ordered <FaCheckCircle className='text-[25px]' /></li>
          <li className="step step-primary">In Transit <FaTruck className='text-[25px]' /></li>
          <li className="step">Out For Delivery <TbTruckDelivery className='text-[25px]' /></li>
          <li className="step">Delivered <FaBox className='text-[25px]' /></li>
        </ul>
      </div>

      <div className={styles.orderList}>
        {/* Iterate through all orders and display each one */}
        {orders.map((order: any) => (
          <div key={order.id} className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <div className={styles.imageContainer}>
                  <Image
                    src={order.products[0].selectedImg.image} // Use the first product image for the order card
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
                  <p className={styles.estimatedDelivery}>Estimated Delivery: {order.estimatedDelivery}</p>
                  <div className={styles.rating}>
                    Rating: 
                    {order.products.map((product: any, index: number) => (
                      <div key={index}>
                        {product.rating !== null ? (
                          Array.from({ length: 5 }, (_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < product.rating ? styles.filledStar : styles.emptyStar} 
                            />
                          ))
                        ) : "Not Rated Yet"}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.flipCardBack}>
                <h2 className={styles.orderId}>Product Description</h2>
                {order.products.map((product: any) => (
                  <div key={product.id}>
                    <p className={styles.description}>{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.checkout}>
        <h2>Order Summary:</h2>
        {orders.map((order: any) => (
          <div key={order.id}>
            <p>Subtotal: ${order.totalAmount}</p>
            <p>Parcel Shipping: $10.00</p>
            <p>Tax: $10.00</p>
            <p>Total: ${order.totalAmount + 20.00}</p>
          </div>
        ))}
        <Link href="/pages/checkoutInfo">
          <button className={styles.checkoutButton}>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderTracking;
