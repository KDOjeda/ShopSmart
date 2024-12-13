"use client"

import { useRouter } from "next/navigation";
import { useCart } from "../../../hooks/useCart"

const CartCount = () => {
    const { cartTotalQty } = useCart();
    const router = useRouter();
  return (
    <div className="relative cursor-pointer">
        
    </div>
  )
}

export default CartCount