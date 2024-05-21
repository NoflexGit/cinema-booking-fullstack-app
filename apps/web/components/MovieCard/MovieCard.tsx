"use client";

import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { Label } from "@/components/shared/Label";

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

export const MovieCard = async ({
  id,
  title,
  categories,
  price,
  imageUrl,
}: Props) => {
  const handleBuyTicket = () => {
    console.log("Buy ticket", id);
  };

  return (
    <div className="bg-slate-700 h-[370px] rounded-2xl overflow-hidden relative">
      <Image
        width="250"
        height="300"
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="p-4 absolute bottom-0 left-0 w-full backdrop-blur-sm bg-gradient-to-t from-gray-800">
        <h3 className="text-white text-lg">{title}</h3>
        {categories.map((category) => (
          <Label key={category.id} className="mt-2" size="sm">
            {category.name}
          </Label>
        ))}
        <div className="flex justify-between items-center mt-4">
          <span className="text-white">from ${price}</span>
          <Button size="sm" view="primary" onClick={handleBuyTicket}>
            Buy Tickets
          </Button>
        </div>
      </div>
    </div>
  );
};
