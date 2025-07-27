import SectionLayoutWrapper from "@/modules/@common/SectionLayoutWrapper";
import React from "react";

const GroupJoinEngagement = () => {
  return (
    <SectionLayoutWrapper>

   
    <div id="group_join_engagement" className="mb-8 md:mb-12">
      <div
        className="flex flex-col md:flex-row gap-4 p-4 md:p-8 rounded-xl overflow-hidden"
        style={{
          backgroundImage:
            "url('https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png')",
          backgroundSize: "cover",
        }}
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621150265.png"
            alt="Pointer Icon"
            className="mb-4"
            style={{ height: 40 }}
          />
          <h2 className="text-xl font-semibold text-white">
            IELTS Confirm 7+ Score (Guideline)
          </h2>
          <p className="mt-2 text-base text-[#ededed]">
            IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে ।
          </p>
          <button className="mt-6 bg-[#1cab55] hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition">
            ফ্রি PDF Download করুন
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex items-center w-1/2">
          <img
            src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg"
            alt="Course Thumbnail"
            height={200}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
     </SectionLayoutWrapper>
  );
};

export default GroupJoinEngagement;
