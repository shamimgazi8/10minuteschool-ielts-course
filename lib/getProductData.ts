// lib/getProductData.ts

import { ProductData } from "@/types/product";

export async function getProductData(
  lang: "en" | "bn" = "en"
): Promise<ProductData> {
  const baseUrl = process.env.API_BASE_URL;

  if (!baseUrl) {
    throw new Error("API_BASE_URL is not defined");
  }

  const res = await fetch(`${baseUrl}/products/ielts-course?lang=${lang}`, {
    headers: {
      "X-TENMS-SOURCE-PLATFORM": "web",
    },
    cache: "no-store", // force SSR
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product data");
  }

  const data = await res.json();
  return data;
}
