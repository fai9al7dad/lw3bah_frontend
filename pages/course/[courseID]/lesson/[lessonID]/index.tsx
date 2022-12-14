import React from "react";
import { Wrapper } from "../../../../../lib/common/components/atoms";
import LoadingSpinner from "../../../../../lib/common/components/atoms/loading_spinner";
import LessonLayout from "../../../../../lib/common/components/layouts/LessonLayout";
import { useAuth } from "../../../../../lib/features/auth/domain/usecases/use_auth";
import { useSlides } from "../../../../../lib/features/slides/domain/usecases/use_slides";
import { DisplaySlideBasedOnType } from "../../../../../lib/features/slides/presentation/display_slide_based_on_type";
import { ViewSlides } from "../../../../../lib/features/slides/presentation/view_slides";

export default function index() {
  const {
    slides,
    currentSlide,
    slideIsChanging,
    changeCurrentSlide,
    updateSlideOrder,
  } = useSlides();
  const {} = useAuth({
    middleware: "auth",
  });

  React.useEffect(() => {
    changeCurrentSlide(slides?.[0]);
  }, []);
  if (!slides)
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <LessonLayout
      slides={
        <ViewSlides
          changeCurrentSlide={changeCurrentSlide}
          currentSlide={currentSlide}
          updateSlideOrder={updateSlideOrder}
          slides={slides}
        />
      }
    >
      <div
        className={`${
          true ? "opacity-1 translate-y-0" : "opacity-0 translate-y-28"
        } transition-all duration-150`}
      >
        <Wrapper>
          {slideIsChanging ? (
            <div>...</div>
          ) : (
            <DisplaySlideBasedOnType slide={currentSlide} />
          )}
        </Wrapper>
      </div>
    </LessonLayout>
  );
}
