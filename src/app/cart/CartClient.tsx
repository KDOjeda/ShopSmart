'use client'

import Link from "next/link";
import { useCart } from "../../../hooks/useCart"
import { MdArrowBack } from "react-icons/md";
import ItemContent from "./ItemContent";
import Heading from "@/app/components/Heading";
import CartButton from "@/app/components/CartButton";
import { formatPrice } from "../../../productdb/formatPrice";


const CartClient = () => {

    const { cartProducts, cartTotalAmount, handleClearCart } = useCart();

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center py-16">
                <div className="text-2xl font-semibold text-gray-800">Your Cart Is Empty</div>
                <div className="mt-4">
                    <Link
                        href={"/product_list"}
                        className="text-slate-500 flex items-center gap-2 hover:text-green-600 transition"
                    >
                        <MdArrowBack />
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Heading title="Shopping Cart" center />
            <div className="mt-8 grid grid-cols-5 text-xs font-medium text-gray-600 gap-4 pb-2 items-center border-b border-slate-200">
                <div className="col-span-1 justify-self-start">PRODUCT</div>
                <div className="justify-self-center">PRICE</div>
                <div className="justify-self-center">QUANTITY</div>
                <div className="justify-self-end">TOTAL</div>
            </div>

            <div className="mt-4">
                {cartProducts.map((item) => (
                    <ItemContent key={item.id} item={item} />
                ))}
            </div>

            <div className="mt-6 border-t-[1.5px] border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="w-full sm:w-[120px]">
                    <CartButton 
                        label="Clear Cart" 
                        onClick={handleClearCart} 
                        small 
                        outline 
                    />
                </div>

                <div className="flex flex-col gap-4 sm:w-1/3 text-sm">
                    <div className="flex justify-between w-full text-lg font-semibold text-gray-800">
                        <span>Subtotal</span>
                        <span>{formatPrice(cartTotalAmount)}</span>
                    </div>
                    <p className="text-slate-500 text-sm">Taxes and shipping calculated at checkout</p>

                    <div className="w-full">
                        <CartButton label="Checkout" onClick={() => {}} />
                    </div>

                    <Link
                        href={"/product_list"}
                        className="text-slate-500 flex items-center gap-2 hover:text-green-600 mt-2"
                    >
                        <MdArrowBack />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartClient;
