import React from "react";
import { SecondaryButton } from "../../../common/components/atoms";
import HoverToolTip from "../../../common/components/atoms/HoverToolTip";

export default function MarkedQuestion({
  onClick,
  children,
  className,
  isCorrect,
  ...props
}: {
  onClick?: () => void;
  isCorrect: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const neutralChoice = "border-white bg-neutral-200";
  const markedChoice = "border-yellow-400 bg-yellow-200 ";
  return (
    <div
      onClick={onClick}
      className={`py-7 px-5 transition-all duration-75 flex items-center justify-between bg-white border border-neutral-200 text-neutral-700 font-bold rounded-lg ${className}`}
      {...props}
    >
      <HoverToolTip
        content={"تعليم كإجابة صحيحة"}
        showToolTip={isCorrect ? false : true}
      >
        <SecondaryButton
          className={`w-10 h-10 rounded-full border-2  bg-neutral-200 px-0  ${
            isCorrect ? markedChoice : neutralChoice
          }`}
        />
      </HoverToolTip>

      <div>{children}</div>
    </div>
  );
}
