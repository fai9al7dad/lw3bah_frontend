import { useRouter } from "next/router";
import React from "react";
import { PrimaryButton } from "../../../common/components/atoms";
import Modal from "../../../common/components/modal";
import CreateSection from "./CreateSection";
import Section from "./Section";

export default function ViewSections() {
  const router = useRouter();
  return (
    <div>
      <Section title="asdf" id={24} />
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
