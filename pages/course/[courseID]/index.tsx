import React from "react";
import CourseLayout from "../../../lib/common/components/layouts/CourseLayout";

import ViewSections from "../../../lib/features/sections/presentation/ViewSections";

export default function index() {
  return (
    <CourseLayout>
      <ViewSections />
    </CourseLayout>
  );
}
