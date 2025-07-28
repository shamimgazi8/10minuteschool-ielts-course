"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MediaCarousel from "./components/Trailer";
import Checklist from "./components/CheckList";
import CTAButton from "./components/CTAbutton";
import PriceTag from "./components/PriceTag";

const CourseCart = ({ media, ctaText, checklist }: any) => {
  const cartRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // State to hold dynamic horizontal position (right) and fixed top for sticky cart
  const [stickyPosition, setStickyPosition] = useState<{ top: number; right: number }>({
    top: 112, // fixed top offset to keep sticky cart visible on scroll
    right: 0,
  });

  // IntersectionObserver for original cart visibility
  useEffect(() => {
    const cartObserver = new IntersectionObserver(
      ([entry]) => {
        setIsStickyVisible(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    if (cartRef.current) {
      cartObserver.observe(cartRef.current);
    }

    return () => {
      if (cartRef.current) {
        cartObserver.unobserve(cartRef.current);
      }
    };
  }, []);

  // IntersectionObserver for footer visibility
  useEffect(() => {
    footerRef.current = document.querySelector("footer");

    if (!footerRef.current) return;

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    footerObserver.observe(footerRef.current);

    return () => {
      if (footerRef.current) {
        footerObserver.unobserve(footerRef.current);
      }
    };
  }, []);

  // Update sticky cart horizontal position (right) on scroll and resize
  useEffect(() => {
    function updateStickyPosition() {
      if (!cartRef.current) return;

      const rect = cartRef.current.getBoundingClientRect();

      // Calculate 'right' distance relative to viewport (window.innerWidth - right edge of original cart)
      const right = window.innerWidth - rect.right;

      // top is fixed (112px) to keep sticky cart visible at a constant vertical position
      setStickyPosition({ top: 112, right });
    }

    window.addEventListener("scroll", updateStickyPosition);
    window.addEventListener("resize", updateStickyPosition);

    updateStickyPosition(); // initial call

    return () => {
      window.removeEventListener("scroll", updateStickyPosition);
      window.removeEventListener("resize", updateStickyPosition);
    };
  }, []);

  const shouldShowSticky = isStickyVisible && !isFooterVisible;

  return (
    <>
      {/* Original Position Cart */}
      <div
        ref={cartRef}
        className="mt-8 w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute border border-gray-300"
      >
        <MediaCarousel media={media} />
        <div className="sticky top-[112px] z-20 bg-white">
          <PriceTag currentPrice={1000} originalPrice={1000} />
          {ctaText && <CTAButton data={ctaText} />}
          <Checklist checklist={checklist} />
        </div>
        
      </div>

      {/* Animated Fixed Cart */}
      <AnimatePresence>
        {shouldShowSticky && (
          <motion.div
            key="sticky-cart"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed z-50 w-[90%] max-w-sm bg-white shadow-xl border border-gray-200 p-4"
            style={{
              top: stickyPosition.top,
              right: stickyPosition.right,
            }}
          >
            <div className="flex items-center space-x-2 pl-4 pr-4 pt-4">
              <span className="text-xl font-semibold text-black">৳{1000}</span>
              <span className="line-through text-gray-500 text-base">৳{1000}</span>
              <div className="ml-2">
                <div className="bg-[#f97b53] text-white text-sm px-2 py-1 rounded-r-[4px] rounded-l-[2px] flex items-center gap-1 relative">
                  <div className="absolute -left-2 w-3 h-3 bg-[#f97b53] rotate-45" />
                  <span className="ml-2">{0} টা ছাড়</span>
                </div>
              </div>
            </div>

            {ctaText && <CTAButton data={ctaText} />}
            <Checklist checklist={checklist} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CourseCart;
