import { useEffect, useState } from 'react';
import localforage from 'localforage';

export function useLocalForage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState(async () => {
    const storage = await localforage.getItem(key);
    if (storage != null) return storage;

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localforage.setItem(key, value);
  }, [key, value]);
  return [value, setValue] as [typeof value, typeof setValue];
}
