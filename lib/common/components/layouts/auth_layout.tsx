import Link from "next/link";
import React from "react";
import { NavigationButton } from "../atoms";
export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-12">
      <div className="w-1/4">
        {/* <div className="flex items-center">
          <NavigationButton className="w-1/4 mb-5">العودة</NavigationButton>
        </div> */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};
