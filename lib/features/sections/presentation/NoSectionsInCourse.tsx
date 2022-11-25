import React from "react";
import { PrimaryButton } from "../../../common/components/atoms";
import CourseLayout from "../../../common/components/layouts/CourseLayout";
import Modal from "../../../common/components/modal";
import CreateSection from "./CreateSection";

export default function NoSectionsInCourse() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Modal
        trigger={<PrimaryButton>ابدا بإضافة أول قسم</PrimaryButton>}
        title="asdf"
      >
        <CreateSection />
      </Modal>
    </div>
  );
}
