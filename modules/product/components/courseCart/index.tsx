import MediaCarousel from "./components/Trailer";
import Checklist from "./components/CheckList";
import CTAButton from "./components/CTAbutton";
import PriceTag from "./components/PriceTag";

const CourseCart = ({ media, ctaText, checklist }: any) => {
  return (
    <div className="mt-10 w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute border border-gray-300">
      {/* Not sticky wrapper anymore */}
      <MediaCarousel media={media} />
      
      {/* Make this div sticky */}
      <div className="sticky top-[112px] z-20 bg-white">
        <PriceTag currentPrice={1000} originalPrice={1000} />
        {ctaText && <CTAButton data={ctaText} />}
        <Checklist checklist={checklist} />
      </div>
    </div>
  );
};

export default CourseCart;
