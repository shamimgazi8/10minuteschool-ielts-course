// components/LearningList.tsx
import React from "react";
import { Section } from "@/types/product";

interface Props {
  sections: Section[];
}

const LearningList = ({ sections }: Props) => {
  const pointerSection = sections.find((s) => s.type === "pointers");
  if (!pointerSection || !pointerSection.items?.length) return null;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{pointerSection.title}</h2>
      <ul className="space-y-2 text-gray-700 list-disc pl-6">
        {pointerSection.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default LearningList;
