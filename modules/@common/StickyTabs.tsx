"use client";

import { useRef, useState, useEffect } from "react";
import { courseTabs } from "@/data/tabs";
import { BiChevronRight } from "react-icons/bi";
import SectionLayoutWrapper from "./SectionLayoutWrapper";

const StickyTabs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(courseTabs[0]?.id || "");

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScroll);
    }
    return () => {
      window.removeEventListener("resize", checkScroll);
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActiveTab(id);
  };

  return (


      <div
        className="relative w-full overflow-visible"
        style={{ paddingLeft: "50px", paddingRight: "50px" }}
      >
        {/* Left Arrow */}
        <div
          onClick={() => scroll("left")}
          className="cursor-pointer absolute left-0 top-1/2 z-[1000] -translate-y-1/2 rotate-180 bg-[#7f7f7f] rounded-full"
        >
          <BiChevronRight size={32} className="text-white" />
        </div>

        {/* Right Arrow */}
        <div
          onClick={() => scroll("right")}
          className="cursor-pointer absolute right-0 top-1/2 z-[1000] -translate-y-1/2 bg-[#7f7f7f] rounded-full"
        >
          <BiChevronRight size={32} className="text-white" />
        </div>

        {/* Scrollable Tabs */}
        <div
          ref={scrollRef}
          className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-hidden scroll-smooth snap-x snap-mandatory"
          style={{ scrollPaddingLeft: "0" }}
        >
          <ul className="flex my-4 border-b border-gray-300 flex-nowrap">
            {courseTabs.map(({ label, id }, idx) => (
              <li key={idx} className="whitespace-nowrap">
                <button
                  onClick={() => scrollToSection(id)}
                  className={`whitespace-nowrap select-none px-4 py-2 text-base text-gray-600 border-b-2 transition-colors ${
                    activeTab === id
                      ? "border-green-500 text-black"
                      : "border-transparent"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>


  );
};

export default StickyTabs;
