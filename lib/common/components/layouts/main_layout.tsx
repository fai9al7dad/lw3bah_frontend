import React from "react";
import { useAuth } from "../../../features/auth/domain/usecases/use_auth";
import LogoutButton from "../../../features/auth/presentation/logout_button";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth({});

  return (
    <div>
      <div className="border-b border-netural-300 py-5 px-10 flex items-center justify-between">
        <LogoutButton />
        <div className="text-xl font-bold">
          <span className="ml-2">{user?.name} </span>
          مرحبا
        </div>
      </div>
      {children}
    </div>
  );
}
