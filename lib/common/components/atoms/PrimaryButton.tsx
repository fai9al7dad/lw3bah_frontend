import React from "react";

export function PrimaryButton(
  {
    className,
    children,
    onClick,
  }: { className?: string; children: React.ReactNode; onClick?: () => void },
  props: any
) {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-10  transition-all duration-75 shadow-primary-button bg-yellow-400 text-yellow-800 text-center font-bold rounded-lg active:translate-y-1 active:shadow-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
