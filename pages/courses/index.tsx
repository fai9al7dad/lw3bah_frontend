import Link from "next/link";
import React from "react";
import { NavigationButton, Wrapper } from "../../lib/common/components/atoms";
import MainLayout from "../../lib/common/components/layouts/main_layout";
import CourseItem from "../../lib/features/courses/presentation/course_item";

export default function index() {
  return (
    <MainLayout>
      <div className="min-h-[85vh] flex items-center justify-center ">
        <div className="w-2/5">
          <Wrapper title="دوراتي">
            <CourseItem title="asdf" />
          </Wrapper>
        </div>
      </div>
    </MainLayout>
  );
}
