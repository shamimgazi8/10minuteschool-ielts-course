// components/CTAButton.tsx
import { cta_text } from "@/types/product";
import React from "react";

interface Props {
  data: cta_text;
}

const CTAButton = ({ data }: Props) => {
  return (
    <div className=" text-center p-4">
      <button
        className="bg-[#1cab55] text-white px-4 py-3 rounded-[6px] text-[16px] hover:bg-green-700 transition w-full hover:shadow-green-700 shadow-[inset_0_-5px_0_0_rgba(0,0,0,0.2)]"
        data-cta-value={data.value}
      >
        {data.name}
      </button>
    </div>
  );
};

export default CTAButton;
