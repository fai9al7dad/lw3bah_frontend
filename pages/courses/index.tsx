import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { NavigationButton, Wrapper } from "../../lib/common/components/atoms";
import MainLayout from "../../lib/common/components/layouts/main_layout";
import { fetcher } from "../../lib/common/data/data_sources/fetcher";
import CourseItem from "../../lib/features/courses/presentation/course_item";

export default function index() {
  const courses = useSWR("/api/courses", fetcher);
  console.log(courses);

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
