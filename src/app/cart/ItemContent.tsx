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
        <>
          {/* Mobile Layout */}
          <div className="grid grid-cols-3 text-xs md:text-sm gap-4 border rounded-lg shadow-md hover:shadow-lg transition-all ease-in-out duration-300 p-4 mt-8 block md:hidden">
            {/* Column 1: Image */}
            <div className="flex justify-center items-center">
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
            </div>
      
            {/* Column 2: Name and Price */}
            <div className="flex flex-col justify-between">
              <Link href={`/product/${item.id}`}>
                <div>{truncateText(item.name)}</div>
              </Link>
              <div>{formatPrice(item.price)}</div>
            </div>
      
            {/* Column 3: Total Price and Remove Button */}
            <div className="flex flex-col justify-between items-center">
                <div className="justify-self-center mb-2">
                <SetQuantity
                    cartCounter={true}
                    cartProduct={item}
                    handQtyDecrease={() => { handleCartQtyDecrease(item) }}
                    handleQtyIncrease={() => { handleCartQtyIncrease(item) }}
                />
                </div>
              <div className="font-semibold">Total: {formatPrice(item.price * item.quantity)}</div>
              <button
                className="text-sm text-red-500 hover:text-red-700 mt-2 underline"
                onClick={() => handleRemoveProductFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>
      
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-5 text-xs md:text-sm gap-4 border rounded-lg shadow-md hover:shadow-lg transition-all ease-in-out duration-300 p-4 mt-8">
            {/* Column 1: Image */}
            <div className="col-span-1 justify-self-start flex gap-2 md:gap-4">
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
      
            {/* Column 2: Price */}
            <div className="justify-self-center">{formatPrice(item.price)}</div>
      
            {/* Column 3: Quantity */}
            <div className="justify-self-center">
              <SetQuantity
                cartCounter={true}
                cartProduct={item}
                handQtyDecrease={() => { handleCartQtyDecrease(item) }}
                handleQtyIncrease={() => { handleCartQtyIncrease(item) }}
              />
            </div>
      
            {/* Column 4: Total Price */}
            <div className="justify-self-end font-semibold">
              {formatPrice(item.price * item.quantity)}
            </div>
      
            {/* Column 5: Remove Button */}
            <div className="col-span-1 justify-self-end">
              <button
                className="text-sm text-red-500 hover:text-red-700 mt-2 underline"
                onClick={() => handleRemoveProductFromCart(item)}
              >
                Remove
              </button>
            </div>
          </div>
        </>
    );
}

export default ItemContent;
