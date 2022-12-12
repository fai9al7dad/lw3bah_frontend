import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { PrimaryButton } from "../../../common/components/atoms";
import Modal from "../../../common/components/modal";
import { api_routes } from "../../../common/data/data_sources/api_routes";
import { SectionsRepositery } from "../data/repositeries/sections_repositery";
import { Section as SectionEntity } from "../domain/entities/section";
import useSection from "../domain/usecases/use_section";
import CreateSection from "./CreateSection";
import NoSectionsInCourse from "./NoSectionsInCourse";
import Section from "./Section";

export default function ViewSections() {
  const router = useRouter();
  const { sections, error } = useSection();

  if (error) {
    return <div>failed to load</div>;
  }

  if (!sections) {
    return <div>loading...</div>;
  }

  if (sections?.length === 0) {
    return <NoSectionsInCourse />;
  }

  return (
    <div>
      {sections?.map((section: SectionEntity) => (
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
