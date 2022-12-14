import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import { useLesson } from "../../../features/lessons/domain/usecases/use_lesson";
import { SlidesRepositery } from "../../../features/slides/data/repositeries/SlidesRepositery";
import { Slide } from "../../../features/slides/domain/entities/slide";
import { useSlides } from "../../../features/slides/domain/usecases/use_slides";
import { api_routes } from "../../data/data_sources/api_routes";
import useSubmit from "../../hooks/use_submit";
import {
  NavigationButton,
  PrimaryButton,
  SecondaryButton,
  TextInput,
} from "../atoms";
import Modal from "../modal";

export default function LessonLayout({
  children,
  slides,
}: {
  children: React.ReactNode;
  slides: React.ReactNode;
}) {
  const [showQuestionPopup, setShowQuestionPopup] = React.useState(false);
  const [showContentPopup, setShowContentPopup] = React.useState(false);
  const { send } = useSubmit();
  const { lesson, isValidating } = useLesson();
  const { mutate: mutateSlides } = useSlides();

  const router = useRouter();
  const handleSubmit = (type: string) => {
    const apiType = Slide.api_slide_types.get(type) as string;

    if (type === Slide.MEDIA_CONTENT || type === Slide.TEXT_CONTENT) {
      send({
        sendFunction: () => {
          return SlidesRepositery.createContent({
            lessonID: router.query.lessonID as string,
            type: apiType,
          });
        },
        onSuccess: (data) => {
          mutateSlides();
        },
      });
    } else {
      send({
        sendFunction: () => {
          return SlidesRepositery.createQuestion({
            lessonID: router.query.lessonID as string,
            type: apiType,
          });
        },
        onSuccess: (data) => {
          mutateSlides();
        },
      });
    }
  };

  return (
    <div>
      <div className="border-b border-netural-300 py-5 px-5 flex items-center justify-between  ">
        <div className="flex">
          <SecondaryButton
            className="text-sm ml-2"
            onClick={() => router.push(`/course/${router.query.courseID}`)}
          >
            ????????
          </SecondaryButton>
          <PrimaryButton className="text-sm">??????</PrimaryButton>
        </div>
        <div className="text-2xl font-bold">
          {!isValidating && lesson?.title}
        </div>
        <div>
          <Modal
            trigger={
              <SecondaryButton className="text-sm">?????? ??????????</SecondaryButton>
            }
          >
            <DeleteLessonModal />
          </Modal>
        </div>
      </div>

      <div className="grid grid-cols-6">
        <div className="col-span-1  border-l border-netural-300 relative">
          <div className="h-[60vh] max-h-[60vh]  overflow-y-scroll">
            <div className="py-5 px-5 ">{slides}</div>
          </div>
          <div className="fixed w-1/6  px-5 bottom-5  ">
            <PrimaryButton
              className="w-full mb-5 text-sm"
              onClick={() => {
                setShowContentPopup(false);
                setShowQuestionPopup(!showQuestionPopup);
              }}
            >
              ?????????? ????????
            </PrimaryButton>
            <PrimaryButton
              onClick={() => {
                setShowQuestionPopup(false);
                setShowContentPopup(!showContentPopup);
              }}
              className="w-full text-sm"
            >
              ?????????? ??????????
            </PrimaryButton>
          </div>
        </div>

        <div className=" col-span-5">
          {showQuestionPopup && !showContentPopup ? (
            <PopUp
              state={[showQuestionPopup, setShowQuestionPopup]}
              type={"question"}
            >
              <>
                <SecondaryButton
                  className="w-full"
                  onClick={() => handleSubmit(Slide.TRUE_FALSE_QUESTION)}
                >
                  ???? ????????
                </SecondaryButton>
                <SecondaryButton
                  onClick={() => handleSubmit(Slide.MULTIPLE_CHOICE_QUESTION)}
                  className="w-full px-5 mt-5"
                >
                  ???????????? ???? ??????????
                </SecondaryButton>
              </>
            </PopUp>
          ) : null}
          {showContentPopup && !showQuestionPopup ? (
            <PopUp
              state={[showContentPopup, setShowContentPopup]}
              type={"content"}
            >
              <>
                <SecondaryButton
                  onClick={() => handleSubmit(Slide.MEDIA_CONTENT)}
                  className="w-full px-5"
                >
                  ?????????? ???? ??????????
                </SecondaryButton>
                <SecondaryButton
                  onClick={() => handleSubmit(Slide.TEXT_CONTENT)}
                  className="w-full mt-5"
                >
                  ???? ????????????
                </SecondaryButton>
              </>
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
const PopUp = ({
  state,
  children,
  type,
}: {
  state: any;
  children: React.ReactNode;
  type: string;
}) => {
  return (
    <div
      className="fixed w-screen h-screen  bg-neutral-900/80 transition-all duration-150 z-50
      "
      onClick={() => state[1](false)}
    >
      <div
        className={`fixed  mr-5 h-40  flex flex-col items-center justify-center bg-white z-50 border-2 border-neutral-200 px-5 py-5 rounded-2xl ${
          type === "question" ? "bottom-14" : "bottom-5"
        }`}
      >
        <div
          className={`absolute -right-2  w-5 h-5 bg-white rotate-45 ${
            type === "content" ? "mt-14" : ""
          }`}
        />
        {children}
      </div>
    </div>
  );
};

const DeleteLessonModal = ({ setShowModal }: { setShowModal?: any }) => {
  const { lesson, del } = useLesson();
  const [title, setTitle] = React.useState<string>("");
  return (
    <div className="text-center">
      <p className="text-xl font-bold mb-2">???? ?????? ????????????</p>
      <p className="text-sm text-netural-500 mb-10">
        ???????? ?????? ?????????? ???????? ??????????
      </p>
      <TextInput
        className="w-full"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
        label="???????? ?????? ?????????? ??????????????"
      />
      <div className="text-sm mt-2 mb-20 text-right">
        ?????? ??????????: {lesson?.title}
      </div>
      <div className="flex justify-center mt-5">
        <SecondaryButton
          className="text-sm mx-2"
          onClick={() => setShowModal(false)}
        >
          ??????????
        </SecondaryButton>
        <PrimaryButton
          className="text-sm mx-2"
          onClick={() => {
            if (lesson?.title !== title)
              return toast.error("???????????? ?????????? ?????? ?????????? ???????? ????????");

            del();
          }}
        >
          ??????
        </PrimaryButton>
      </div>
    </div>
  );
};
