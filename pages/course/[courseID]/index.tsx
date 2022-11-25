import React from "react";
import CourseLayout from "../../../lib/common/components/layouts/CourseLayout";
import { Course } from "../../../lib/features/courses/entities/course";
import NoSectionsInCourse from "../../../lib/features/sections/presentation/NoSectionsInCourse";
import ViewSections from "../../../lib/features/sections/presentation/ViewSections";

export default function index() {
  const sections: Course[] = [new Course(1, "Section 1", "ssdf", "asdf")];
  if (sections.length < 1) {
    return (
      <CourseLayout>
        <NoSectionsInCourse />
      </CourseLayout>
    );
  }
  return (
    <CourseLayout>
      <ViewSections />
    </CourseLayout>
  );
}
