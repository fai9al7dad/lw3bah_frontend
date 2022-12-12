import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
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
    if (loading) return;

    e.preventDefault();
    send({
      sendFunction: () => {
        return CourseRepositery.create({
          title: formState.title,
          description: formState.description,
        });
      },
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
      {loading ? (
        <div>loading...</div>
      ) : (
        <PrimaryButton disabled={loading} className=" w-full">
          انشاء{" "}
        </PrimaryButton>
      )}
    </form>
  );
}
