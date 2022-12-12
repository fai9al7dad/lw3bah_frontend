import React from "react";
import { useSWRConfig } from "swr";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import { api_routes } from "../../../common/data/data_sources/api_routes";
import useSubmit from "../../../common/hooks/use_submit";
import { SectionsRepositery } from "../data/repositeries/sections_repositery";
import { Section } from "../entities/section";

export default function CreateSection({
  setShowModal,
  courseID,
}: {
  setShowModal?: (bool: boolean) => {};
  courseID: any;
}) {
  const { send, loading } = useSubmit();
  const { mutate } = useSWRConfig();
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
    setShowModal && setShowModal(false);
    if (loading) return;
    const payload = {
      title: formState.title,
      courseID: courseID,
    };
    const sectionsRepo = new SectionsRepositery();

    send({
      sendFunction: () => sectionsRepo.create(new Section({ ...payload })),
      onSuccess: (res) => {
        mutate(api_routes.get_sections + "/" + courseID);
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
