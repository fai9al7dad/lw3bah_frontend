import { useContext } from "react";
import { Lesson } from "../../lessons/domain/entities/lesson";
import { LessonContext } from "../../lessons/domain/usecases/lesson_context";
import QuizForm from "../../questions/presentation/QuizForm";
import TrueFalseForm from "../../questions/presentation/TrueFalseForm";
import { Slide } from "../domain/entities/slide";
import MediaWithDescriptionForm from "./MediaWithDescriptionForm";
import TitleBodyContentForm from "./TitleBodyContentForm";

export const DisplaySlideBasedOnType = () => {
  const { currentSlideIndex, slides } = useContext(LessonContext);
  if (!slides) return <div>Not slide</div>;
  if (!slides[currentSlideIndex]) return <div>Not slide</div>;
  switch (slides[currentSlideIndex].slideType) {
    case Slide.TEXT_CONTENT:
      return <TitleBodyContentForm />;
    case Slide.MEDIA_CONTENT:
      return <MediaWithDescriptionForm />;
    case Slide.TRUE_FALSE_QUESTION:
      return <TrueFalseForm />;
    case Slide.MULTIPLE_CHOICE_QUESTION:
      return <QuizForm />;

    default:
      return <div>قم بإختيار شريحة أو أنشئ للبدأ</div>;
  }
};
