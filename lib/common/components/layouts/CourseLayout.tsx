import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CreateCourse from "../../../features/courses/presentation/CreateCourse";
import AnimatedSidebar from "../AnimatedSidebar";
import { NavigationButton, SecondaryButton } from "../atoms";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div className="">
      <div className="border-b border-netural-300 py-5 px-10 flex items-center justify-between">
        <NavigationButton onClick={() => router.back()} className="px-10">
          العودة
        </NavigationButton>
        <AnimatedSidebar trigger={<SecondaryButton>تفاصيل</SecondaryButton>}>
          <div className="px-5">
            <div className="text-center text-2xl font-bold mb-10">
              معلومات الدورة
            </div>
            <CreateCourse />
          </div>
        </AnimatedSidebar>
      </div>

      <div className="flex items-center justify-center h-[88vh]">
        <div className="w-2/5 ">{children}</div>
      </div>
    </div>
  );
}
