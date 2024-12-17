import Container from '@/app/components/Container';
import React from 'react';
import ListRating from './ListRating';
import { products } from '../../../../productdb/products';
import RelatedItems from '@/app/components/RelatedItems';
import ProductDetails from './ProductDetails';

// Define the params type
interface IParams {
    productId: string; // Ensure this matches the dynamic route parameter name
}

// Page component (no need for async or Promise wrapping)
export default function ProductDetailsPage({ params }: { params: IParams }) {
    console.log('Params:', params);

    // Find the product
    const product = products.find((item) => item.id === params.productId);

    // Handle product not found
    if (!product) {
        return <div className="mt-28 text-center">Product not found!</div>;
    }

    return (
        <div className="mt-28">
            <Container>
                <ProductDetails product={product} />
                <div className="flex flex-col mt-20 gap-4">
                    <RelatedItems />
                    <ListRating product={product} />
                </div>
            </Container>
        </div>
    );
}
