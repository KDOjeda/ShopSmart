// This file should be a Server Component by default in the App Directory

import Container from '@/app/components/Container';
import ListRating from './ListRating';
import { products } from '../../../../productdb/products';
import RelatedItems from '@/app/components/RelatedItems';
import ProductDetails from './ProductDetails';

// This will receive params as props automatically from Next.js
export default async function ProductDetailsPage({ params }: { params: { productId: string } }) {
  // Fetching product from params
  const { productId } = params;

  // Find the product from your products array
  const product = products.find((item) => item.id === productId);

  // Handle case where the product is not found
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
