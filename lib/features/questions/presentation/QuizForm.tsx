import React, { useContext } from "react";
import { toast } from "react-toastify";
import {
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../../../common/components/atoms";
import Modal from "../../../common/components/modal";
import { LessonContext } from "../../lessons/domain/usecases/lesson_context";
import { Answer } from "../../slides/domain/entities/answer";
import { Slide } from "../../slides/domain/entities/slide";
import { useSlides } from "../../slides/domain/usecases/use_slides";
import MarkedQuestion from "./MarkedQuestion";
interface MocTypes {
  title: string;
  answers: Answer[];
}
export default function QuizForm() {
  const { updateQuestion, deleteSlide } = useSlides();
  const { slidesState, currentSlideIndex, setSlidesState } =
    useContext(LessonContext);
  // update form state on init
  React.useEffect(() => {
    setSlidesState(
      slidesState.map((slide, index) => {
        if (index === currentSlideIndex) {
          return {
            ...slide,
            title: slide.title !== undefined ? slide.title : "",
            answers: slide.answers!.length
              ? slide.answers
              : [
                  new Answer({
                    body: "الاجابة الاولى",
                    isCorrect: true,
                  }),
                  new Answer({
                    body: "الاجابة الثانية",
                    isCorrect: false,
                  }),

                  new Answer({
                    body: "الاجابة الثالثة",
                    isCorrect: false,
                  }),

                  new Answer({
                    body: "الاجابة الرابعة",
                    isCorrect: false,
                  }),
                ],
          };
        }
        return slide;
      })
    );
  }, []);
  const onChange = (event: any) => {
    setSlidesState(
      slidesState.map((slide, index) => {
        if (index === currentSlideIndex) {
          return {
            ...slide,
            [event.target.name]: event.target.value,
          };
        }
        return slide;
      })
    );
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    updateQuestion(
      new Slide({
        id: slidesState[currentSlideIndex]?.id,
        order: slidesState[currentSlideIndex]?.order,
        slideType: slidesState[currentSlideIndex]?.slideType,
        title: slidesState[currentSlideIndex].title,
        answers: slidesState[currentSlideIndex].answers,
      })
    );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextInput
          onChange={onChange}
          name="title"
          value={slidesState[currentSlideIndex].title}
          label="عنوان السؤال"
        />
        {slidesState[currentSlideIndex].answers.map((item, i) => (
          <MarkedQuestion
            onClick={(e) => {
              e.preventDefault();
              // clear all correct answers
              const newAnswers = [...slidesState[currentSlideIndex].answers];
              newAnswers.forEach((item) => (item.isCorrect = false));
              // set the clicked answer as correct
              newAnswers[i].isCorrect = true;
              setSlidesState(
                slidesState.map((slide, index) => {
                  if (index === currentSlideIndex) {
                    return {
                      ...slide,
                      answers: newAnswers,
                    };
                  }
                  return slide;
                })
              );
            }}
            key={i}
            className={"mt-2"}
            isCorrect={item.isCorrect!}
          >
            <TextInput
              name={item.body}
              value={slidesState[currentSlideIndex].answers[i].body}
              onChange={(e: any) => {
                const newAnswers = [...slidesState[currentSlideIndex].answers];
                newAnswers[i].body = e.target.value;
                setSlidesState(
                  slidesState.map((slide, index) => {
                    if (index === currentSlideIndex) {
                      return {
                        ...slide,
                        answers: newAnswers,
                      };
                    }
                    return slide;
                  })
                );
              }}
            />
          </MarkedQuestion>
        ))}
        <PrimaryButton className="mt-5 w-full">حفظ</PrimaryButton>
      </form>
    </div>
  );
}
