'use client';

import Image from 'next/image';
import { Button } from '@/components/shared/Button';
import { Label } from '@/components/shared/Label';

type Props = {
  id: string;
  title: string;
  categories: Array<{
    id: string;
    name: string;
  }>;
  price: number;
  imageUrl: string;
};

export const MovieCard = ({
  id,
  title,
  categories,
  price,
  imageUrl,
}: Props) => {
  const handleBuyTicket = () => {
    console.log('Buy ticket', id);
  };

  return (
    <div className="relative h-[370px] overflow-hidden rounded-2xl bg-slate-700">
      <Image
        width="250"
        height="300"
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-800 p-4 backdrop-blur-sm">
        <h3 className="text-lg text-white">{title}</h3>
        {categories.map((category) => (
          <Label key={category.id} className="mt-2" size="sm">
            {category.name}
          </Label>
        ))}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-white">from ${price}</span>
          <Button size="sm" view="primary" onClick={handleBuyTicket}>
            Buy Tickets
          </Button>
        </div>
      </div>
    </div>
  );
};
