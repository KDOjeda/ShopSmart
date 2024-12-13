'use client'

import { CartProductType } from "@/app/product_details/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number;
    cartTotalAmount: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemoveProductFromCart: (product: CartProductType) => void;
    handleCartQtyIncrease: (product: CartProductType) => void;
    handleCartQtyDecrease: (product: CartProductType) => void;
    handleClearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    [propName: string] : any;
}

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    useEffect(() => {
        const cartItems = localStorage.getItem('ShopCartItems');
        const cProducts: CartProductType[] | null = JSON.parse(cartItems || 'null');
        setCartProducts(cProducts);
    }, []);

    useEffect(() => {
        const getTotals = () => {
            if (cartProducts) {
                const { total, count } = cartProducts.reduce((acc, item) => {
                    const itemTotal = item.price * item.quantity;

                    acc.total += itemTotal;
                    acc.count += 1; 

                    return acc;
                }, {
                    total: 0,
                    count: 0,
                });

                setCartTotalQty(count); 
                setCartTotalAmount(total);
            }
        };

        getTotals();
    }, [cartProducts]);

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter(item => item.id !== product.id);
            setCartProducts(filteredProducts);
            localStorage.setItem("ShopCartItems", JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts(prev => {
            const updatedCart = prev ? [...prev, product] : [product];
            localStorage.setItem("ShopCartItems", JSON.stringify(updatedCart));
            return updatedCart;
        });
    }, []);

    const handleCartQtyIncrease = useCallback((product: CartProductType) => {
        if (product.quantity === 99) {
            return toast.error("Maximum Quantity Reached");
        }

        if (cartProducts) {
            const updatedCart = [...cartProducts];
            const existingIndex = cartProducts.findIndex(item => item.id === product.id);

            if (existingIndex > -1) {
                updatedCart[existingIndex].quantity++;
            }

            setCartProducts(updatedCart);
            localStorage.setItem("ShopCartItems", JSON.stringify(updatedCart));
        }
    }, [cartProducts]);

    const handleCartQtyDecrease = useCallback((product: CartProductType) => {
        if (product.quantity === 1) {
            return toast.error("Minimum Quantity Reached");
        }

        if (cartProducts) {
            const updatedCart = [...cartProducts];
            const existingIndex = cartProducts.findIndex(item => item.id === product.id);

            if (existingIndex > -1) {
                updatedCart[existingIndex].quantity--;
            }

            setCartProducts(updatedCart);
            localStorage.setItem("ShopCartItems", JSON.stringify(updatedCart));
        }
    }, [cartProducts]);

    const handleClearCart = useCallback(() => {
        setCartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem("ShopCartItems", JSON.stringify(null));
    }, []);

    const value = {
        cartTotalQty,
        cartTotalAmount,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
        handleClearCart,
    };

    return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider");
    }

    return context;
};
