import React from "react";
import CourseLayout from "../../../../lib/common/components/layouts/CourseLayout";
import { useAuth } from "../../../../lib/features/auth/domain/usecases/use_auth";
import { ViewCourseStats } from "../../../../lib/features/courses/presentation/view_course_stats";

import ViewSections from "../../../../lib/features/sections/presentation/ViewSections";

export default function ViewCourseSections() {
  const {} = useAuth({
    middleware: "auth",
  });
  return (
    <CourseLayout>
      <ViewCourseStats/>
      <ViewSections />
    </CourseLayout>
  );
}
