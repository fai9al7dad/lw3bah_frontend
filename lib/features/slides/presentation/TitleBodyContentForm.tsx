import React, { useContext } from "react";
import { toast } from "react-toastify";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import { LessonContext } from "../../lessons/domain/usecases/lesson_context";
import { Slide } from "../domain/entities/slide";
import { useSlides } from "../domain/usecases/use_slides";

export default function TitleBodyContentForm() {
  const { updateContent } = useSlides();
  const { slidesState, currentSlideIndex, setSlidesState } =
    useContext(LessonContext);

  const onChange = (event: any) => {
    setSlidesState(
      slidesState.map((slide, index) => {
        if (index === currentSlideIndex) {
          return {
            ...slide,
            isDirty: true,
            [event.target.name]: event.target.value,
          };
        }
        return slide;
      })
    );

    if (event.target.value.length === 255) {
      toast.warning("نقترح ان لا تزيد الحروف عن 255 حرف لتسهيل القراءة");
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();

    updateContent(
      new Slide({
        id: slidesState[currentSlideIndex]?.id,
        order: slidesState[currentSlideIndex]?.order,
        slideType: slidesState[currentSlideIndex]?.slideType,
        title: slidesState[currentSlideIndex].title,
        description: slidesState[currentSlideIndex].description,
      })
    );
  };
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        onChange={onChange}
        name="title"
        value={slidesState[currentSlideIndex].title ?? ""}
        label="عنوان الشريحة"
        className="mb-5"
        required={false}
      />
      <TextAreaInput
        onChange={onChange}
        name="description"
        rows={10}
        value={slidesState[currentSlideIndex].description ?? ""}
        label="الوصف"
        className="mb-5"
      />
      <PrimaryButton className=" w-full">حفظ</PrimaryButton>
    </form>
  );
}
