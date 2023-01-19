import React from "react";
import MainLayout from "../lib/common/components/layouts/main_layout";
import { useAuth } from "../lib/features/auth/domain/usecases/use_auth";
import CreataCourseButton from "../lib/features/courses/presentation/create_course_button";
import ViewCoursesButton from "../lib/features/courses/presentation/view_courses_button";

export default function IndexPage() {
  const {} = useAuth({
    middleware: "auth",
  });
  return (
    <MainLayout>
      <div className="min-h-[85vh] flex items-center justify-center">
        <ViewCoursesButton className="ml-10" />
        <CreataCourseButton />
      </div>
    </MainLayout>
  );
}
