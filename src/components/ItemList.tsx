import ItemCard from './ItemCard';
import { Item } from '@/types';

interface ItemListProps {
  items: Item[];
}

export default function ItemList({ items }: ItemListProps) {
  return (
    <div className=" space-y-4">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ItemCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
