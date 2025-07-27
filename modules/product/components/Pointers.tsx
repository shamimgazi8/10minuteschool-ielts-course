import SectionLayoutWrapper from "@/modules/@common/SectionLayoutWrapper";
import React from "react";
import { FaCheck } from "react-icons/fa";

// Define the types for props
interface PointerItem {
  id?: string | number;
  text: string;
}

interface Props {
  title: string;
  points: PointerItem[];
}

const Pointers = ({ title, points }: Props) => {
  if (!points || points.length === 0) return null;

  return (
    <SectionLayoutWrapper>

    <div id="pointers" className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
      <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
        <h2 className="mb-4 text-xl  md:text-2xl">{title}</h2>

        <div className="rounded-md md:border border-gray-300">
          <div className="pt-2 md:p-6">
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
              {points.map((item, index) => (
                  <li key={item.id || index} className="flex items-start gap-2 mb-2">
                  <FaCheck className="text-[#6294F8] mt-[2px]" size={13} />
                  <div className="flex-1 text-[16px]">{item.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
              </SectionLayoutWrapper>
  );
};

export default Pointers;
