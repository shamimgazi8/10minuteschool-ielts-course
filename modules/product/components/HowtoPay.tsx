// components/HowToPay.tsx
'use client';
import SectionLayoutWrapper from "@/modules/@common/SectionLayoutWrapper";

const HowToPay = () => {
  const handleVideoClick = () => {
    // Replace with your actual video modal logic or redirect
    alert("ভিডিও চলবে এখানে বা ভিডিও মোডাল খুলুন!");
  };

  return (
    <SectionLayoutWrapper>

    <div id="how_to_pay">
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-semibold md:text-2xl">
          যেভাবে পেমেন্ট করবেন
        </h2>
        <div className="rounded-md md:border md:p-4 xs:py-2">
          <p>
            কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{" "}
            <span
              role="button"
              onClick={handleVideoClick}
              className="underline cursor-pointer text-green-500"
              >
              এই ভিডিওটি দেখুন
            </span>
          </p>
        </div>
      </div>
    </div>
                </SectionLayoutWrapper>
  );
};

export default HowToPay;
