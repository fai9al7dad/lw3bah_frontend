import React from "react";

export function NavigationButton(
  {
    className,
    children,
    onClick,
    href,
  }: {
    href?: string;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
  },
  props: any
) {
  return (
    <div
      onClick={onClick}
      className={`py-3 hover:bg-neutral-50 cursor-pointer transition-all duration-75 border-2  border-neutral-200 shadow-navigation-button bg-white text-neutral-800 text-center font-bold rounded-lg active:translate-y-1 active:shadow-none ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
