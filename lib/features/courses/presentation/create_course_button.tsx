import Link from "next/link";
import React from "react";
import { NavigationButton } from "../../../common/components/atoms";
import { BeakerIcon } from "../../../common/components/SvgIcons";

export default function CreataCourseButton() {
  return (
    <Link href="/creator/course/create">
      <NavigationButton className="px-28 py-5">
        <div className="bg-amber-400 w-32 h-32 rounded-full flex items-center justify-center ">
          <BeakerIcon className="text-amber-700 w-20 h-20 " />
        </div>
        <div className="mt-5">
          <h3 className="text-2xl font-bold">انشاء دورة</h3>
        </div>
      </NavigationButton>
    </Link>
  );
}
