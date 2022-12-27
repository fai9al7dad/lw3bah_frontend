import { useState } from "react";
import { SecondaryButton } from "./atoms";

export default function AnimatedSidebar({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div onClick={() => setShowSidebar(!showSidebar)}>{trigger}</div>
      {showSidebar == true && (
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="bg-neutral-900/40 w-screen h-screen fixed inset-0 z-40 "
        />
      )}
      <div
        className={`top-0 right-0 w-[90vw] lg:w-[30vw] bg-white  shadow-2xl  text-primary-text fixed h-screen overflow-y-scroll z-40 ease-out duration-150 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <SecondaryButton
          className="flex text-4xl text-primary-text items-center cursor-pointer fixed right-5 top-6 z-50  "
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
            <path
              fillRule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </SecondaryButton>
        <div className="mt-20  text-primary-text pb-10">{children}</div>
      </div>
    </>
  );
}
