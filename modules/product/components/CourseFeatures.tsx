import SectionLayoutWrapper from "@/modules/@common/SectionLayoutWrapper";
import React from "react";

export type FeatureValue = {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail?: string;
};


type FeatureExplanationsProps = {
  name: string;
  values: FeatureValue[];
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="15"
    fill="none"
    viewBox="0 0 19 15"
    className="flex-shrink-0"
  >
    <path
      fill="#6294F8"
      stroke="#6294F8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.893"
      d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"
    />
  </svg>
);

const FeatureSection: React.FC<{ feature: FeatureValue }> = ({ feature }) => (
  <div className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row">
    {/* Text & checklist */}
    <div className="flex flex-col gap-2 md:flex-1">
      <h2 className="text-[14px] font-[500px] leading-[30px] text-[#111827] md:text-[16px]">
        {feature.title}
      </h2>
      {feature.checklist.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 text-[#4B5563] text-[14px] md:text-[16px] font-normal leading-[24px]"
        >
          <CheckIcon />
          <p className="text-[14px] font-[400px] leading-[24px] text-[#4B5563] md:text-[16px]">{item}</p>
        </div>
      ))}
    </div>

    {/* Image */}
    {feature.file_type === "image" && feature.file_url && (
      <div className="max-w-[220px] mx-auto md:mx-0">
        <img
          src={feature.file_url}
          alt={feature.title}
          width={250}
          height={200}
          loading="lazy"
          className="w-full h-auto rounded-md"
        />
      </div>
    )}
  </div>
);

const CourseFeatures: React.FC<{ data: FeatureExplanationsProps }> = ({
  data,
}) => {
  return (
    <SectionLayoutWrapper>

    <div id="feature_explanations" className="px-5 md:px-0 max-w-7xl mx-auto mt-4">
      <div className="flex flex-col gap-4 mb-12">
        <h2 className="text-xl md:text-xl font-semibold leading-[30px] text-black">
          {data.name}
        </h2>

        <div className="grid grid-cols-1 border border-gray-300 rounded-md divide-y divide-gray-300 px-4 md:px-5">
          {data.values.map((feature) => (
            <FeatureSection key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </div>
    </SectionLayoutWrapper>
  );
};

export default CourseFeatures;
