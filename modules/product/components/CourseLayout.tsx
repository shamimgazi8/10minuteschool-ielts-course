// components/CourseLayout.tsx
import React from "react";
import { Section } from "@/types/product";
import Image from "next/image";
import SectionLayoutWrapper from "@/modules/@common/SectionLayoutWrapper";


interface Props {
  sections: Section[];
}

const CourseLayout = ({ sections }: Props) => {
  const featureSection = sections.find((s) => s.type === "features");
  if (!featureSection || !featureSection.values?.length) return null;

  return (
    <SectionLayoutWrapper title={featureSection.name} className=" md:text-[20px]">
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">

      
      {featureSection.values.map((item) => (
        <div key={item.id} className="flex flex-row items-start gap-3 m-1">
          <Image src={item.icon} alt={item.title} width={36} height={36} />
          <div className="flex flex-col flex-1 gap-2">
            <h3 className="text-[18px] font-medium leading-[26px] text-white">
              {item.title}
            </h3>
            <p className="text-[14px] font-normal leading-[22px] text-[#9CA3AF]">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
      </div>
    </SectionLayoutWrapper>
  );
};

export default CourseLayout;
