"use client";

import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import headerData from "@/data/headerData.json";
import contentPreview from "@/data/headerData.json";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const popularSearches = [
  "জনপ্রিয় অনুসন্ধান",
  "HSC 25 শেষ মুহূর্তের প্রস্তুতি কোর্স",
  "hsc 26",
  "english",
  "ielts",
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-center gap-8 px-6 py-3 ">
      {/* Logo and Search */}
      <div className="flex items-center gap-6">
        <Image
          src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
          alt="10 Minute School"
          width={100}
          height={40}
        />

        <div className="relative w-[400px]">
          <input
            type="text"
            placeholder={headerData.searchPlaceholder}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 150)}
            className="w-full border border-gray-300 rounded-full px-4 py-2.5 pl-10 text-sm focus:outline-none"
          />
          <Image
            src="/search-icon.svg"
            alt="Search"
            width={20}
            height={20}
            className="absolute left-3 top-2.5"
          />

          {/* Popular search dropdown */}
          <AnimatePresence>
            {isSearchFocused && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 left-0 w-full bg-white border rounded "
              >
                {popularSearches.map((item, idx) => (
                  <li
                    key={idx}
                    className={`px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
                      idx === 0 ? "text-gray-500 font-semibold" : ""
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-4 text-sm font-medium">
        {headerData.menus.map((menu, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => setActiveDropdown(idx)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-green-600 transition-colors text-[#4B5563]">
              {menu.label}
              {menu.hasDropdown && <FaChevronDown className="text-xs" />}
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {menu.hasDropdown && activeDropdown === idx && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white border rounded shadow z-50"
                >
                  <ul className="flex flex-col text-sm">
                    {(menu.items ?? ["Option 1", "Option 2", "Option 3"]).map(
                      (item, i) => (
                        <li
                          key={i}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Language Switcher */}
        <button className="border px-2 py-1 rounded text-xs hover:bg-gray-100 transition">
          অ আ {headerData.languageSwitcher.label}
        </button>

        {/* Call Info */}
        <div className="flex items-center gap-1 text-green-600 font-semibold">
          <IoCall size={16} />
          {headerData.call.label}
        </div>

        {/* Login */}
        <button className="bg-green-600 text-white px-4 py-1.5 rounded text-sm hover:bg-green-700 transition">
          {headerData.login.label}
        </button>
      </nav>
    </header>
  );
}
