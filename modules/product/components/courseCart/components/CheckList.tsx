import React from "react";
import Image from "next/image";

type ChecklistItem = {
  id: string;
  icon: string;
  text: string;
  color: string;
  list_page_visibility: boolean;
};

interface Props {
  checklist: ChecklistItem[];
}

const Checklist = ({ checklist }: Props) => {
  if (!checklist?.length) return null;

  return (
    <section className=" ">
      <div className="grid py-2 md:p-4">
        <p className="mb-4 text-xl font-semibold text-[#111827]">
          এই কোর্সে যা থাকছে
        </p>

        {checklist.map((item) => (
          <div
            key={item.id}
            className="flex items-center mb-3 leading-5 text-[16px] text-[#111827]"
          >
            <div
              className="inline-block h-[20px] w-[20px] transition-opacity duration-300 ease-in-out"
              style={{ fontSize: 0, opacity: 1 }}
            >
              <Image
                src={item.icon}
                alt="icon"
                width={20}
                height={20}
                style={{ color: "transparent" }}
              />
            </div>
            <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
              {item.text}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Checklist;
