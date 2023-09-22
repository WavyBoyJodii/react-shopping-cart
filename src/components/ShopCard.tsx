// import { Item } from '@/types';
import { Card, CardContent, CardFooter } from './ui/card';
import Container from './Container';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Button } from './ui/button';
import { useShoppingCart } from '@/context/ShoppingCartContext';

// interface ItemCard {
//   data: Item;
// }

export async function loader({ params }) {
  const result = await axios.get(
    `https://fakestoreapi.com/products/${params.itemId}`
  );
  const item = result.data;
  console.log(item);
  return { item };
}

export default function ShopCard() {
  const { item } = useLoaderData();
  const { increaseCartQuantity } = useShoppingCart();
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden flex justify-center">
          <Card className=" flex  flex-col border-0 md:flex-row">
            <CardContent className="pt-4">
              <div className=" aspect-square relative  bg-foreground/5 rounded-lg">
                <img
                  src={item.image}
                  className=" aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105 m-auto"
                />
              </div>
            </CardContent>
            <CardFooter className=" flex-col  justify-center items-center p-4">
              <div className=" flex flex-col gap-6 bg-slate-100 items-center">
                <p className=" font-semibold text-lg">{item.title}</p>
                <p className=" text-xs text-center md:text-base">
                  {item.description}
                </p>
                <div className="flex justify-between pb-3 items-center gap-10">
                  <p className=" text-sm text-primary/80 space-y-3 ml-2">
                    {' '}
                    ${item.price}
                  </p>

                  <Button
                    size="sm"
                    onClick={() => {
                      increaseCartQuantity(item.id, item.price);
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Container>
  );
}
