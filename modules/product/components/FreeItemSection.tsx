import SectionLayoutWrapper from "@/modules/@common/SectionLayoutWrapper";
import React from "react";

const FreeItemSection = () => {
  return (
    <SectionLayoutWrapper>

    <div id="free_items" className="mb-14 px-4">
      <h2 className="my-5 text-xl font-semibold leading-[30px] text-black">
        এই কোর্সের সাথে ফ্রি পাচ্ছেন–
      </h2>

      <div
        className="relative w-full overflow-hidden bg-no-repeat bg-cover rounded-[20px] bg-[url('https://cdn.10minuteschool.com/images/banner_background_1731401239364.png')]"
      >
        {/* Gradient border effects */}
     <div
  className="absolute w-full h-full p-4 grid"
  style={{ gridTemplateColumns: "1fr" }}
>
  <div className="relative w-full h-full rounded-xl overflow-hidden z-[1]
    before:absolute before:content-[''] before:w-full before:h-full
    before:border before:blur-[1.5px] before:mix-blend-hard-light
    before:[border-image:conic-gradient(from_180deg_at_50%_50%,#FFE2BE_0deg,#FFA42D_36deg,#EDAE64_50deg,#8E9AFC_90deg,#67D1FF_102deg,#FFF_126deg,#FCD6F7_144deg,#F3CFFF_156deg,#CCA5F3_180deg,#E0CDF9_227deg,#472FFF_240deg,#479BFF_270deg,#B6E0FF_296deg,#FF8E75_323deg)_1]"
  ></div>
</div>

        {/* Content */}
        <div className="relative z-[1] text-white p-4 px-10 divide-y divide-slate-600 divide-dashed rounded-lg">
          <div className="flex flex-col gap-4 md:flex-row items-start justify-between px-5 py-5">
            {/* Left Text Block */}
            <div className="flex flex-col gap-2">
              <h3 className="text-base md:text-xl font-semibold leading-[26px] text-white mb-2">
                ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-[16px] leading-[24px] text-white font-normal">
                <li className="flex gap-3 items-center">
                  <span className="opacity-60">•</span>
                  <p>360 পৃষ্ঠা</p>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="opacity-60">•</span>
                  <p>প্রিমিয়াম হার্ডকপি</p>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="opacity-60">•</span>
                  <p>ফ্রি ডেলিভারি</p>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="opacity-60">•</span>
                  <p>৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি</p>
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="z-[1] mx-auto md:mx-0 md:mr-5 w-fit">
              <img
                src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png?w=120&h=150"
                alt="call us"
                width={120}
                height={150}
                loading="lazy"
                className="object-contain"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
                </SectionLayoutWrapper>
  );
};

export default FreeItemSection;
