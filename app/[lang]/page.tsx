import { Metadata } from "next";
import { getProductData } from "@/lib/getProductData";
import ProductPage from "@/modules/product/ProductPage";
import { SEOData } from "@/types/product";

// Now params is a Promise that you must await
type Params = Promise<{ lang: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = rawLang === "bn" ? "bn" : "en";
  const { data: product } = await getProductData(lang);
  const seo: SEOData | undefined = product?.seo;

  if (!seo) return {};

  const getMetaContent = (key: string): string | undefined =>
    seo.defaultMeta.find((meta) => meta.value === key)?.content;

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

export default async function Page({
  params,
}: {
  params: Params;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "bn" ? "en" : "bn";

  return (
    <main>
      <ProductPage lang={lang} />
    </main>
  );
}
