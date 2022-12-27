import { Slide } from "../domain/entities/slide";
import { useSlides } from "../domain/usecases/use_slides";
import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../../../common/components/atoms";
import { toast } from "react-toastify";
export const DeleteSlide = ({
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
              return toast.error("اسم الشريحة غير صحيح");
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
