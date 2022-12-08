import { useRouter } from "next/router";
import React from "react";
import { NavigationButton, PrimaryButton, SecondaryButton } from "../atoms";

export default function LessonLayout({
  children,
  slides,
}: {
  children: React.ReactNode;
  slides: React.ReactNode;
}) {
  const [showQuestionPopup, setShowQuestionPopup] = React.useState(false);
  const [showContentPopup, setShowContentPopup] = React.useState(false);

  const router = useRouter();
  return (
    <div>
      <div className="border-b border-netural-300 py-5 px-10 flex items-center justify-end">
        <SecondaryButton
          className="text-sm"
          onClick={() => router.push(`/course/${router.query.courseID}`)}
        >
          عودة
        </SecondaryButton>
        <PrimaryButton className="ml-2 text-sm">نشر</PrimaryButton>
      </div>

      <div className="grid grid-cols-6">
        <div className="col-span-1 min-h-[87vh] overflow-y-auto border-r border-r-netural-300 relative">
          <div className="py-5 px-5">{slides}</div>

          <div className="absolute w-full px-5 bottom-10 ">
            <PrimaryButton
              className="w-full mb-5"
              onClick={() => {
                setShowContentPopup(false);
                setShowQuestionPopup(!showQuestionPopup);
              }}
            >
              إضافة سؤال
            </PrimaryButton>
            <PrimaryButton
              onClick={() => {
                setShowQuestionPopup(false);
                setShowContentPopup(!showContentPopup);
              }}
              className="w-full"
            >
              إضافة شريحة
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
                <SecondaryButton className="w-full">صح وخطأ</SecondaryButton>
                <SecondaryButton className="w-full px-5 mt-5">
                  اختيار من متعدد
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
                <SecondaryButton className="w-full px-5">
                  وسيطة مع عنوان
                </SecondaryButton>
                <SecondaryButton className="w-full mt-5">
                  نص وعنوان
                </SecondaryButton>
              </>
            </PopUp>
          ) : null}
          <div className="flex items-center justify-center min-h-[85vh]">
            <div className="w-2/6">{children}</div>
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
      className={` fixed w-screen h-screen  bg-neutral-900/80 transition-all duration-150 z-50 ${
        state[0] ? "opacity-1" : "opacity-0"
      }`}
      onClick={() => state[1](false)}
    >
      <div
        className={`fixed  ml-5 h-40  flex flex-col items-center justify-center bg-white z-50 border-2 border-neutral-200 px-5 py-5 rounded-2xl ${
          type === "question" ? "bottom-14" : "bottom-5"
        }`}
      >
        <div
          className={`absolute -left-2  w-5 h-5 bg-white rotate-45 ${
            type === "content" ? "mt-14" : ""
          }`}
        />
        {children}
      </div>
    </div>
  );
};
