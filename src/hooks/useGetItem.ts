import { useEffect, useState } from 'react';
import axios from 'axios';

export function useGetItem(id: number) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function getItem(x: number) {
      const result = await axios.get(`https://fakestoreapi.com/products/${x}`);
      const item = await result.data;
      console.log(item);
      setItem(item);
    }
    getItem(id);
  }, [id]);

  return [item, setItem];
}
