import React from "react";
import { toast } from "react-toastify";
import {
  PrimaryButton,
  SecondaryButton,
  TextInput,
  Wrapper,
} from "../../../../../lib/common/components/atoms";
import LoadingSpinner from "../../../../../lib/common/components/atoms/loading_spinner";
import LessonLayout from "../../../../../lib/common/components/layouts/LessonLayout";
import Modal from "../../../../../lib/common/components/modal";
import { useAuth } from "../../../../../lib/features/auth/domain/usecases/use_auth";
import { Slide } from "../../../../../lib/features/slides/domain/entities/slide";
import { useSlides } from "../../../../../lib/features/slides/domain/usecases/use_slides";
import { DisplaySlideBasedOnType } from "../../../../../lib/features/slides/presentation/display_slide_based_on_type";
import { ViewSlides } from "../../../../../lib/features/slides/presentation/view_slides";
import { Transition } from "@headlessui/react";
import { DeleteSlide } from "../../../../../lib/features/slides/presentation/delete_slide";

export default function index() {
  const {
    slides,
    currentSlide,
    slideIsChanging,
    changeCurrentSlide,
    updateSlideOrder,
  } = useSlides();
  const {} = useAuth({
    middleware: "auth",
  });
  console.log(currentSlide);

  // React.useEffect(() => {
  //   changeCurrentSlide(slides?.[0]);
  // }, []);
  if (!slides)
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <LessonLayout
      slides={
        <ViewSlides
          changeCurrentSlide={changeCurrentSlide}
          currentSlide={currentSlide}
          updateSlideOrder={updateSlideOrder}
          slides={slides}
        />
      }
    >
      {currentSlide?.id != null && (
        <Modal
          // showOverlay={false}
          onClick={() => {
            if (!currentSlide) return toast.error("قم باختيار الشريحة أولا");
          }}
          disableTrigger={!currentSlide}
          trigger={
            <SecondaryButton className="mb-4 text-xs">
              حذف الشريحة
            </SecondaryButton>
          }
        >
          <DeleteSlide slide={currentSlide!} />
        </Modal>
      )}
      <div
        className={`${
          true ? "opacity-1 translate-y-0" : "opacity-0 translate-y-28"
        } transition-all duration-150`}
      >
        <Wrapper>
          <DisplaySlideBasedOnType slide={currentSlide} />
        </Wrapper>
      </div>
    </LessonLayout>
  );
}
