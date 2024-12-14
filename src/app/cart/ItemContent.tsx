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
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border rounded-lg shadow-md hover:shadow-lg transition-all ease-in-out duration-300 p-4 mt-8">
        <div className="cols-span-1 justify-self-start flex gap-2 md:gap-4">
            <Link href={`/product_details/${item.id}`}>
                <div className="relative w-[80px] h-[60px] aspect-square">
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
        <div className="col-span-1 justify-self-end">
                <button
                    className="text-sm text-red-500 hover:text-red-700 mt-2 underline"
                    onClick={() => handleRemoveProductFromCart(item)}
                >
                    Remove
                </button>
        </div>
    </div>
  )
}

export default ItemContent