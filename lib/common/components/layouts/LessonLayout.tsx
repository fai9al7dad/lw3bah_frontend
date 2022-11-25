import React from "react";
import { NavigationButton, PrimaryButton, SecondaryButton } from "../atoms";

export default function LessonLayout({
  children,
  slides,
}: {
  children: React.ReactNode;
  slides: React.ReactNode;
}) {
  return (
    <div>
      <div className="border-b border-netural-300 py-5 px-10 flex items-center justify-end">
        <SecondaryButton>عودة</SecondaryButton>
        <PrimaryButton className="ml-2">نشر</PrimaryButton>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-1 min-h-[87vh] overflow-y-auto border-r border-r-netural-300 relative">
          <div className="py-5 px-5">{slides}</div>

          <div className="absolute w-full px-5 bottom-10 ">
            <PrimaryButton className="w-full mb-5">إضافة سؤال</PrimaryButton>
            <PrimaryButton className="w-full">إضافة شريحة</PrimaryButton>
          </div>
        </div>
        <div className=" col-span-5 flex items-center justify-center">
          <div className="w-2/6">{children}</div>
        </div>
      </div>
    </div>
  );
}
