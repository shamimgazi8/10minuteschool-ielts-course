// components/Description.tsx
import React from "react";

interface Props {
  html: string;
}

const Description = ({ html }: Props) => {
  if (!html || typeof html !== "string") return null;

  return (
    <div
      className="prose max-w-none text-gray-700"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Description;
