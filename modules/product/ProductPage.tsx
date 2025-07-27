import { getProductData } from "@/lib/getProductData";
import HeroSection from "./components/HeroSection";
import CourseLayout from "./components/CourseLayout";
import Instructors from "./components/Instructors";
import GroupJoinEngagement from "./components/GroupJoin";
import Pointers from "./components/Pointers";
import ContentPreview from "./components/ContentPreview";

// Import JSON data
import contentPreviewData from "@/data/contentPreviewData.json";
import AboutCourseContent from "./components/CourseDetails";
import CourseFeatures from "./components/CourseFeatures";
import FreeItemSection from "./components/FreeItemSection";
import Requirements from "./components/Requirements";
import HowToPay from "./components/HowtoPay";


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

      <Instructors sections={product?.sections || []} />
      <CourseLayout sections={product?.sections || []} />
      <GroupJoinEngagement />

      <Pointers
        title={pointersData?.name ?? ""}
        points={
          (pointersData?.values || []).map((v: any) => ({
            id: v.id,
            text: v.text ?? v.value ?? "",
          }))
        }
      />

      <ContentPreview sections={contentPreviewData} />
      <AboutCourseContent
        section={
          aboutData
            ? {
                ...aboutData,
                values: (aboutData.values || []).map((v: any) => ({
                  ...v,
                  description: v.description ?? "",
                })),
              }
            : undefined
        }
      />
        <CourseFeatures data={courseFeatures || []} />
        <FreeItemSection />
        <Requirements />
        <HowToPay />
    </div>
  );
}
