import React from "react";
import LogoutButton from "../../../features/auth/presentation/logout_button";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="border-b border-netural-300 py-5 px-10 flex items-center justify-between">
        <LogoutButton />
        <div className="text-xl font-bold">مرحبا فلان الفلاني</div>
      </div>
      {children}
    </div>
  );
}
