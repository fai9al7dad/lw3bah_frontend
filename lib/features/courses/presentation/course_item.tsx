import Link from "next/link";
import React from "react";
import { NavigationButton } from "../../../common/components/atoms";
import { Course } from "../domain/entities/course";

export default function CourseItem({
  course,
  className,
}: {
  course: Course;
  className?: string;
}) {
  return (
    <Link href={`/course/${course.id}`}>
      <NavigationButton
        className={`text-sm px-5 flex flex-col  text-right ${className}`}
      >
        <div className="text-sm font-bold ">{course.title}</div>
        <div className="flex items-center  mt-2 text-xs ">
          <div className="">قبل شهر</div>
          <div className=" mr-2">عشرة الأف مشاهدة</div>
        </div>
      </NavigationButton>
    </Link>
  );
}
