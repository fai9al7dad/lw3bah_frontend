import { createContext, useState } from "react";
import { KeyedMutator } from "swr";
import { Slide } from "../../../slides/domain/entities/slide";
import { useSlides } from "../../../slides/domain/usecases/use_slides";

export type LessonContextType = {
  slides: Slide[];
  currentSlideIndex: number;
  slideIsChanging: boolean;
  changeCurrentSlide: (index: number) => void;
  updateSlideOrder: (slides: Slide, items: Slide[]) => void;
  isUpdating: boolean;
  setIsUpdating: (value: boolean) => void;
  mutate: any;
  slidesState: Slide[];
  setSlidesState: React.Dispatch<React.SetStateAction<any>>;
  checkIsDirtySlide: (slide: Slide) => boolean;
};

export const LessonContext = createContext<LessonContextType>(null);

export const LessonProvider = ({ children }: { children: any }) => {
  const {
    slides,
    currentSlideIndex,
    slideIsChanging,
    changeCurrentSlide,
    updateSlideOrder,
    mutate,
    slidesState,
    setSlidesState,
    checkIsDirtySlide,
  } = useSlides();

  const [isUpdating, setIsUpdating] = useState(false);

  const value: LessonContextType = {
    slides,
    currentSlideIndex,
    slideIsChanging,
    changeCurrentSlide,
    updateSlideOrder,
    isUpdating,
    setIsUpdating,
    mutate,
    setSlidesState,
    slidesState,
    checkIsDirtySlide,
  };
  return (
    <LessonContext.Provider value={value}>{children}</LessonContext.Provider>
  );
};
