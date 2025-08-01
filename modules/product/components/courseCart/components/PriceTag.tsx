// components/PriceTag.tsx
import React from "react";

interface PriceTagProps {
  currentPrice: number;
  originalPrice: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ currentPrice, originalPrice }) => {
  const discount = originalPrice - currentPrice;

  return (
    <div className="flex items-center space-x-2 pl-4 pr-4 pt-4 ">
      <span className="text-xl font-semibold text-black">৳{currentPrice}</span>
      <span className="line-through text-gray-500 text-base">৳{originalPrice}</span>
      <div className=" ml-2">

      <div className="bg-[#f97b53] text-white text-sm px-2 py-1 rounded-r-[4px] rounded-l-[2px] flex items-center gap-1">
         <div className="absolute left-[133px] w-5 h-5 bg-[#f97b53] rotate-45">
             <span className="text-white text-lg absolute right-1">•</span>
         </div>
         <div className=" ml-2 flex gap-2 ">


        <span>{discount} টা ছাড়</span>
         </div>

      </div>
      </div>
      
    </div>
  );
};

export default PriceTag;
