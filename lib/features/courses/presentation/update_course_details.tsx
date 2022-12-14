import { useRouter } from "next/router";
import React, { useEffect } from "react";
import useSWR from "swr";
import {
  CreateAbleSelectInput,
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import LoadingSpinner from "../../../common/components/atoms/loading_spinner";
import { api_routes } from "../../../common/data/data_sources/api_routes";
import { publishedTags } from "../../../common/data/data_sources/published_tags";
import useSubmit from "../../../common/hooks/use_submit";
import useCourse from "../domain/usecases/useCourse";
import { CourseRepositery } from "../reposeteries/CourseRepositery";

export const UpdateCourseDetails = () => {
  const { course, update, isValidating } = useCourse();
  const router = useRouter();
  const [formState, setFormState] = React.useState({
    title: course?.title ?? "",
    description: course?.description ?? "",
    tags: course?.tags ?? [],
  });

  useEffect(() => {
    setFormState({
      title: course?.title ?? "",
      description: course?.description ?? "",
      tags: course?.tags ?? [],
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
      payload: { ...formState, id: router.query.courseID as string },
    });
  };

  if (isValidating) {
    return <LoadingSpinner />;
  }
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
        defaultValue={formState.tags.map((tag: any) => ({
          value: tag,
          label: tag,
        }))}
        onChange={(e: any) => {
          const tags = e.map((tag: any) => tag.value);
          setFormState({
            ...formState,
            tags: tags,
          });
        }}
        name="tags"
        label="التصنيفات"
        className="mb-5"
      />
      <PrimaryButton className=" w-full">تحديث </PrimaryButton>
    </form>
  );
};
