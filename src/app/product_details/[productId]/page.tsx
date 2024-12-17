// "use client"; // Not needed for this example, we're handling it on the server side
import Container from '@/app/components/Container';
import ListRating from './ListRating';
import { products } from '../../../../productdb/products';
import RelatedItems from '@/app/components/RelatedItems';
import ProductDetails from './ProductDetails';

type Params = Promise<{ productId: string }>;

export default async function ProductDetailsPage({ params }: { params: Params }) {
  // Handle the async operation for params
  const resolvedParams = await params;  // Await the Promise to get actual params

  const { productId } = resolvedParams;

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
