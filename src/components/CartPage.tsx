import { useShoppingCart } from '@/context/ShoppingCartContext';
import Container from './Container';
import CartCard from './CartCard';
import { Button } from './ui/button';

export default function CartPage() {
  const { cartItems } = useShoppingCart();

  return (
    <Container>
      <div className="space-y-10 pb-10 grid grid-cols-2">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg relative overflow-hidden grid grid-cols-1 gap-3  ">
          {cartItems.map((item) => (
            <CartCard key={item.id} id={item.id} quantity={item.quantity} />
          ))}
        </div>
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg relative overflow-hidden grid grid-cols-1 gap-3  ">
          <div className=" text-lg flex flex-col place-items-center justify-center gap-10">
            <div>
              Total: $
              {Math.round(
                (cartItems.reduce((total, cartItem) => {
                  return total + (cartItem.price || 0) * cartItem.quantity;
                }, 0) +
                  Number.EPSILON) *
                  100
              ) / 100}
            </div>
            <a
              href="https://www.youtube.com/watch?v=bLE8MNL4QFY"
              className=" no-underline w-1/2 flex justify-center"
            >
              <Button variant="outline" className="w-1/2 text-lg">
                Buy Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
