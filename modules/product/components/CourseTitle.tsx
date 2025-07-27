// components/CourseTitle.tsx
import React from "react";

interface Props {
  title: string;
}

const CourseTitle = ({ title }: Props) => {
  return <h1 className="text-3xl font-bold text-gray-800">{title}</h1>;
};

export default CourseTitle;
