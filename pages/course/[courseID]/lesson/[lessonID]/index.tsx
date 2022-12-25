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
        <DeleteSlideModal slide={currentSlide!} />
      </Modal>
      <div
        className={`${
          true ? "opacity-1 translate-y-0" : "opacity-0 translate-y-28"
        } transition-all duration-150`}
      >
        <Wrapper>
          {slideIsChanging ? (
            <div>...</div>
          ) : (
            <div>
              <DisplaySlideBasedOnType slide={currentSlide} />
            </div>
          )}
        </Wrapper>
      </div>
    </LessonLayout>
  );
}

const DeleteSlideModal = ({
  slide,
  setShowModal,
}: {
  slide: Slide;
  setShowModal?: any;
}) => {
  const { deleteSlide } = useSlides();
  const [title, setTitle] = React.useState<string>("");

  const onDelete = (e: any) => {
    e.preventDefault();

    deleteSlide(slide);
  };
  return (
    <div className="">
      <div className="text-center text-2xl font-bold mb-2">
        هل انت متاكد من حذف الشريحة؟
      </div>
      <div className="text-sm mb-10 text-center">
        هذا الاجراء لا يمكن التراجع عنه
      </div>
      {slide.title ? (
        <div>
          <TextInput
            className="w-full"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
            label="اكتب اسم الشريحة للتأكيد"
          />
          <div className="text-sm mt-2 mb-20 text-right">
            اسم الشريحة: {slide?.title}
          </div>
        </div>
      ) : null}

      <div className="flex justify-between">
        <PrimaryButton
          className="w-1/2"
          onClick={(e: any) => {
            if (title !== slide?.title && slide.title)
              return toast.error("اسم الدورة غير صحيح");
            setShowModal(false);
            onDelete(e);
          }}
        >
          نعم
        </PrimaryButton>
        <SecondaryButton className="w-1/2" onClick={() => setShowModal(false)}>
          لا
        </SecondaryButton>
      </div>
    </div>
  );
};
