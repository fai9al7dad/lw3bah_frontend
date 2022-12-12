import { useRouter } from "next/router";
import React from "react";
import { PrimaryButton } from "../../../common/components/atoms";
import Modal from "../../../common/components/modal";
import CreateSection from "./CreateSection";

export default function NoSectionsInCourse() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center ">
      <Modal
        trigger={<PrimaryButton>ابدا بإضافة أول قسم</PrimaryButton>}
        title="إضافة قسم"
      >
        <CreateSection courseID={router.query.courseID} />
      </Modal>
    </div>
  );
}
