import { Item } from '@/types';
import { Card, CardContent, CardFooter } from './ui/card';
import { Link } from 'react-router-dom';

interface ItemCard {
  data: Item;
}

export default function ItemCard({ data }: ItemCard) {
  return (
    <Link to={`/shop/${data.id}`}>
      <Card className=" rounded-lg border-2 outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300">
        <CardContent className="pt-4">
          <div className=" aspect-square relative bg-foreground/5 rounded-lg">
            <img
              src={data.image}
              className=" aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className=" flex-col items-start gap-2">
          <div>
            <p className=" font-semibold text-lg">{data.title}</p>
            <p className=" text-sm text-primary/80 space-y-3"> ${data.price}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
