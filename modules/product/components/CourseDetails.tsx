// AboutCourseContent.tsx
'use client';

import SectionLayoutWrapper from '@/modules/@common/SectionLayoutWrapper';
import { useState } from 'react';

type AboutValue = {
  id: string;
  title: string; // HTML string
  description: string; // HTML string
  icon: string;

};

interface Props {
  section?: {
    values?: AboutValue[];
    name?: string;
  };
}

export default function AboutCourseContent({ section }: Props) {
  const values = section?.values || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionLayoutWrapper>
      <div className="mb-6">
        <div className="flex justify-between w-full">
          <h2 className="mb-2 text-2xl font-semibold md:mb-4 text-[#111827] select-none mt-4">
         {section?.name}
          </h2>
        </div>

        <div className="relative rounded-md md:border border-gray-300 md:px-5">
          {values.map((item, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div
                key={item.id}
                className="border-b border-dashed border-gray-300 last:border-0 select-none"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full py-4 text-[14px] text-[#111827] font-medium flex justify-between items-center cursor-pointer hover:text-green"
                >
                  <div
                    className="font-semibold text-left"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <svg
                    className={`h-5 w-5 transition-transform duration-300 text-gray-600 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[3000px] py-4' : 'max-h-0'
                  }`}
                >
                  <div
                    className="text-gray-700 text-sm space-y-2"
                    dangerouslySetInnerHTML={{ __html: item.description || '' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionLayoutWrapper>
  );
}
