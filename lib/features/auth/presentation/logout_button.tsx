import { useRouter } from "next/router";
import React from "react";
import { SecondaryButton } from "../../../common/components/atoms";
import { logout } from "../domain/usecases/logout";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <SecondaryButton
      className="text-xs"
      onClick={() => {
        logout({ router });
      }}
    >
      تسجيل الخروج
    </SecondaryButton>
  );
}
