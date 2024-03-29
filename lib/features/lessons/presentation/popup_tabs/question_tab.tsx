import React from "react";
import {
  NavigationButton,
  SecondaryButton,
} from "../../../../common/components/atoms";
import { ImgPlaceholder } from "../../../../common/components/SvgIcons";
import { Slide } from "../../../slides/domain/entities/slide";
import {
  CONTENT_TABS_PREVIEW,
  QUESTIONS_TABS_PREVIEW,
} from "../../../slides/domain/entities/tabs_mappings";
import { useSlides } from "../../../slides/domain/usecases/use_slides";

export const QuestionsTab = () => {
  const slides = Slide.getQuestionSlides();
  const hover = "bg-neutral-50/100";
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);
  const { addSlide } = useSlides();
  return (
    <div className="grid grid-cols-2 gap-10 ">
      <div>
        {slides.map((slide, index) => (
          <NavigationButton
            onMouseEnter={() => setHighlightedIndex(index)}
            className={`w-full mb-5 py-2 px-5 rounded-lg flex items-center bg-white/100 ${
              "hover:" + hover
            } ${highlightedIndex == index ? hover : ""}`}
            key={slide}
            onClick={() => addSlide(slide)}
          >
            <div className="bg-gray-200 flex items-center justify-center rounded-lg w-10 h-10 ml-2">
              {index + 1}
            </div>
            {Slide.translateSlideTypeToArabic(slide)}
          </NavigationButton>
        ))}
      </div>
      {QUESTIONS_TABS_PREVIEW[highlightedIndex]}
    </div>
  );
};
