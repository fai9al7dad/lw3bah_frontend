import React from "react";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";

export default function CreateSection() {
  return (
    <form action="">
      <TextInput label="اسم القسم" className="mb-5" />
      <PrimaryButton className=" w-full">انشاء</PrimaryButton>
    </form>
  );
}
