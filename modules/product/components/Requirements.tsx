// components/Requirements.tsx

import SectionLayoutWrapper from "@/modules/@common/SectionLayoutWrapper";
import { BiCheck } from "react-icons/bi";

const requirements = [
  "ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)",
  "স্মার্টফোন অথবা পিসি",
];

const Requirements = () => {
  return (
    <SectionLayoutWrapper>

    <div id="requirements">
      <div className="mb-6 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
        <div className="pb-6 bg-white md:pb-0">
          <div className="mb-0">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
              ক্লাস করার জন্য প্রয়োজন হবে
            </h2>
            <div className="py-2 rounded-md md:border border-gray-300 md:p-6">
              <ul>
                {requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 mb-2 last:mb-0 text-[16px] text-[#111827]">
                    <BiCheck className="text-[#6294F8]" size={24} />
                    <h3>{item}</h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
                </SectionLayoutWrapper>
  );
};

export default Requirements;
