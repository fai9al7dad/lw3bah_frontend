import Link from "next/link";
import React from "react";
import { NavigationButton } from "../../../common/components/atoms";

export default function CourseItem({ title }: { title: string }) {
  return (
    <Link href="/course/12">
      <NavigationButton className="text-sm px-5 flex flex-col justify-end text-right">
        <div className="text-sm font-bold ">{title}</div>
        <div className="flex items-center justify-end mt-2 text-xs ">
          <div className="">قبل شهر</div>
          <div className=" ml-2">عشرة الأف مشاهدة</div>
        </div>
      </NavigationButton>
    </Link>
  );
}
