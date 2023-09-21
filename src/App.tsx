import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Header />
        <Outlet />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
