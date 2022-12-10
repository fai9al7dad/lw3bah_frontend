import React from "react";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import { api_routes } from "../../../common/data/data_sources/api_routes";
import useSubmit from "../../../common/hooks/use_submit";
import { SectionsRepositery } from "../data/repositeries/sections_repositery";
import { Section } from "../entities/section";

export default function CreateSection({ courseID }: { courseID: any }) {
  const { send, loading } = useSubmit();
  const [formState, setFormState] = React.useState({
    title: "",
  });

  const onChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (loading) return;

    const payload = {
      title: formState.title,
      courseID: courseID,
    };
    const sectionsRepo = new SectionsRepositery();

    send({
      sendFunction: () => sectionsRepo.create(new Section({ ...payload })),
      onSuccess: (res) => {
        // refresh the page
        window.location.reload();
      },
    });
  };
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        name="title"
        value={formState.title}
        onChange={onChange}
        label="اسم القسم"
        className="mb-5"
      />

      <PrimaryButton
        className=" w-full"
        disabled={loading}
        onClick={() => onSubmit}
      >
        انشاء
      </PrimaryButton>
    </form>
  );
}
