// types/product.ts
export type MediaItem = {
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url?: string;
};

export type Checklist = {
  id: string;
  icon: string;
  text: string;
  color: string;
  list_page_visibility: boolean;
};
export interface Seo {
  title: string;
  description: string;
  image: string;
}

export interface cta_text {
  name: string;
  value: string;
}

export type Section = {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values?: Value[];
};

export type Value = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  name?: string; 
  image?: string; // Optional for sections that may not have an image
  short_description?: string; // Optional for instructors
  url?: string; // Optional for sections that may link to a page
  description?: string; // Optional for instructors
};

export interface InstructorSection  {
    type: string;
  name: string;
  short_description: string;
  description: string;
  image: string;
  slug: string;
  has_instructor_page: boolean;
}
export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string; // HTML
  media: MediaItem[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: cta_text;
  sections: Section[];
  data: ProductInnerData;
}
interface ProductInnerData {
  title?: string;
  description?: string; // HTML
  price?: string;
  seo?: SEOData;
  sections?: Section[];
  checklist?: Checklist[];
  media?: MediaItem[];
  cta_text?: cta_text;
}
// types/seo.ts
export type MetaDataItem = {
  content: string;
  type: "property" | "name";
  value: string;
};

export type SchemaItem = {
  meta_name: string;
  meta_value: string;
  type: "ld-json";
};

export type SEOData = {
  title: string;
  description: string;
  keywords: string[];
  defaultMeta: MetaDataItem[];
  schema: SchemaItem[];
};
