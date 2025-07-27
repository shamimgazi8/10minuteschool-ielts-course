'use client';
import SectionLayoutWrapper from "@/modules/@common/SectionLayoutWrapper";
import { useState } from "react";

type VideoItem = {
  id: string;
  title: string;
  isFree: boolean;
  watched: boolean;
};

type Section = {
  title: string;
  videos: VideoItem[];
};

interface Props {
  sections: Section[];
}

export default function ContentPreview({ sections }: Props) {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleSections = showAll ? sections : sections.slice(0, 3);

  return (
    <SectionLayoutWrapper>
      <div id="content_preview" className="mb-6">
        <div className="flex justify-between w-full">
          <h2 className="mb-2 text-xl font-semibold md:mb-4 text-[#111827] select-none">
            কন্টেন্ট প্রিভিউ
          </h2>
        </div>

        <div className="relative rounded-md md:border border-gray-300 md:px-5">
          {visibleSections.map((section, idx) => {
            const isOpen = idx === openIndex;

            return (
              <div
                key={idx}
                className="border-b border-dashed border-gray-300 last:border-0 select-none"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full py-4 text-[14px] text-[#111827] font-medium flex justify-between items-center cursor-pointer hover:text-green"
                >
                  <h3 className="font-semibold">{section.title}</h3>
                  <svg
                    className={`h-5 w-5 transition-transform duration-300 text-gray-600 ${
                      isOpen ? "rotate-180" : ""
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
                    isOpen ? "max-h-[1000px] py-4" : "max-h-0"
                  }`}
                >
                  <ul>
                    {section.videos.map((video) => (
                      <li
                        key={video.id}
                        className={`mb-4 flex cursor-pointer hover:text-green ${
                          video.isFree ? "" : "text-gray-500"
                        }`}
                      >
                        <span className="mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                            className={
                              video.isFree ? "text-green-600" : "text-[#9CA3AF]"
                            }
                          >
                            <circle cx="10" cy="10" r="10" fill="currentColor" />
                            <path
                              fill="#fff"
                              d={
                                video.isFree
                                  ? "M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"
                                  : "M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z"
                              }
                            />
                          </svg>
                        </span>
                        <h4 className="flex-1 text-sm">{video.title}</h4>
                        {video.isFree && (
                          <span className="text-green-500 text-[16px]">
                            ফ্রি দেখুন
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show All Button */}
        {sections.length > 3 && (
          <div className="flex justify-center translate-y-[-15px] select-none ">
            <button
              className="flex items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-600   shadow-md hover:bg-gray-100 transition"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "কম দেখুন" : "সকল কন্টেন্ট"}
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                className={`${showAll ? "rotate-180" : ""} transition-transform duration-300`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </SectionLayoutWrapper>
  );
}
