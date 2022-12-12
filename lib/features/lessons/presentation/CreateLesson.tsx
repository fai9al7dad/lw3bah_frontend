import { Router, useRouter } from "next/router";
import React from "react";
import { useSWRConfig } from "swr";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import useSubmit from "../../../common/hooks/use_submit";
import { useLesson } from "../domain/usecases/use_lesson";

export default function CreateLesson({
  sectionID,
  setShowModal,
}: {
  setShowModal?: (bool: boolean) => {};
  sectionID: any;
}) {
  const { send, loading } = useSubmit();
  const { create } = useLesson();
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
    setShowModal && setShowModal(false);
    if (loading) return;
    e.preventDefault();

    const payload = {
      ...formState,
      section_id: sectionID,
    };
    create({ payload });
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
      <PrimaryButton disabled={loading} className=" w-full ">
        انشاء
      </PrimaryButton>
      {/* <SecondaryButton className=" w-full mt-5">انشاء</SecondaryButton> */}
    </form>
  );
}
