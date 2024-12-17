"use client";
import { useEffect, useState } from "react";
import styles from '../purchases/main.module.css';
import Image from 'next/image';
import { FaBox, FaCheckCircle, FaTruck } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { formatPrice } from "../../../productdb/formatPrice";

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
      <section>
        <h1 className={`${styles.title} ${styles.hero}`}>
          My Purchases
        </h1>
      </section>

      {/* Keep the order tracking steps consistent across all devices */}
      <div className="flex justify-center items-center my-14">
        <ul className="steps steps-horizontal w-full">
          <li className="step step-primary text-sm">Ordered <FaCheckCircle className="text-[25px]" /></li>
          <li className="step step-primary text-sm">In Transit <FaTruck className="text-[25px]" /></li>
          <li className="step text-sm">Out For Delivery <TbTruckDelivery className="text-[25px]" /></li>
          <li className="step text-sm">Delivered <FaBox className="text-[25px]" /></li>
        </ul>
      </div>

      {/* Use a grid with fixed columns on all devices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-5">
        {/* Iterate through all orders and display each one */}
        {orders.map((order: any) => (
          <div key={order.id} className="bg-white rounded-lg shadow-lg p-4">
            <div className={styles.imageContainer}>
              <Image
                src={order.products[0].selectedImg.image}
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
              <div className="text-2xl text-green-500 font-bold mt-5">{formatPrice(order.totalAmount)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracking;
