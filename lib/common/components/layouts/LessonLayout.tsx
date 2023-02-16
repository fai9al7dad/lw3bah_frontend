import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import { useLesson } from "../../../features/lessons/domain/usecases/use_lesson";
import { DeleteLesson } from "../../../features/lessons/presentation/delete_lesson";
import { SlidesRepositery } from "../../../features/slides/data/repositeries/SlidesRepositery";
import { Slide } from "../../../features/slides/domain/entities/slide";
import { TABS_MAPPINGS } from "../../../features/slides/domain/entities/tabs_mappings";
import { useSlides } from "../../../features/slides/domain/usecases/use_slides";
import { PopUp } from "../../../features/slides/presentation/slide_popup";
import { api_routes } from "../../data/data_sources/api_routes";
import useSubmit from "../../hooks/use_submit";
import {
  NavigationButton,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../atoms";
import Modal from "../modal";
import { ImgPlaceholder } from "../SvgIcons";

export default function LessonLayout({
  children,
  slides,
}: {
  children: React.ReactNode;
  slides: React.ReactNode;
}) {
  const [isPopupShown, setIsPopupShown] = React.useState(false);
  const { lesson, isValidating } = useLesson();
  const { mutate: mutateSlides } = useSlides();
  const { send } = useSubmit();
  const router = useRouter();

  const togglePopup = () => {
    setIsPopupShown(!isPopupShown);
  };

  // const

  return (
    <div>
      <div className="border-b border-netural-300 py-5 px-5 flex items-center justify-between  ">
        <div className="flex">
          <SecondaryButton
            className="text-sm ml-2"
            onClick={() =>
              router.push(`/creator/course/${router.query.courseID}`)
            }
          >
            عودة
          </SecondaryButton>
          <PrimaryButton className="text-sm">نشر</PrimaryButton>
        </div>
        <div className="text-2xl font-bold">
          {!isValidating && lesson?.title}
        </div>
        <div>
          <Modal
            trigger={
              <SecondaryButton className="text-sm">حذف الدرس</SecondaryButton>
            }
          >
            <DeleteLesson />
          </Modal>
        </div>
      </div>

      <div className="grid grid-cols-6">
        <div className="col-span-1  border-l border-netural-300 relative">
          <div className=" min-h-[65vh] max-h-[74vh] md:max-h-[65vh] lg:max-h-[75vh] 2xl:max-h-[80vh]  overflow-y-scroll">
            <div className="py-5 px-5 ">{slides}</div>
          </div>
          <div className="fixed w-1/6  px-5 bottom-5  ">
            <PrimaryButton
              onClick={togglePopup}
              className="w-full text-4xl py-1"
            >
              +
            </PrimaryButton>
          </div>
        </div>

        <div className=" col-span-5">
          {isPopupShown ? (
            <PopUp togglePopup={togglePopup} state={[setIsPopupShown]}>
              {(active: number) => TABS_MAPPINGS[active]}
            </PopUp>
          ) : null}

          <div className="flex items-center justify-center min-h-[85vh]">
            <div className="w-2/6 py-20">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
