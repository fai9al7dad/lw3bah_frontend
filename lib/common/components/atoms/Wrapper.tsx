import React from "react";

export const Wrapper = ({
  title,
  children,
  innerRef,
}: {
  title?: string;
  children: React.ReactNode;
  innerRef?: any;
}) => {
  return (
    <div
      ref={innerRef}
      className="border-2 border-neutral-200 px-5 py-5 rounded-lg"
    >
      {title != null ? (
        <div className="text-2xl font-bold text-center mb-5">{title}</div>
      ) : null}
      {children}
    </div>
  );
};
