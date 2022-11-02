import { getProducts } from '../fakeAPI';
import { ProductList } from '../components/ProductList';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
