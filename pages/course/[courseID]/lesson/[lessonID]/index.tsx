import { useRouter } from "next/router";
import React, { useRef } from "react";
import useSWR from "swr";
import { Wrapper } from "../../../../../lib/common/components/atoms";
import LessonLayout from "../../../../../lib/common/components/layouts/LessonLayout";
import { api_routes } from "../../../../../lib/common/data/data_sources/api_routes";
import { SlidesRepositery } from "../../../../../lib/features/slides/data/repositeries/SlidesRepositery";
import { DisplaySlideBasedOnType } from "../../../../../lib/features/slides/presentation/display_slide_based_on_type";
import { ViewSlides } from "../../../../../lib/features/slides/presentation/view_slides";

export default function index() {
  const router = useRouter();
  const { data, error } = useSWR(api_routes.get_slides, () =>
    SlidesRepositery.getAll(router.query.lessonID as string)
  );
  const [currentSlide, setCurrentSlide] = React.useState(0);

  if (!data) return <div>Loading...</div>;

  return (
    <LessonLayout
      slides={
        <ViewSlides
          slides={data}
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
          <DisplaySlideBasedOnType slide={data[currentSlide]} />
        </Wrapper>
      </div>
    </LessonLayout>
  );
}
