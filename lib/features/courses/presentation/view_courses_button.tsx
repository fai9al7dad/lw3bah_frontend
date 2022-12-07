import React from "react";
import { NavigationButton } from "../../../common/components/atoms";
import { AcademicCapIcon } from "../../../common/components/SvgIcons";

export default function ViewCoursesButton({
  className,
}: {
  className?: string;
}) {
  return (
    <a href="/courses" className={className}>
      <NavigationButton className="px-28 py-5">
        <div className="bg-amber-400 w-32 h-32 rounded-full flex items-center justify-center ">
          <AcademicCapIcon className="text-amber-700 w-20 h-20 " />
        </div>
        <div className="mt-5">
          <h3 className="text-2xl font-bold">عرض دوراتي</h3>
        </div>
      </NavigationButton>
    </a>
  );
}
