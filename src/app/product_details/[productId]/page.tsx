// Import necessary components
import Container from '@/app/components/Container';
import ListRating from './ListRating';
import { products } from '../../../../productdb/products';
import RelatedItems from '@/app/components/RelatedItems';
import ProductDetails from './ProductDetails';

// The async function receives params directly, and we're going to await it to resolve
export default async function ProductDetailsPage({ params }: { params: { productId: string } }) {
  // Await params (if Next.js doesn't resolve it automatically, which it should in this case)
  const resolvedParams = await params;

  const { productId } = resolvedParams;  // Extract productId from resolved params

  // Find the product based on the productId
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
