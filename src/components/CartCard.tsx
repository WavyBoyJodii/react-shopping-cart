import { useShoppingCart } from '@/context/ShoppingCartContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from './ui/button';

type CartCardProps = {
  id: number;
  quantity: number;
};

export default function CartCard({ id, quantity }: CartCardProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function getItem(x: number) {
      const result = await axios.get(`https://fakestoreapi.com/products/${x}`);
      const item = await result.data;
      console.log(item);
      setItem(item);
    }
    getItem(id);
  }, [id]);

  return (
    <>
      {item && (
        <div className=" w-full  h-48 border-b flex p-9 gap-7 rounded-lg bg-slate-100 place-self-start">
          <div className=" aspect-square rounded-lg relative">
            <img
              src={item.image}
              className=" aspect-square object-cover rounded-lg"
            />
          </div>
          <div className=" flex flex-col items-start gap-2 w-52">
            <div className=" text-sm md:text-base font-semibold">
              {' '}
              {item.title}
            </div>
            <div className=' text-xs md:text-sm text-primary/80 space-y-3"'>
              ${item.price} x{quantity}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10">
            <div className=" flex gap-6">
              <div className="text-sm md:text-base">
                ${item.price * quantity}
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => removeFromCart(item.id)}
                className=" bg-slate-500 space-x-96"
              >
                {' '}
                &times;
              </Button>
            </div>
            <div className="flex gap-6">
              <Button
                size="icon"
                variant="outline"
                onClick={() => decreaseCartQuantity(item.id)}
              >
                -
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => increaseCartQuantity(item.id)}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
