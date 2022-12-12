import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { PrimaryButton } from "../../../common/components/atoms";
import Modal from "../../../common/components/modal";
import { api_routes } from "../../../common/data/data_sources/api_routes";
import { SectionsRepositery } from "../data/repositeries/sections_repositery";
import CreateSection from "./CreateSection";
import NoSectionsInCourse from "./NoSectionsInCourse";
import Section from "./Section";

export default function ViewSections() {
  const router = useRouter();
  const { error, data, mutate, isValidating } = useSWR(
    api_routes.get_sections + "/" + router.query.courseID,
    () => SectionsRepositery.get(router.query.courseID as string)
  );

  if (error) {
    return <div>failed to load</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  if (data?.length === 0) {
    return <NoSectionsInCourse />;
  }

  return (
    <div>
      {data?.map((section) => (
        <Section key={section.id} section={section} className="mb-5" />
      ))}
      <Modal
        title="إضافة قسم"
        trigger={
          <PrimaryButton className="text-xs mt-5">إضافة قسم</PrimaryButton>
        }
      >
        <CreateSection courseID={router.query.courseID} />
      </Modal>
    </div>
  );
}
