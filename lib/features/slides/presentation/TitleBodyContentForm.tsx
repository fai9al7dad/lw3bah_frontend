import React from "react";
import {
  PrimaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";
import { Slide } from "../domain/entities/slide";

export default function TitleBodyContentForm({ slide }: { slide: Slide }) {
  console.log({ slide });

  return (
    <form action="">
      <TextInput label="عنوان الشريحة" className="mb-5" required={false} />
      <TextAreaInput label="الوصف" className="mb-5" />
      <PrimaryButton className=" w-full">حفظ</PrimaryButton>
    </form>
  );
}
