"use client";

import React, { useState } from "react";

import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Image from "next/image";
import { useCart } from "../../../hooks/useCart";
import { formatPrice } from "../../../productdb/formatPrice";

const Checkout = () => {
  const { cartProducts, cartTotalAmount, handleClearCart } = useCart();

  // State for user details and payment
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "cod",
  });

 // In your Checkout component:
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userDetails.name || !userDetails.phone || !userDetails.address) {
      alert("Please fill in all required fields.");
      return;
    }

    const orderData = {
      id: new Date().getTime(), // Unique order ID using timestamp
      status: "Ordered",
      estimatedDelivery: "Dec 1, 2024", // Example, can be dynamic
      products: cartProducts,
      totalAmount: cartTotalAmount,
      userDetails,
    };

    // Retrieve existing orders from localStorage (if any)
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");

    // Add the new order to the existing orders
    existingOrders.push(orderData);

    // Store the updated list of orders in localStorage
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    alert(`Thank you for your order! 🎉`);
    console.log("Order Details:", orderData);

    handleClearCart(); // Clear the cart
  };


  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-28">
      <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary (Left) */}
        <div className="border-r md:pr-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          {cartProducts && cartProducts.length > 0 ? (
            <ul className="space-y-4">
              {cartProducts.map((item) => (
                <li key={item.id} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.selectedImg.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="contain"
                        className="rounded"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.quantity} x {formatPrice(item.price)}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}

          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <span>Total:</span>
              <span>{formatPrice(cartTotalAmount)}</span>
            </div>
          </div>
        </div>

        {/* Customer Details & Payment (Right) */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-lg font-semibold mb-2">Customer Details</h2>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                value={userDetails.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleChange}
                placeholder="Street Address"
                required
                className="mt-1 p-2 w-full border rounded"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={userDetails.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text" 
                  name="zip"
                  value={userDetails.zip}
                  onChange={handleChange}
                  placeholder="ZIP"
                  className="mt-1 p-2 w-full border rounded"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={userDetails.paymentMethod}
                onChange={handleChange}
                className="p-2 w-full border rounded"
              >
                <option value="credit_card">Credit Card</option>
                <option value="gcash">GCash</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>

            {/* Place Order Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Back to Cart */}
      <div className="mt-6">
        <Link
          href="/cart"
          className="text-slate-500 flex items-center gap-2 hover:text-green-600 transition"
        >
          <MdArrowBack />
          <span>Back to Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
