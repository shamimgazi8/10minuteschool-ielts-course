import React from "react";
import { Section } from "@/types/product";
import Link from "next/link";
import SectionLayoutWrapper from "@/modules/@common/SectionLayoutWrapper";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


interface Props {
  sections: Section[];
}

const Instructors = ({ sections }: Props) => {
  const instructorSection = sections.find((sec) => sec.type === "instructors");

  if (!instructorSection || !instructorSection.values?.length) return null;

  return (
    <SectionLayoutWrapper title={instructorSection.name} className=" select-none mt-4">
      <div id="instructors" className=" bg-white">
        {instructorSection.values.map((instructor, index) => (
          <div
            key={index}
            className="flex items-center md:rounded-md md:border border-gray-300 md:p-5 mb-4 select-none"
          >
            {/* Instructor Image */}
            <div>
              <div
                className="rounded-[50%] overflow-hidden transition-opacity duration-300 ease-in-out opacity-100"
                style={{ fontSize: 0 }}
              >
                <img
                  src={instructor.image}
                  alt={`Instructor ${instructor.name}`}
                  width={73}
                  height={73}
                  className="w-[73px] h-[73px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Instructor Details */}
            <div className="flex-1 ml-4">
              <Link href={instructor.url || "#"} className=" ">
              <h3 className="text-lg hover:text-green-500 flex justify-start items-center text-center transition">
            {
              instructor.name}
            <MdOutlineKeyboardArrowRight className=" mt-[-4px]"  />
              </h3>
              </Link>
              <div className="text-sm text-gray-700">
              {instructor.description ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: instructor.description.trim(),
                  }}
                />
              ) : null}
            </div>

            </div>
          </div>
        ))}
      </div>
    </SectionLayoutWrapper>
  );
};

export default Instructors;
