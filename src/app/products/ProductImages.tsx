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
        <div className="grid grid-cols-5 gap-4 h-full max-h-[600px] min-h-[400px] sm:min-h-[500px] mt-7">
            {/* Sidebar with wider thumbnails */}
            <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[600px] min-h-[400px] sm:min-h-[500px] w-[150px]">
                {product.images.map((image: SelectedImgType) => (
                    <div
                        key={image.id}
                        onClick={() => handleImageSelect(image)}
                        className={`relative w-[90%] aspect-square rounded border-teal-300
                            ${
                                cartProduct.selectedImg.id === image.id
                                    ? 'border-[2px]'
                                    : 'border-none'
                            }`}
                    >
                        <Image
                            src={image.image}
                            alt={image.id}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
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
