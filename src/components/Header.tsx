import Container from './Container';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useShoppingCart } from '@/context/ShoppingCartContext';

export default function Header() {
  const { cartQuantity } = useShoppingCart();
  return (
    <header className="sm: flex sm: justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link to="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">React Emporium</h1>
            </Link>
          </div>
          <nav className="mx-6 flex items-center justify-items-center space-x-4 lg:space-x-6 hidden md:block">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="shop">
              <Button variant="ghost">Shop</Button>
            </Link>
          </nav>
          <Link to="cart">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <span className="sr-only">Shopping Cart</span>
              <ShoppingCart />
              <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center text-blue-500  text-sm w-6 h-6 absolute bottom-0 right-7 animate-pulse ">
                {cartQuantity}
              </div>
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6 md:hidden" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link className="block px-2 py-1 text-lg" to="/">
                  Home
                </Link>
                <Link className="block px-2 py-1 text-lg" to="shop">
                  Shop
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
