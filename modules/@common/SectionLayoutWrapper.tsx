// components/common/SectionLayoutWrapper.tsx
import React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionLayoutWrapper = ({ title, children, className = "" }: Props) => {
  return (
    <section className={`container mx-auto px-4 py-8 `}>
      <div className="flex flex-col gap-4">
        {title && (
          <h2 className={`text-xl font-semibold md:text-2xl text-[#111827] ${className}`}>
            {title}
          </h2>
        )}
        <div className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
        
            {children}
         
        </div>
      </div>
    </section>
  );
};

export default SectionLayoutWrapper;
