import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import { api_routes } from "../../../common/data/data_sources/api_routes";
import useSubmit from "../../../common/hooks/use_submit";
import useCourse from "../domain/usecases/useCourse";
import { CourseRepositery } from "../reposeteries/CourseRepositery";

export const UpdateCourseDetails = () => {
  const { course, update } = useCourse();

  const { send, errors, response, loading } = useSubmit();
  const [formState, setFormState] = React.useState({
    title: course?.title ?? "",
    description: course?.description ?? "",
  });

  useEffect(() => {
    setFormState({
      title: course?.title ?? "",
      description: course?.description ?? "",
    });
  }, [course]);

  const onChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    update({
      payload: {
        title: formState.title,
        description: formState.description,
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
      <PrimaryButton className=" w-full">تحديث </PrimaryButton>
    </form>
  );
};
