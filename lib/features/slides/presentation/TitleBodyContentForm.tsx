import React from "react";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import { Slide } from "../domain/entities/slide";
import { useSlides } from "../domain/usecases/use_slides";

export default function TitleBodyContentForm({ slide }: { slide: Slide }) {
  const { updateContent } = useSlides();
  const [formState, setFormState] = React.useState({
    title: "",
    description: "",
  });

  // update form state on init
  React.useEffect(() => {
    setFormState({
      title: slide.title !== undefined ? slide.title : "",
      description: slide.description !== undefined ? slide.description : "",
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

    updateContent(
      new Slide({
        id: slide?.id,
        order: slide?.order,
        slideType: slide?.slideType,
        title: formState.title,
        description: formState.description,
      })
    );
  };
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        onChange={onChange}
        name="title"
        value={formState.title}
        label="عنوان الشريحة"
        className="mb-5"
        required={false}
      />
      <TextAreaInput
        onChange={onChange}
        name="description"
        rows={10}
        value={formState.description}
        label="الوصف"
        className="mb-5"
      />
      <PrimaryButton className=" w-full">حفظ</PrimaryButton>
    </form>
  );
}
