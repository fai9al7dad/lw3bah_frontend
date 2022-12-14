import React from "react";
import {
  CreateAbleSelectInput,
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import useSubmit from "../../../common/hooks/use_submit";
import useCourse from "../domain/usecases/useCourse";
import Creatable, { useCreatable } from "react-select/creatable";
import { publishedTags } from "../../../common/data/data_sources/published_tags";

export default function CreateCourse() {
  const { loading } = useSubmit();
  const { create } = useCourse();
  const [formState, setFormState] = React.useState({
    title: "",
    description: "",
    tags: [],
  });
  const onChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (e: any) => {
    if (formState.tags.length === 0)
      return alert("يجب اختيار تصنيف واحد على الاقل");
    if (loading) return;

    e.preventDefault();
    create({
      payload: { ...formState },
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
      <CreateAbleSelectInput
        isMulti
        isClearable
        options={publishedTags}
        onChange={(e: any) => {
          const tags = e.map((tag: any) => tag.value);
          setFormState({
            ...formState,
            tags: tags,
          });
        }}
        name="tags"
        label="التصنيفات"
      />
      <div className="text-xs mb-5 mt-2">
        مطلوب تصنيف واحد على الأقل، يمكن التعديل عليه لاحقا
      </div>

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
