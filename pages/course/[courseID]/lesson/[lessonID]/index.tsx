import React, { useRef } from "react";
import {
  NavigationButton,
  Wrapper,
} from "../../../../../lib/common/components/atoms";
import LessonLayout from "../../../../../lib/common/components/layouts/LessonLayout";
import QuizForm from "../../../../../lib/features/questions/presentation/QuizForm";
import TrueFalseForm from "../../../../../lib/features/questions/presentation/TrueFalseForm";
import MediaWithDescriptionForm from "../../../../../lib/features/slides/presentation/MediaWithDescriptionForm";
import TitleBodyContentForm from "../../../../../lib/features/slides/presentation/TitleBodyContentForm";
const slides = [
  {
    id: 1,
    type: "title-body-content",
    title: "العنوان",
    body: "المحتوى",
  },
  {
    id: 2,

    type: "media-with-description",
    media: "https://picsum.photos/200/300",
    description: "الوصف",
  },
  {
    id: 3,
    type: "true-false",
    question: "السؤال",
    answers: [
      {
        text: "الإجابة الصحيحة",
        isCorrect: true,
      },
      {
        text: "الإجابة الخاطئة",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,

    type: "quiz",
    question: "السؤال",
    answers: [
      {
        text: "الإجابة الصحيحة",
        isCorrect: true,
      },
      {
        text: "الإجابة الخاطئة",
        isCorrect: false,
      },
      {
        text: "الإجابة الخاطئة",
        isCorrect: false,
      },
      {
        text: "الإجابة الخاطئة",
        isCorrect: false,
      },
    ],
  },
];
export default function index() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const ref = useRef(null);
  // detect if ref changed and concat class
  React.useEffect(() => {}, [currentSlide]);
  return (
    <LessonLayout
      slides={
        <div className="flex flex-col items-center">
          {slides.map((slide, i) => (
            <NavigationButton
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-full mb-2 ${
                currentSlide == i
                  ? "bg-neutral-300 shadow-secondary-button border-neutral-300"
                  : ""
              }`}
            >
              i
            </NavigationButton>
          ))}
        </div>
      }
    >
      <div
        className={`${
          true ? "opacity-1 translate-y-0" : "opacity-0 translate-y-28"
        } transition-all duration-150`}
      >
        <Wrapper>
          {slides[currentSlide].type === "title-body-content" && (
            <TitleBodyContentForm
              title={slides[currentSlide].title}
              body={slides[currentSlide].body}
            />
          )}
          {slides[currentSlide].type === "media-with-description" && (
            <MediaWithDescriptionForm
              media={slides[currentSlide].media}
              description={slides[currentSlide].description}
            />
          )}
          {slides[currentSlide].type === "true-false" && (
            <TrueFalseForm
              question={slides[currentSlide].question}
              answers={slides[currentSlide].answers}
            />
          )}
          {slides[currentSlide].type === "quiz" && (
            <QuizForm
              question={slides[currentSlide].question}
              answers={slides[currentSlide].answers}
            />
          )}
        </Wrapper>
      </div>
    </LessonLayout>
  );
}
