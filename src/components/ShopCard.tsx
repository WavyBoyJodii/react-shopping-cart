// import { Item } from '@/types';
import { Card, CardContent, CardFooter } from './ui/card';
import Container from './Container';
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

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
  return (
    <Container>
      <Card className="border-0 ">
        <CardContent className="pt-4">
          <div className=" aspect-square relative bg-foreground/5 rounded-lg">
            <img
              src={item.image}
              className=" aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className=" flex-col items-start gap-2">
          <div>
            <p className=" font-semibold text-lg">{item.title}</p>
            <p className=" text-sm text-primary/80 space-y-3"> ${item.price}</p>
          </div>
        </CardFooter>
      </Card>
    </Container>
  );
}
