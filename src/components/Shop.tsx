import { useEffect, useState } from 'react';
import Container from './Container';
import axios from 'axios';
import ItemList from './ItemList';

export default function Shop() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await axios.get('https://fakestoreapi.com/products');
        setProducts(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            {products && <ItemList items={products} />}
          </div>
        </div>
      </div>
    </Container>
  );
}
