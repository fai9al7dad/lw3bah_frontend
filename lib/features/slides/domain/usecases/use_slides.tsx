import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { api_routes } from "../../../../common/data/data_sources/api_routes";
import { SlidesRepositery } from "../../data/repositeries/SlidesRepositery";
import { Slide } from "../entities/slide";

export const useSlides = () => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = React.useState<Slide | undefined>(
    new Slide()
  );
  const [slideIsChanging, setSlideIsChanging] = React.useState<boolean>(false);

  const {
    data: slides,
    error,
    isValidating,
    mutate,
  } = useSWR(
    api_routes.get_slides + "?lesson_id=" + router.query.lessonID,
    () => SlidesRepositery.getAll(router.query.lessonID as string),

    {
      revalidateOnFocus: false,
    }
  );

  const changeCurrentSlide = async (slide?: Slide) => {
    setSlideIsChanging(true);
    setCurrentSlide(slide);

    setSlideIsChanging(false);
  };

  const updateSlideOrder = async (slide: Slide, updatedSlides: Slide[]) => {
    await SlidesRepositery.updateOrder(slide);
    console.log({ updatedSlides });

    mutate(updatedSlides);
  };
  return {
    slides,
    error,
    isValidating,
    mutate,
    currentSlide,
    changeCurrentSlide,
    slideIsChanging,
    updateSlideOrder,
  };
};
