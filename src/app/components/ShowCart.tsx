"use client"

import { useRouter } from "next/navigation";
import { useCart } from "../../../hooks/useCart"
import { TiShoppingCart } from "react-icons/ti";

const ShowCart = () => {
  const { cartTotalQty } = useCart();
  const router = useRouter();

  return (
    <div className="relative cursor-pointer" onClick={() => router.push("/cart")}>
        <div className="text-2xl">
            <TiShoppingCart/>
        </div>
        <span className="absolute top-[-10px] right-[-10px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm">
            {cartTotalQty}
        </span>
    </div>
  )
}

export default ShowCart