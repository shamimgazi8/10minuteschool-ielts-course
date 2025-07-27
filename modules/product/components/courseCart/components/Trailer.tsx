"use client";

import { useEffect, useRef, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { FaPlay } from "react-icons/fa"; // You can choose any play icon or custom SVG

type MediaItem = {
  name: string;
  resource_type: "image" | "video";
  resource_value: string;
  thumbnail_url?: string;
};

interface Props {
  media: MediaItem[];
}

const MediaCarousel = ({ media }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    thumbRefs.current[currentIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setVideoPlaying(false); // Reset video play state when switching media
  }, [currentIndex]);

  if (!media?.length) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const current = media[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto p-1">
      {/* Main Media */}
      <div className="aspect-video bg-black overflow-hidden relative">
        {current.resource_type === "image" ? (
          <img
            src={current.resource_value}
            alt={current.name}
            className="w-full h-full object-cover"
          />
        ) : videoPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${current.resource_value}?autoplay=1`}
            title="Video player"
            allowFullScreen
            allow="autoplay"
            className="w-full h-full"
          />
        ) : (
          // Show thumbnail with custom play button overlay
          <div
            className="relative cursor-pointer w-full h-full"
            onClick={() => setVideoPlaying(true)}
          >
            <img
              src={
                current.thumbnail_url ||
                `https://img.youtube.com/vi/${current.resource_value}/hqdefault.jpg`
              }
              alt={current.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 bg-opacity-40">
              <div className="rounded-full bg-white bg-opacity-80 p-4 z-20">
                <FaPlay className="text-green-500 text-xl" />
              </div>
               <div className="rounded-full bg-white/20 bg-opacity-80 p-[30px] absolute ">
            
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-[40%] left-3 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-0 shadow"
      >
        <GrFormPrevious className="text-gray-600 text-2xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-[40%]  right-3 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-0 shadow"
      >
        <MdNavigateNext className="text-gray-600 text-2xl" />
      </button>

      {/* Thumbnails */}
      <div className="p-4 overflow-hidden z-50">
        <div className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth z-50">
          {media.map((item, index) => (
            <button
              key={index}
              ref={(el) => {
                thumbRefs.current[index] = el;
              }}
              onClick={() => setCurrentIndex(index)}
              className={`w-[55px] h-[31px] flex-shrink-0 rounded overflow-hidden border-[2px] ${
                index === currentIndex ? "border-green-600" : "border-transparent"
              }`}
            >
              <img
                src={
                  item.resource_type === "image"
                    ? item.resource_value
                    : item.thumbnail_url ||
                      `https://img.youtube.com/vi/${item.resource_value}/mqdefault.jpg`
                }
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCarousel;
