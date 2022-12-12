import { useRouter } from "next/router";
import React, { useRef } from "react";
import { Wrapper } from "../../../../../lib/common/components/atoms";
import LessonLayout from "../../../../../lib/common/components/layouts/LessonLayout";
import { useSlides } from "../../../../../lib/features/slides/domain/usecases/use_slides";
import { DisplaySlideBasedOnType } from "../../../../../lib/features/slides/presentation/display_slide_based_on_type";
import { ViewSlides } from "../../../../../lib/features/slides/presentation/view_slides";

export default function index() {
  const { slides, isValidating } = useSlides();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  if (isValidating) return <div>Loading...</div>;
  if (!slides) return <div>Loading...</div>;

  return (
    <LessonLayout
      slides={
        <ViewSlides
          slides={slides}
          currentSlideIndex={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      }
    >
      <div
        className={`${
          true ? "opacity-1 translate-y-0" : "opacity-0 translate-y-28"
        } transition-all duration-150`}
      >
        <Wrapper>
          <DisplaySlideBasedOnType slide={slides[currentSlide]} />
        </Wrapper>
      </div>
    </LessonLayout>
  );
}
