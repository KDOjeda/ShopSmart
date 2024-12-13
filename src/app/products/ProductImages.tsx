'use client';

import Image from 'next/image';
import { CartProductType, SelectedImgType } from '../product_details/[productId]/ProductDetails';

interface ProductImagesProps {
    cartProduct: CartProductType;
    product: any;
    handleImageSelect: (value: SelectedImgType) => void;
}

const ProductImages: React.FC<ProductImagesProps> = ({
    cartProduct,
    product,
    handleImageSelect
}) => {         
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            {product.images.map((image: SelectedImgType) => {
                return (
                    <div 
                        key={image.id}
                        onClick={() => handleImageSelect(image)}
                        className={`relative w-[80%] aspect-square rounded border-teal-300
                            ${
                                cartProduct.selectedImg.id === 
                                image.id ? "border-[1.5px]" : "border-none"
                            }
                            `}
                    > 
                        <Image
                            src={image.image}
                            alt={image.id}
                            fill
                            className="object-contain"
                        />
                    </div>
                )})}
            </div>
            {/* Main product image */}
            <div className="col-span-4 relative aspect-square">
                <Image
                    fill
                    src={cartProduct.selectedImg.image}
                    alt={cartProduct.name}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
};

export default ProductImages;
