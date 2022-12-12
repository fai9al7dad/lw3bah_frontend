import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NavigationButton } from "../../../common/components/atoms";
import { Lesson } from "../domain/entities/lesson";
import ViewLesson from "./view_lesson";

export default function ViewSectionLessons({ lessons }: { lessons: Lesson[] }) {
  const router = useRouter();

  if (lessons.length === 0) return null;
  return (
    <div>
      {lessons.map((lesson) => (
        <Link
          key={lesson.id}
          href={`/course/${router.query.courseID}/lesson/${lesson.id}`}
        >
          <NavigationButton className="mt-2">
            <ViewLesson key={lesson.id} lesson={lesson} />
          </NavigationButton>
        </Link>
      ))}
    </div>
  );
}
