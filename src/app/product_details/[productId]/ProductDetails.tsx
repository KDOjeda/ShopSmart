"use client"

import Button from "@/app/components/CartButton";
import ProductImages from "@/app/products/ProductImages";
import { Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import CartButton from "@/app/components/CartButton";
import { useRouter } from "next/navigation";
import SetQuantity from "@/app/products/SetQuantity";
import { useCart } from "../../../../hooks/useCart";
import { formatPrice } from "../../../../productdb/formatPrice";

interface ProductDetailsProps{
    product: any;
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

const ProductDetails: React.FC<ProductDetailsProps> = ({product}) => {

    const {handleAddProductToCart, cartProducts} = useCart();
    const [isProductInCart, setIsProductInCart] =useState(false);
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: {...product.images[0]},
        quantity: 1,
        price: product.price 
    });

    const router = useRouter();

    console.log(cartProducts);

    useEffect(() => {
        setIsProductInCart(false);

        if (cartProducts) {
            const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
            );

            if (existingIndex > -1 ) {
                setIsProductInCart(true)
            }
        }
    }, [cartProducts]);

    const productRating = product.reviews.reduce((acc: number, item: any) =>
        item.rating + acc, 0) / product.reviews.length;

    const Horizontal = () => {
        return <hr className="w-[75%] my-2"/>
    };

    const handleImageSelect = useCallback(
        (value: SelectedImgType) => {
            setCartProduct((prev) => {
                return { ...prev, selectedImg: value};
            })
        }, [cartProduct.selectedImg]
    )

    const handleQtyDecrease = useCallback(() => {
        if (cartProduct.quantity === 1){
            return;
        }

        setCartProduct((prev) => {
            return{ ...prev, quantity: --prev.quantity};
        });
    }, [cartProduct]);

    const handleQtyIncrease = useCallback(() => {
        if (cartProduct.quantity === 99){
            return;
        }

        setCartProduct((prev) => {
            return{ ...prev, quantity: ++prev.quantity};
        });
    }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductImages  cartProduct={cartProduct} product={product} handleImageSelect={handleImageSelect}/>
        <div className="w-full lg:w-[100%] flex flex-col gap-6 mt-7">
            <h2 className="text-4xl font-bold">{product.name}</h2>
            <div className="flex items-center gap-2">
                <Rating value={productRating} readOnly/>
                <div>{product.reviews.length} reviews</div>
            </div>
            <h2 className="text-3xl font-semibold">{formatPrice(product.price)}</h2>
            <Horizontal/>
            <div className="text-justify">{product.description}</div>
            <Horizontal/>
            <div>
                <span className="font-semibold">CATEGORY: </span>
                {product.category}
            </div>
            <div>
                <span className="font-semibold">BRAND: </span>
                {product.brand}
            </div>
            <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>{product.inStock ? "In Stock" : "Out of Stock"}</div>
            <Horizontal/>
            {isProductInCart ? (
                <>
                    <p className="mb-2 text-slate-500 flex items-center gap-1">
                        <MdCheckCircle className="text-teal-400" size={20}/>
                        <span>Product added to cart</span>
                    </p>
                    <div className="max-w-[300px]">
                        <CartButton label="View Cart" outline onClick={() => router.push("/cart")}/>
                    </div>
                </>
            ) : (
            <>
                <SetQuantity
                    cartProduct={cartProduct}
                    handQtyDecrease={handleQtyDecrease}
                    handleQtyIncrease={handleQtyIncrease}
                />
                <Horizontal/>
                <div className="max-w-[300px]">
                    <Button label="Add To Cart" onClick={() => handleAddProductToCart(cartProduct)}/>
                </div>
            </>)}
        </div>
    </div>
  )
};

export default ProductDetails