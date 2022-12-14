import React from "react";
import { Lesson } from "../domain/entities/lesson";

export default function ViewLesson({ lesson }: { lesson: Lesson }) {
  return (
    <div className="px-5 text-right">
      <div className="text-sm font-bold ">{lesson.title}</div>
      <div className="flex items-center  mt-2 text-xs ">
        <div className="">{lesson.createdAt}</div>
        {/* <div className=" mr-2">عشرة الأف مشاهدة</div> */}
      </div>
    </div>
  );
}
