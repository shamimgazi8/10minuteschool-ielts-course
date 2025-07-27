// app/product/ielts-course/page.tsx
import { Metadata } from "next";
import { getProductData } from "@/lib/getProductData";
import ProductPage from "@/modules/product/ProductPage";
import { SEOData } from "@/types/product";

interface PageProps {
  params: { lang: string };
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = params.lang === "bn" ? "bn" : "en"; // fallback to en
  const { data: product } = await getProductData(lang);
  const seo: SEOData | undefined = product?.seo;

  if (!seo) return {};

  const getMetaContent = (key: string): string | undefined => {
    return seo.defaultMeta.find((meta) => meta.value === key)?.content;
  };

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: getMetaContent("og:title"),
      description: getMetaContent("og:description"),
      url: getMetaContent("og:url"),
      type: "website",
      locale: getMetaContent("og:locale") ?? "en_US",
      images: [
        {
          url:
            getMetaContent("og:image") ??
            "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
          type: getMetaContent("og:image:type") ?? "image/jpg",
          alt: getMetaContent("og:image:alt") ?? seo.title,
        },
      ],
    },
    other: seo.defaultMeta.reduce((acc, meta) => {
      acc[meta.value] = meta.content;
      return acc;
    }, {} as Record<string, string>),
  };
}

export default async function Page({ params }: PageProps) {
  const lang = params.lang === "bn" ? "bn" : "en"; 

  return (
    <main>
      <ProductPage lang={lang} />
    </main>
  );
}