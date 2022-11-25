import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  TextAreaInput,
  TextInput,
} from "../../../common/components/atoms";

export default function CreateLesson() {
  return (
    <form action="">
      <TextInput label="اسم الدرس" className="mb-5" />
      <TextAreaInput label="وصف الدرس" className="mb-5" />
      <PrimaryButton className=" w-full ">انشاء + انتقال</PrimaryButton>
      <SecondaryButton className=" w-full mt-5">انشاء فقط</SecondaryButton>
    </form>
  );
}
