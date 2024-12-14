"use client"

import Image from "next/image";
import Rating from "@mui/material/Rating/Rating";
import { useRouter } from "next/navigation";
import { useState } from "react";  // Import useState to manage the cart state
import { truncateText } from "../../../productdb/truncateText";
import { formatPrice } from "../../../productdb/formatPrice";
import { useCart } from "../../../hooks/useCart";
import Button from "@/app/components/CartButton";

interface ProductCardProps {
    data: any;
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: SelectedImgType,
    quantity: number,
    price: number
}

export type SelectedImgType = {
    id: string,
    image: string
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const router = useRouter();
    const {handleAddProductToCart, cartProducts} = useCart();
    const [cartProduct] = useState<CartProductType>({
            id: data.id,
            name: data.name,
            description: data.description,
            category: data.category,
            brand: data.brand,
            selectedImg: {...data.images[0]},
            quantity: 1,
            price: data.price 
        });

    const productRating = data.reviews.reduce((acc: number, item: any) =>
        item.rating + acc, 0) / data.reviews.length;


    return (
        <div
            onClick={() => router.push(`/product_details/${data.id}`)}
            className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-white rounded-lg p-2 transition hover:scale-105 text-center text-sm shadow-lg">
            <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image
                        fill
                        src={data.images[0].image}
                        alt={data.name}
                        className="w-full h-full object-contain "
                    />
                </div>
                <div className="mt-4 font-bold">{truncateText(data.name)}</div>
                <div className="flex flex-row gap-4">
                    <div><Rating value={productRating} readOnly /></div>
                    <div className="text-slate-400 text-xs mt-1">{data.reviews.length} reviews</div>
                </div>
                <div className="font-bold text-green-500 text-lg">{formatPrice(data.price)}</div>

                {/* Add to Cart Button */}
                <Button
                    label="Add to Cart"
                    onClick={() => handleAddProductToCart(cartProduct)}
                >
                </Button>
            </div>
        </div>
    )
}

export default ProductCard;
