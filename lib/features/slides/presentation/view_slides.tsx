import React from "react";
import { NavigationButton } from "../../../common/components/atoms";
import { Slide } from "../domain/entities/slide";

export const ViewSlides = ({
  slides,
  currentSlideIndex,
  setCurrentSlide,
}: {
  slides: Slide[];
  currentSlideIndex: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}) => {
  if (slides.length === 0) return <div>There are no slides</div>;
  return (
    <div className="flex flex-col items-center">
      {slides.map((slide: Slide, i: number) => (
        <NavigationButton
          key={i}
          onClick={() => setCurrentSlide(i)}
          className={`w-full mb-2 ${
            currentSlideIndex == i
              ? "bg-neutral-300 shadow-secondary-button border-neutral-300"
              : ""
          }`}
        >
          i
        </NavigationButton>
      ))}
    </div>
  );
};
