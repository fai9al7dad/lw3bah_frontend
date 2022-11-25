import React from "react";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";

export default function MediaWithDescriptionForm() {
  return (
    <form action="">
      <TextInput label="رابط المحتوى" className="mb-5" />
      <TextAreaInput label="وصف" className="mb-5" required={false} />
      <PrimaryButton className=" w-full">حفظ</PrimaryButton>
    </form>
  );
}
