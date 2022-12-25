import React from "react";
import { PrimaryButton, TextInput } from "../../../common/components/atoms";
import { Answer } from "../../slides/domain/entities/answer";
import { Slide } from "../../slides/domain/entities/slide";
import { useSlides } from "../../slides/domain/usecases/use_slides";
import MarkedQuestion from "./MarkedQuestion";

interface TrueFalseFormProps {
  title: string;
  answers: Answer[] | undefined;
}

export default function TrueFalseForm({ slide }: { slide: Slide }) {
  const { updateQuestion } = useSlides();
  const [formState, setFormState] = React.useState<TrueFalseFormProps>({
    title: "",
    answers: [],
  });

  // update form state on init
  React.useEffect(() => {
    setFormState({
      title: slide.title !== undefined ? slide.title : "",
      answers: slide.answers!.length
        ? slide.answers
        : [
            new Answer({ body: "صح", isCorrect: true }),
            new Answer({ body: "خطأ", isCorrect: false }),
          ],
    });
  }, [slide]);
  const onChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();

    updateQuestion(
      new Slide({
        id: slide?.id,
        order: slide?.order,
        slideType: slide?.slideType,
        title: formState.title,
        answers: formState.answers,
      })
    );
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextInput
          onChange={onChange}
          name="title"
          value={formState.title}
          label="عنوان السؤال"
        />
        {formState.answers?.map((item, i) => (
          <MarkedQuestion
            onClick={(e) => {
              e.preventDefault();
              // clear all correct answers
              const newAnswers = [...formState.answers!];
              newAnswers.forEach((item) => (item.isCorrect = false));
              // set the clicked answer as correct
              newAnswers[i].isCorrect = true;
              setFormState({ ...formState, answers: newAnswers });
            }}
            key={i}
            className={"mt-2"}
            isCorrect={item.isCorrect!}
          >
            {item.body}
            {/* <TextInput
              name={item.body}
              value={formState.answers![i].body}
              onChange={(e: any) => {
                const newAnswers = [...formState.answers!];
                newAnswers[i].body = e.target.value;
                setFormState({ ...formState, answers: newAnswers });
              }}
            /> */}
          </MarkedQuestion>
        ))}
        <PrimaryButton className=" w-full mt-5">حفظ</PrimaryButton>
      </form>
    </div>
  );
}
