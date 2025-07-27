import { getProductData } from "@/lib/getProductData";
import HeroSection from "./components/HeroSection";
import CourseLayout from "./components/CourseLayout";
import Instructors from "./components/Instructors";
import GroupJoinEngagement from "./components/GroupJoin";
import Pointers from "./components/Pointers";
import AboutCourseContent from "./components/CourseDetails";
import CourseFeatures from "./components/CourseFeatures";
import FreeItemSection from "./components/FreeItemSection";
import Requirements from "./components/Requirements";
import HowToPay from "./components/HowtoPay";
import StickyTabs from "../@common/StickyTabs";
import { toFeatureExplanations, transformAbout, transformPointers } from "@/utils/transformers";
import ContentPreview from "./components/ContentPreview";
import contentPreviewData from "@/data/contentPreviewData.json";
import CallSupport from "./components/CallSupport";
import ChatButton from "./components/Chatbutton";
import WhatsAppButton from "./components/Wpbutton";


export default async function ProductPage({
  lang = "en",
}: {
  lang?: "en" | "bn";
}) {
  const { data: product } = await getProductData(lang);
  console.log(product,'product data');
  

  const pointersData = product?.sections?.find((s) => s.type === "pointers");
  const aboutData= product?.sections?.find((s) => s.type === "about");
  const courseFeatures= product?.sections?.find((s) => s.type === "feature_explanations");

  return (
    <div className="text-xl">
      <HeroSection
        title={product?.title}
        description={product.description}
        rating={5}
        media={product?.media || []}
        ctaText={product?.cta_text}
        checklist={product?.checklist || []}
      />
        <div className=" w-[40%]  ml-[355px] sticky top-[65px] z-20 bg-white hidden md:block">
            <StickyTabs />
        </div>
      <Instructors sections={product?.sections || []} />
      <CourseLayout sections={product?.sections || []} />
      <GroupJoinEngagement />

        <Pointers
          title={pointersData?.name ?? ""}
          points={transformPointers(pointersData)}
        />
        <ContentPreview  sections={contentPreviewData} />

        <AboutCourseContent section={transformAbout(aboutData)} />

        <CourseFeatures data={toFeatureExplanations(courseFeatures)} />



        <FreeItemSection />
        <Requirements />
        <HowToPay />
         <CallSupport />
         <ChatButton />
         <WhatsAppButton />
    </div>
  );
}
