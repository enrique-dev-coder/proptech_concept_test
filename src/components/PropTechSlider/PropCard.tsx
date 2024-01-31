import Button from '@/ui/system/Button';
import { Heart } from 'lucide-react';
import React from 'react';

const PropCard = () => {
  return (
    <div className="w-[300px] h-[350px] border rounded-md mx-2 flex flex-col">
      <div>
        <img src="assets/img/playa.jpg" className=" rounded-t-md" />
      </div>
      <div className="p-4 flex flex-col h-full">
        <div className="flex-1">
          <p className=" text-lg font-medium">Tulum, Quintana Roo</p>
          <p className=" text-lg font-medium">$ 2,000,000 MX</p>
        </div>
        <div className=" flex justify-between items-center">
          <Button text="Comprar" customClasses="py-1" />
          <Heart className=" cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PropCard;
