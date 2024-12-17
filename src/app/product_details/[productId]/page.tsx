import Container from '@/app/components/Container';
import React from 'react';
import ListRating from './ListRating';
import { products } from '../../../../productdb/products';
import RelatedItems from '@/app/components/RelatedItems';
import ProductDetails from './ProductDetails';

// Define the params type
interface IParams {
    productId: string;
}

// Wrap the props in a Promise
export default async function ProductDetailsPage({ params }: { params: IParams }) {
    // Simulate an async operation (e.g., fetching params)
    const getParams = async () => {
        return new Promise<IParams>((resolve) => {
            setTimeout(() => resolve(params), 1000); // Simulate delay
        });
    };

    const resolvedParams = await getParams();
    console.log('Resolved Params:', resolvedParams);

    // Find the product
    const product = products.find((item) => item.id === resolvedParams.productId);

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
