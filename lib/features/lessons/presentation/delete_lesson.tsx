import React from "react";
import { toast } from "react-toastify";
import {
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../../../common/components/atoms";
import { useLesson } from "../domain/usecases/use_lesson";

export const DeleteLesson = ({ setShowModal }: { setShowModal?: any }) => {
  const { lesson, del } = useLesson();
  const [title, setTitle] = React.useState<string>("");
  return (
    <div className="text-center">
      <p className="text-xl font-bold mb-2">هل أنت متأكد؟</p>
      <p className="text-sm text-netural-500 mb-10">
        سيتم حذف الدرس بشكل نهائي
      </p>
      <TextInput
        className="w-full"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        label="اكتب اسم الدرس للتأكيد"
      />
      <div className="text-sm mt-2 mb-20 text-right">
        اسم الدرس: {lesson?.title}
      </div>
      <div className="flex justify-center mt-5">
        <SecondaryButton
          className="text-sm mx-2"
          onClick={() => setShowModal(false)}
        >
          إلغاء
        </SecondaryButton>
        <PrimaryButton
          className="text-sm mx-2"
          onClick={() => {
            if (lesson?.title !== title)
              return toast.error("الرجاء كتابة اسم الدرس بشكل صحيح");

            del();
          }}
        >
          حذف
        </PrimaryButton>
      </div>
    </div>
  );
};
