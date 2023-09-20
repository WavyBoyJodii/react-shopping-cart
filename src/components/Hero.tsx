import Container from './Container';
import interior from '../assets/beautiful-interior.jpg';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './ItemList';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function sliceData() {
      try {
        const result = await axios.get('https://fakestoreapi.com/products');
        const sliced = result.data.slice(0, 8);
        setProducts(sliced);
      } catch (err) {
        console.log(err);
      }
    }
    sliceData();
  }, []);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            style={{ backgroundImage: `url(${interior})` }}
            className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
          >
            <div className=" h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black bg-secondary/60 p-4 rounded-lg">
                Dream Home
                <Link to="shop">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full py-6 text-xl"
                  >
                    <ShoppingBag className="mr-2" />
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          {products && <ItemList items={products} />}
        </div>
      </div>
    </Container>
  );
}
