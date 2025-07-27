import { FeatureValue } from "@/modules/product/components/CourseFeatures";

export const toFeatureExplanations = (section: any): { name: string; values: FeatureValue[] } => {
  return {
    name: section?.name || "",
    values: (section?.values || []).map((v: any) => ({
      id: v.id,
      title: v.title,
      checklist: v.checklist || [],
      file_type: v.file_type || "image",
      file_url: v.file_url || "",
      video_thumbnail: v.video_thumbnail || undefined,
    })),
  };
};
// lib/transformers.ts

export const transformPointers = (section: any) =>
  (section?.values || []).map((v: any) => ({
    id: v.id,
    text: v.text ?? v.value ?? "",
  }));

export const transformAbout = (section: any) =>
  section
    ? {
        ...section,
        values: (section?.values || []).map((v: any) => ({
          ...v,
          description: v.description ?? "",
        })),
      }
    : undefined;
