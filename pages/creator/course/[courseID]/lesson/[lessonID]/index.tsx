import React from "react";
import { toast } from "react-toastify";
import {
  PrimaryButton,
  SecondaryButton,
  TextInput,
  Wrapper,
} from "../../../../../../lib/common/components/atoms";
import LessonLayout from "../../../../../../lib/common/components/layouts/LessonLayout";
import { useAuth } from "../../../../../../lib/features/auth/domain/usecases/use_auth";
import { DisplaySlideBasedOnType } from "../../../../../../lib/features/slides/presentation/display_slide_based_on_type";
import { ViewSlides } from "../../../../../../lib/features/slides/presentation/view_slides";
import { LessonProvider } from "../../../../../../lib/features/lessons/domain/usecases/lesson_context";

export default function ViewLesson() {
  const {} = useAuth({
    middleware: "auth",
  });

  return (
    <LessonProvider>
      <LessonLayout slides={<ViewSlides />}>
        <div
          className={`${
            true ? "opacity-1 translate-y-0" : "opacity-0 translate-y-28"
          } transition-all duration-150`}
        >
          <Wrapper>
            <DisplaySlideBasedOnType />
          </Wrapper>
        </div>
      </LessonLayout>
    </LessonProvider>
  );
}
