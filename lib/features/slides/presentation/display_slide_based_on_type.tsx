import QuizForm from "../../questions/presentation/QuizForm";
import TrueFalseForm from "../../questions/presentation/TrueFalseForm";
import { Slide } from "../domain/entities/slide";
import MediaWithDescriptionForm from "./MediaWithDescriptionForm";
import TitleBodyContentForm from "./TitleBodyContentForm";

export const DisplaySlideBasedOnType = ({ slide }: { slide?: Slide }) => {
  if (!slide) return <div>Not slide</div>;
  console.log({ slide });

  switch (slide.slideType) {
    case Slide.TEXT_CONTENT:
      return <TitleBodyContentForm slide={slide} />;
    case Slide.MEDIA_CONTENT:
      return <MediaWithDescriptionForm slide={slide} />;
    case Slide.TRUE_FALSE_QUESTION:
      return <TrueFalseForm slide={slide} />;
    case Slide.MULTIPLE_CHOICE_QUESTION:
      return <QuizForm slide={slide} />;

    default:
      return <div>قم بإختيار شريحة أو أنشئ للبدأ</div>;
  }
};
