import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { api_routes } from "../../../../common/data/data_sources/api_routes";
import useSubmit from "../../../../common/hooks/use_submit";
import { SlidesRepositery } from "../../data/repositeries/SlidesRepositery";
import { Slide } from "../entities/slide";

export const useSlides = () => {
  const router = useRouter();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState<number>(0);
  const [slideIsChanging, setSlideIsChanging] = React.useState<boolean>(false);

  const [slidesState, setSlidesState] = React.useState<Slide[]>([]);

  const {
    data: slides,
    error,
    isValidating,
    mutate,
  } = useSWR(
    api_routes.get_slides + "?lesson_id=" + router.query.lessonID,
    () => SlidesRepositery.getAll(router.query.lessonID as string),

    {
      onSuccess: (data) => {
        setSlidesState(data);
      },
      revalidateOnFocus: false,
    }
  );

  const { send } = useSubmit();
  const changeCurrentSlide = async (index?: number) => {
    setSlideIsChanging(true);
    setCurrentSlideIndex(index);

    setSlideIsChanging(false);
  };

  const updateSlideOrder = async (slide: Slide, updatedSlides: Slide[]) => {
    mutate([...updatedSlides], {
      revalidate: false,
    });

    send({
      sendFunction: () => {
        return SlidesRepositery.updateOrder(slide);
      },
      onSuccess: () => {
        mutate([...updatedSlides], {
          revalidate: true,
        });
      },
    });
  };

  const updateContent = async (slide: Slide) => {
    send({
      sendFunction: () => {
        return SlidesRepositery.updateContent(slide);
      },
      onSuccess: () => {
        mutate();
      },
    });
  };

  const updateQuestion = async (slide: Slide) => {
    send({
      sendFunction: () => {
        return SlidesRepositery.updateQuestion(slide);
      },
      onSuccess: () => {
        mutate();
      },
    });
  };

  const deleteSlide = async (slide: Slide) => {
    send({
      sendFunction: () => {
        return SlidesRepositery.delete(slide);
      },
      onSuccess: () => {
        mutate();
        // change current slide to the next slide
        if (slides !== undefined) {
          const index = slides?.findIndex((s) => s.id === slide.id);
          if (index !== undefined && index !== -1) {
            changeCurrentSlide(index + 1);
          }

          // if there is no next slide, change current slide to the previous slide
          if (index === slides?.length - 1) {
            changeCurrentSlide(index - 1);
          }
        }

        // if there is no slides, change current slide to undefined
        if (slides?.length === 1) {
          changeCurrentSlide(undefined);
        }
      },
    });
  };

  const addSlide = async (type: string) => {
    const apiType = Slide.api_slide_types.get(type) as string;

    if (type === Slide.MEDIA_CONTENT || type === Slide.TEXT_CONTENT) {
      send({
        sendFunction: () => {
          return SlidesRepositery.createContent({
            lessonID: router.query.lessonID as string,
            type: apiType,
          });
        },
        onSuccess: (data) => {
          mutate();
        },
      });
    } else {
      send({
        sendFunction: () => {
          return SlidesRepositery.createQuestion({
            lessonID: router.query.lessonID as string,
            type: apiType,
          });
        },
        onSuccess: (data) => {
          mutate();
        },
      });
    }
  };
  return {
    slides,
    error,
    isValidating,
    mutate,
    currentSlideIndex,
    changeCurrentSlide,
    slideIsChanging,
    updateSlideOrder,
    updateContent,
    deleteSlide,
    slidesState,
    setSlidesState,
    updateQuestion,
    addSlide,
  };
};
