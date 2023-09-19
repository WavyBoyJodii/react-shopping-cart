import Container from './Container';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Header() {
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
            <Button variant="ghost">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost">
              <Link to="shop">Shop</Link>
            </Button>
            <Button variant="ghost">
              <Link to="about">About</Link>
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            aria-label="Shopping Cart"
          >
            <span className="sr-only">Shopping Cart</span>
            <Link to="cart">
              <ShoppingCart />
            </Link>
          </Button>
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
                <Link className="block px-2 py-1 text-lg" to="about">
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
