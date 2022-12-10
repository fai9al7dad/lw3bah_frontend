import { useRouter } from "next/router";
import React from "react";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import useSubmit from "../../../common/hooks/use_submit";
import { Course } from "../domain/entities/course";
import { CourseRepositery } from "../reposeteries/CourseRepositery";

export default function CreateCourse() {
  const router = useRouter();
  const { send, errors, response, loading } = useSubmit();
  const [formState, setFormState] = React.useState({
    title: "",
    description: "",
  });
  const onChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (e: any) => {
    const courseRepo = new CourseRepositery();
    e.preventDefault();
    send({
      sendFunction: () => courseRepo.create(new Course({ ...formState })),
      onSuccess: (res) => {
        router.push("/course/" + res.id);
      },
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        value={formState.title}
        onChange={onChange}
        name="title"
        label="اسم الدورة"
        className="mb-5"
      />
      <TextAreaInput
        value={formState.description}
        onChange={onChange}
        name="description"
        label="وصف الدورة"
        className="mb-5"
      />
      <PrimaryButton className=" w-full">انشاء</PrimaryButton>
    </form>
  );
}
