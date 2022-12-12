import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import { api_routes } from "../../../common/data/data_sources/api_routes";
import useSubmit from "../../../common/hooks/use_submit";
import { CourseRepositery } from "../reposeteries/CourseRepositery";

export const UpdateCourseDetails = () => {
  const router = useRouter();
  const { data, error, isValidating } = useSWR(
    api_routes.get_course + `/${router.query.courseID}`,
    () => CourseRepositery.get(router.query.courseID as string)
  );

  const { send, errors, response, loading } = useSubmit();
  const [formState, setFormState] = React.useState({
    title: data?.title ?? "",
    description: data?.description ?? "",
  });

  const onChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();

    send({
      sendFunction: () => {
        return CourseRepositery.update({
          title: formState.title,
          description: formState.description,
        });
      },
      onSuccess: (res) => {
        // router.push("/course/" + res.id);
      },
    });
  };
  if (error) return <div>error</div>;
  if (isValidating) return <div>loading</div>;
  if (!data) return <div>loading</div>;

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
