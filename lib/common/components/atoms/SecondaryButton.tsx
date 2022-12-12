import React from "react";

export function SecondaryButton(
  {
    className,
    children,
    onClick,
  }: { className?: string; children?: React.ReactNode; onClick?: () => void },
  props: any
) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`py-3 px-10 transition-all duration-75 shadow-secondary-button bg-neutral-200 text-neutral-700 text-center font-bold rounded-lg active:translate-y-1 active:shadow-none ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
