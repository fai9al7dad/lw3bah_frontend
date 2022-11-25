import React from "react";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
  Wrapper,
} from "../../../common/components/atoms";

export default function CreateCourse() {
  const onSubmit = () => {
    console.log("submitted");
  };
  return (
    <form action="">
      <TextInput label="اسم الدورة" className="mb-5" />
      <TextAreaInput label="وصف الدورة" className="mb-5" />
      <PrimaryButton className=" w-full">انشاء</PrimaryButton>
    </form>
  );
}
