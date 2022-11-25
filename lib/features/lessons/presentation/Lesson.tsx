import React from "react";

export default function Lesson({ title }: { title: string }) {
  return (
    <div>
      <div className="text-sm font-bold ">{title}</div>
      <div className="flex items-center justify-end mt-2 text-xs ">
        <div className="">قبل شهر</div>
        <div className=" ml-2">عشرة الأف مشاهدة</div>
      </div>
    </div>
  );
}
