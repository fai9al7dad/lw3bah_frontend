import React from "react";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";

export default function TitleBodyContentForm() {
  return (
    <form action="">
      <TextInput label="عنوان الشريحة" className="mb-5" required={false} />
      <TextAreaInput label="الوصف" className="mb-5" />
      <PrimaryButton className=" w-full">حفظ</PrimaryButton>
    </form>
  );
}
