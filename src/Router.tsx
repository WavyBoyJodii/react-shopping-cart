import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Shop from './components/Shop';
import About from './components/About';
import CartPage from './components/CartPage';
import Hero from './components/Hero';
import ShopCard, { loader as shopLoader } from './components/ShopCard';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Hero />,
          errorElement: <ErrorPage />,
        },
        {
          path: 'shop',
          element: <Shop />,
          errorElement: <ErrorPage />,
        },
        {
          path: 'shop/:itemId',
          element: <ShopCard />,
          loader: shopLoader,
        },
      ],
    },
    {
      path: 'about',
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'cart',
      element: <CartPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}
