import React from "react";
import { PrimaryButton } from "../../../common/components/atoms";
import Modal from "../../../common/components/modal";
import CreateSection from "./CreateSection";
import Section from "./Section";

export default function ViewSections() {
  return (
    <div>
      <Section title="asdf" />
      <Modal
        title="إضافة قسم"
        trigger={
          <PrimaryButton className="text-xs mt-5">إضافة قسم</PrimaryButton>
        }
      >
        <CreateSection />
      </Modal>
    </div>
  );
}
