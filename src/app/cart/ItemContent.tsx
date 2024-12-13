"use client"

import Link from "next/link";
import Image from "next/image";
import SetQuantity from "../products/SetQuantity";
import { useCart } from "../../../hooks/useCart";
import { formatPrice } from "../../../productdb/formatPrice";
import { truncateText } from "../../../productdb/truncateText";
import { CartProductType } from "../product_details/[productId]/ProductDetails";

interface ItemContentProps {
    item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({item}) => {

    const {handleRemoveProductFromCart, handleCartQtyIncrease, handleCartQtyDecrease} = useCart();
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-500 py-4 items-center">
        <div className="cols-span-1 justify-self-start flex gap-2 md:gap-4">
            <Link href={`/product_details/${item.id}`}>
                <div className="relative w-[70px] aspect-square">
                    <Image
                        src={item.selectedImg.image}
                        alt={item.name}
                        fill
                        sizes="object-contain"
                    />
                </div>
            </Link>
            <div className="flex flex-col justify-between">
                <Link href={`/product/${item.id}`}>
                    {truncateText(item.name)}
                </Link>
                <div>{item.selectedImg.id}</div>
                <div className="w-[70px]">
                    <button className="text-slate-500 underline" onClick={() => handleRemoveProductFromCart(item)}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
        <div className="justify-self-center">{formatPrice(item.price)}</div>
        <div className="justify-self-center">
            <SetQuantity
                cartCounter={true}
                cartProduct={item}
                handQtyDecrease={() => {handleCartQtyDecrease(item)}}
                handleQtyIncrease={() => {handleCartQtyIncrease(item)}}
            />
        </div>
        <div className="justify-self-end font-semibold">
            {formatPrice(item.price * item.quantity)}
        </div>
    </div>
  )
}

export default ItemContent