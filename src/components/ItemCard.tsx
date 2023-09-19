import { Item } from '@/types';
import { Card, CardContent, CardFooter } from './ui/card';

interface ItemCard {
  data: Item;
}

export default function ItemCard({ data }: ItemCard) {
  return (
    <Card className=" rounded-lg border-2">
      <CardContent className="pt-4">
        <div className=" aspect-square relative bg-foreground/5 rounded-lg">
          <img
            src={data.image}
            className=" aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className=" flex-col items-start">
        <div>
          <p className=" font-semibold text-lg">{data.title}</p>
          <p className=" text-sm text-primary/80">{data.price}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
