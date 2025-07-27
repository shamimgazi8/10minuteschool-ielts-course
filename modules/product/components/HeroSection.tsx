import React from "react";

import {
  MediaItem,
  Checklist as ChecklistType,
  cta_text,
} from "@/types/product";
import CourseCart from "./courseCart";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface HeroSectionProps {
  title?: string;
  description?: string;
  rating: number;
  media: MediaItem[];
  checklist: ChecklistType[];
  ctaText?: cta_text;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  rating,
  media,
  checklist,
  ctaText,
}) => {
  return (
    <section
      className="w-full min-h-[300px] bg-cover bg-center flex flex-col justify-center items-start p-8 text-white"
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
      }}
    >
      <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
        <div className="order-1 flex flex-col justify-center flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)] mt-15">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <div className="flex items-center">
            <div className="flex mb-2 items-center justify-center">
              {renderStars(rating)}
              <p className="text-[16px] ml-2">
                (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </p>
            </div>
          </div>
          <div
            className="prose max-w-none text-[#A3A3A3] text-[17px] font-normal"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />
        </div>
        <CourseCart media={media} checklist={checklist} ctaText={ctaText} />

      </div>
    </section>
  );
};

export default HeroSection;

export const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={
        i < rating
          ? "text-[#ffa500] text-xl mr-1.5"
          : "text-gray-400 text-xl mr-1"
      }
    >
<FaStar />
    </span>
  ));
};
