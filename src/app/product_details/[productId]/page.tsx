// Import necessary components
import Container from '@/app/components/Container';
import ListRating from './ListRating';
import { products } from '../../../../productdb/products';
import RelatedItems from '@/app/components/RelatedItems';
import ProductDetails from './ProductDetails';

// Here, `params` will be awaited as a Promise
type Params = Promise<{ productId: string }>;

export default async function ProductDetailsPage({ params }: { params: Params }) {
  // Await the Promise that contains the params
  const resolvedParams = await params;  // Await params

  // Extract the productId from the resolved params
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
