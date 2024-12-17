import Container from '@/app/components/Container';
import React from 'react';
import ListRating from './ListRating';
import { products } from '../../../../productdb/products';
import RelatedItems from '@/app/components/RelatedItems';
import ProductDetails from './ProductDetails';

interface IParams {
    productId: string;
}

// Mark the function as async to await params
export default async function ProductDetailsPage({ params }: { params: IParams }) {
    // Await params before using
    const { productId } = await params;  // Await the params

    // Find the product based on the productId from params
    const product = products.find((item) => item.id === productId);

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
