import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import { api_routes } from "../../../common/data/data_sources/api_routes";
import useSubmit from "../../../common/hooks/use_submit";
import { LessonsRepositery } from "../data/repositeries/lessons_repositery";

export default function CreateLesson({ sectionID }: { sectionID: any }) {
  const { send } = useSubmit();

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
    e.preventDefault();
    const lessonsRepo = new LessonsRepositery();
    const payload = {
      ...formState,
      section_id: sectionID,
    };
    send({
      sendFunction: () => lessonsRepo.create({ ...payload }),
      onSuccess: (res) => {
        console.log(res);
      },
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        name="title"
        value={formState.title}
        onChange={onChange}
        label="اسم الدرس"
        className="mb-5"
      />
      <TextAreaInput
        name="description"
        value={formState.description}
        onChange={onChange}
        label="وصف الدرس"
        className="mb-5"
      />
      <PrimaryButton className=" w-full ">انشاء + انتقال</PrimaryButton>
      {/* <SecondaryButton className=" w-full mt-5">انشاء فقط</SecondaryButton> */}
    </form>
  );
}
